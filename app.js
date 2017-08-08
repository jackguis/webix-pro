import core from "libs/webix-jet/libs/core";
import Polyglot from "libs/webix-jet/libs/polyglot";
import locale from "libs/webix-jet/helpers/locale";




let app = core.create({
	id: "admin-demo",
	name: "Webix Admin",
	version: "0.1",
	debug: true,
	start: "/app/dashboard"
});

app.use(locale);