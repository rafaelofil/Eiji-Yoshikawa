<script setup lang="ts">
import { useLanguageStore } from '../stores/language';
import { useModalLanguageStore } from '../stores/modalLanguage';
import ModalLanguage from './ModalLanguage.vue';

const storeLanguage = useLanguageStore();
const storeModalLanguage = useModalLanguageStore();

function scrollToIntro() {
  const introTop = document.getElementById("intro")?.offsetTop;

  window.scrollTo({
    top: introTop,
    behavior: 'smooth',
  })
}

</script>

<template>
  <main id="main">
    <div class="image-principal">
      <img src="../assets/img/eiji.jpg" alt="Eiji-Yoshikawa">
    </div>

    <div id="header">
      <div v-if="storeLanguage.languageEnglish">
        <h1>EIJI YOSHIKAWA</h1>
        <p>1982 - 1962</p>
        <div id="quote">
          <quote>"Hold on to your life and make it honest and brave"</quote>
        </div>
      </div>
      <div v-else>
        <h1>EIJI YOSHIKAWA</h1>
        <p>1982 - 1962</p>
        <div id="quote">
          <quote>"Mantenha sua vida e torne-a honesta e corajosa."</quote>
        </div>
      </div>

      <button id="scroll" @click="scrollToIntro">
        <img src="../assets/img/scrollclick.svg" alt="Down Scroll Button">
      </button>
    </div>

    <button class="cc-button" @click="storeModalLanguage.openModal">CC</button>
  </main>

  <div v-if="storeModalLanguage.modalLanguage">
    <ModalLanguage />
  </div>
</template>

<style>
#main {
  display: flex;

  justify-content: space-between;
}

.image-principal img {
  height: 100vh;
}

.cc-button {
  cursor: pointer;

  background-color: #ffffff;

  width: 50px;
  height: 50px;

  margin-right: 5%;
  margin-top: 5%;

  font-size: 1.15rem;
  font-family: Arial, Helvetica, sans-serif;
  font-style: bold;

  border: solid;
  border-color: #707070;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
}

#header {
  align-self: center;
  flex-direction: column;

  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

#header h1 {
  font-size: 3.5rem;
  text-align: center;
  font-weight: bold;
  line-height: 3.5rem;
}

#header p {
  font-size: 2rem;
  text-align: center;
  line-height: 2rem;
  margin-bottom: 1rem;
}

#header quote {
  text-align: center;
  font-size: 1.4em;
  font-style: italic;
}

#scroll {
  cursor: pointer;

  background-color: transparent;

  font-size: 1.15rem;
  font-family: Arial, Helvetica, sans-serif;
  font-style: 150px;

  border: none;

  position: absolute;
  left: 50%;
  bottom: -0.55%;
}

@media only screen and (max-width: 982px) {
  #main {
    height: 100vh;

    margin: 0 auto;
  }

  .image-principal {
    display: none;
  }

  #header {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cc-button {
    position: absolute;
    left: 90%;
  }
}

@media only screen and (max-width: 787px) {
  #header h1 {
    font-size: 3rem;
    line-height: 3rem;
  }

  #header p {
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  #quote {
    padding: 0 1.5rem;
  }

  #quote quote {
    font-size: 1.2rem;
    font-style: italic;
  }

  .cc-button {
    left: 80%;
  }

  #scroll {
    left: 40%;
  }
}
</style>
