import { defineStore } from "pinia"
import { useModalLanguageStore } from "./modalLanguage";

export const useLanguageStore = defineStore({
  id: 'language',
  state: () => ({
    languageEnglish: true,
  }),


  actions: {
    setPortuguese() {
      this.languageEnglish = false;
      this.closeModal();
    },

    setEnglish() {
      this.languageEnglish = true;
      this.closeModal();
    },

    closeModal() {
      const modalLanguageStore = useModalLanguageStore();

      modalLanguageStore.modalLanguage = false;
    }
  },
})
