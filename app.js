import core from "libs/webix-jet/libs/core";

let app = core.create({
	id: "admin-demo",
	name: "Webix Admin",
	version: "0.1",
	debug: true,
	start: "/app/dashboard"
});