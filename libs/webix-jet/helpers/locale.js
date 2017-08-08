import Polyglot from "libs/webix-jet/libs/polyglot";

var defaultlang = "en";
var key = "--:app:lang";
var current_lang = "";

function _get_lang() {
	return webix.storage.local.get(key) || "zh";
}
function _set_lang(lang, init) {
	webix.storage.local.put(key, lang);
	document.location.reload();
}

function create_locale(lang) {
    
	System.registerDynamic("locale", [`locales/${lang}`], true, function (require, exports, module) {
		let data = require(`locales/${lang}`);

		let polyglot = new Polyglot({ phrases:data.default });

		module.exports = function(key,...args){
			return polyglot.t(key,...args);
		}

	})

}

export default {
	$oninit: function (app, config) {
		key = (app.config.id || "") + key;
		var lang = _get_lang();
		create_locale(lang);
	},
	setLang: _set_lang,
	getLang: _get_lang
};
