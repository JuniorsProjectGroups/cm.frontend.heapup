import { createPinia } from "pinia";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "@/App.vue";
import "@/index.css";
import i18nMessages from "@/i18n.json";

const defaultLanguage = () => {
  const result = navigator.language.split("-")[0];
  if (result !== "fr") {
    return "en";
  }
  return result;
};
const locale = defaultLanguage();
const i18n = createI18n({
  locale,
  fallbackLocale: "en",
  messages: i18nMessages,
});
createApp(App).use(i18n).use(createPinia()).mount("#app");
//# sourceMappingURL=main.js.map
