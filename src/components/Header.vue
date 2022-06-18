<script setup lang="ts">
</script>

<template>
  <main id="main">
    <div class="image-principal">
      <img src="../assets/img/eiji.jpg" alt="Eiji-Yoshikawa">
    </div>

    <div id="header">
      <div class="english active">
        <h1>EIJI YOSHIKAWA</h1>
        <p>1982 - 1962</p>
        <quote>"Hold on to your life and make it honest and brave"</quote>
      </div>

      <div class="portuguese">
        <h1>EIJI YOSHIKAWA</h1>
        <p>1982 - 1962</p>
        <quote>"Mantenha sua vida e torne-a honesta e corajosa."</quote>
      </div>

      <button id="scroll">
        <img src="../assets/img/scrollclick.svg" alt="Down Scroll Button">
      </button>
    </div>
    <button class="cc-button" data-modal="open">CC</button>
  </main>
</template>

<style>
main {
  display: flex;

  justify-content: space-between;
}

.image-principal img {
  height: 100vh;
}

.cc-button {
  cursor: pointer;

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
  font-size: 3.75rem;
  text-align: center;
  font-weight: bold;
  line-height: 3.75rem;
}

#header p {
  font-size: 2rem;
  text-align: center;
  line-height: 2rem;
  margin-bottom: 1rem;
}

#header quote {
  font-size: 1.5rem;
  font-style: italic;
}

#scroll {
  background-color: transparent;

  font-size: 1.15rem;
  font-family: Arial, Helvetica, sans-serif;
  font-style: 150px;

  border: none;

  position: absolute;
  left: 50%;
  bottom: 0;
}
</style>


