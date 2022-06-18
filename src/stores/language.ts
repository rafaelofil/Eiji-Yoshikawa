import { defineStore } from "pinia"

export const useLanguageStore = defineStore({
  id: 'language',
  state: () => ({
    languageEnglish: false,
  }),

  actions: {
    setPortuguese() {
      this.languageEnglish = false;
    },

    setEnglish() {
      this.languageEnglish = true;
    }
  }
})
