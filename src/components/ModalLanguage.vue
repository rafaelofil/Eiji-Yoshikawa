<script setup lang="ts">
import { useLanguageStore } from '../stores/language';
import { useModalLanguageStore } from '../stores/modalLanguage';

const storeLanguage = useLanguageStore();
const storeModalLanguage = useModalLanguageStore();

</script>

<template>
  <div class="modal">
    <button class="close" @click="storeModalLanguage.closeModal">X</button>

    <div v-if="storeLanguage.languageEnglish" class="languages">
      <p class="choosed">English</p>
      <p @click="storeLanguage.setPortuguese">Portuguese</p>
    </div>
    <div v-else class="languages">
      <p @click="storeLanguage.setEnglish">Inglês</p>
      <p class="choosed">Português</p>
    </div>
  </div>
</template>

<style>
</style>
