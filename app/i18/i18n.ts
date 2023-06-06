import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { I18nManager } from "react-native"

const en = require("./en.json")
const fa = require("./fa.json")
const ps = require("./ps.json")

// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n({
  en,
  fa,
  ps,
});

// Set the locale once at the beginning of your app.
// i18n.locale = getLocales()[0].languageCode;

if (false){
  i18n.locale = "fa";
  I18nManager.allowRTL(!false);
  I18nManager.forceRTL(!false);
} else {
  i18n.locale = "en";
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);
}



i18n.enableFallback = true;

export default i18n;
