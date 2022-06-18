<script setup lang="ts">
import { useLanguageStore } from '../stores/language';
import { useModalLanguageStore } from '../stores/modalLanguage';

const storeLanguage = useLanguageStore();
const storeModalLanguage = useModalLanguageStore();

function clickOutModal(event: object) {
  const containerModal = document.querySelector(".modal-container");

  if (event.target === containerModal)
    storeModalLanguage.closeModal();
}

</script>

<template>
  <div class="modal-container" @click="clickOutModal">
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
  </div>
</template>

<style>
.choosed {
  cursor: default !important;
}

.choosed::after {
  content: "✓";
  margin-left: 0.5rem;
}

.modal-container {
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #454545;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);

  position: absolute;

  padding: 40px;
}

.modal p {
  display: block;

  cursor: pointer;

  font-size: 1.3rem;
  color: #ffffff;

  margin: 1rem 1.5rem 1rem 1.5rem;
}

.close {
  cursor: pointer;
  height: 48px;
  width: 48px;

  position: absolute;
  top: -20px;
  right: -20px;

  background: #ffffff;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);

  border-radius: 50%;
}
</style>
