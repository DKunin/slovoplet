"use strict";

const yc = require("yandex-cloud");
const csv = require("csv-parser");
const fs = require("fs");
const chance = require("chance").Chance();
const results = [];

fs.createReadStream("dict.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data.word))
    .on("end", () => {
        // console.log(results.slice(0,10));
    });

function getLastLetter(word) {
    const ar = word.split("");
    return ar[ar.length - 1];
}

function excludeLetters(word) {
    return word.replace(/[ыьъ]/g, "");
}

module.exports.handler = async function(event, context) {
    let lastLetter = getLastLetter(
        excludeLetters(event.request.original_utterance || "привет")
    );

    let wordsStartingWith = results.filter(
        (word) => word.indexOf(lastLetter) === 0 && word.length > 4
    );

    const selectedWord =
        wordsStartingWith[
            chance.integer({ min: 0, max: wordsStartingWith.length - 1 })
        ];


    return {
        version: event.version,
        session: event.session,
        //row: t,
        response: {
            text: `Мне на ${lastLetter}. ${selectedWord}. Тебе на ${getLastLetter(
                excludeLetters(selectedWord)
            )}`,

            // Свойство response.end_session возвращается со значением false,
            // чтобы диалог не завершался.
            end_session: false,
        },
    };
};
