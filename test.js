"use strict";

const script = require("./index");

const testJson = {
	meta: {
		client_id: "ru.yandex.searchplugin/7.16 (none none; android 4.4.2)",
		interfaces: {
			account_linking: {},
			payments: {},
			screen: {},
		},
		locale: "ru-RU",
		timezone: "UTC",
	},
	request: {
		original_utterance: "экватор",
		command: "",
		nlu: {
			entities: [],
			tokens: [],
		},
		type: "SimpleUtterance",
	},
	session: {
		message_id: 0,
		new: true,
		session_id: "1c6c406c-c777-4b7f-8269-6ec4369319ad",
		skill_id: "4f093d27-be1c-4324-998b-683f68700a66",
		user_id: "45eb09c1-c32c-4405-bad7-7b716a9dc7d7",
	},
	version: "1.0",
};
setTimeout(() => {
	console.log(script.handler(testJson));
}, 500);
