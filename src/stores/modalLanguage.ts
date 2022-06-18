import { defineStore } from "pinia"

export const useModalLanguageStore = defineStore({
  id: "modalLanguage",
  state: () => ({
    modalLanguage: false,
  }),

  actions: {
    openModal() {
      this.modalLanguage = true;
    },

    closeModal() {
      this.modalLanguage = false;
    }
  }
})
