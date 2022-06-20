<script setup lang="ts">
import { useLanguageStore } from '../stores/language';
import AccordionList from './AccordionList.vue';

const languageStore = useLanguageStore();

</script>

<template>
  <section id="intro">
    <div v-if="languageStore.languageEnglish">
      <div class="text">
        <p class="paragraph-intro">
          <span class="emphasis">Eiji</span>
          Yoshikawa was born in the province of Kanagawa, near Tokyo, son of a samurai who passed away after the Meiji
          period. His family feel apart when he was still a young boy, this burdened him with great responsibility early
          in life. He was responsible for supporting his younger brother and sister. That’s reason why he wasn’t able to
          finish his elementary school.
        </p>
        <p>At the age of 12, Yoshikawa started working as an errand boy. It wasn't until he got a job in a newspaper
          that
          he began writing, he has worked before in different jobs. There were tough times, Eiji wrote about the year
          1909: “We continued to live in the blackest depths of poverty, and there were times when none of us in family
          had a bite to eat…”</p>
        <p>He started his literary career at the age of 22 years old, parallel to journalism, he began writing tales and
          historical romance, often published in the best newspapers in Japan. He became the most-read novelist in his
          country for almost 30 years. His masterpiece is Musashi, initially published in Asashi Shimbum between 1935
          and
          1939 with 1013 episodes. Later his writings in romance were published separately in books, called: Earth,
          Water,
          Fire, Wind, Sky, Sun and Moon, The Perfect Light. The writing are a representation of man's search for self
          improvement starting with the Earth, where the man discover himself not as animal, but as human being with a
          proposition to developer his spiritual and innate until catch up the Sky. Takezo is the samurai described on
          this journey.</p>
      </div>
    </div>
    <div v-else>
      <div class="text">
        <p class="paragraph-intro">
          <span class="emphasis">Eiji</span>
          Yoshikawa nasceu na província de Kanagawa, perto de Tokyo, filho de um samurai que empobreceu após o período
          de
          Meiji. Sua família separou-se quando ele ainda era um menino, deixando uma grande responsabilidade sobre seus
          ombros, de cuidar de seus irmãos. Por esse motivo, ele não conseguiu terminar o ensino fundamental.
        </p>
        <p>Aos 12 anos, Yoshikawa foi contratado como garoto de recado, até que finalmente conseguiu um trabalho no
          jornal
          e então começou a escrever. Antes ele trabalhou em diferentes áreas. Foram tempos difíceis, Eiji escreveu
          sobre
          o ano de 1909: "Continuamos a viver nas mais negras profundezas da pobreza, e houve momentos em que nenhum de
          nós da família tinhamos algo para comer… "</p>
        <p>Início sua carreira na literatura aos 22 anos, paralelamente ao jornalismo, começou a escrever contos e
          romances históricos, muitas vezes publicados nos jornais de maior prestígio do Japão. Ele tornou-se o
          novelista
          mais lido de seu país por quase 30 anos. Sua obra-prima é Musashi, inicialmente publicada na Asashi Shimbum
          entre 1935 e 1939 com 1013 episódios. Depois este romance foi separado em sete livros, chamados: A Terra, A
          Àgua, O Fogo, O Vento, O Céu, As Duas Forças e Harmonia Final. Os livros representam a busca do
          aperfeiçoamento
          humano, començando na Terra, onde o homem descobre a si mesmo não como um animal e sim como um ser humano com
          um
          propósito de desenvolver sua vida espiritual e suas inatas até chegar ao Ceú. Takezo é o samurai descrito
          nesta
          jornada.
        </p>
      </div>
    </div>
  </section>

  <AccordionList />

  <section>
    <div v-if="languageStore.languageEnglish">
      <div class="text">
        <p>
          <span class="emphasis">The</span>
          writer had a lot of varied experiences that developer him as rich artist with sense of humanity and the beauty
          that is shown all of his work, always with the message about human improvement. These experiences could be
          represented in his deed: “With the exception of murder, theft, and rape, I have done everything that any of my
          contemporaries can possibly have done.” Few people can put life in his work, he succeeded and still printed
          reality when he wrote.
        </p>
        <p>Yoshikawa was mainly influenced by classics such as The Tale of the Heike, Tale of Genji, Outlaws of the
          Marsh, and Romance of the Three Kingdoms, many of which he retold in his own style. The novelist’s style
          yielded great titles and award as the Cultural Order of Merit in 1960(the most important award for a man of
          letters in Japan), the Order of the Sacred Treasure and the Mainichi Art Award. His works are full of Buddhist
          and Shinto religious references, as well as quotes from Chinese classics.</p>

        <img class="img-musashi" src="../assets/img/Musashi_Vagabond.jpg" alt="Musashi Vagabond">
      </div>
      <div class="text">
        <p>At the age of 70 years old Yoshikawa death of cancer, he left a masterpiece that change a generation and
          getting reputation as one of the best historical novelists of Japan.</p>
      </div>
    </div>
    <div v-else>
      <div class="text">
        <p>
          <span class="emphasis">O</span>
          escritor teve muitas experiências variadas que o construíram como artista rico, com senso de humanidade e
          beleza que é mostrada em todo o seu trabalho, sempre com a mensagem sobre o aperfeiçoamento humano. Essas
          experiências podem ser representadas em um de seus escritos: "Com exceção de assassinato, roubo e estupro, eu
          fiz tudo o que qualquer um de meus contemporâneos pode ter feito". Poucas pessoas conseguem dar vida a seu
          trabalho, ele alcançou essa proesa e ainda imprimiu a realidade ao escrever.
        </p>
        <p>Yoshikawa foi influenciado principalmente por clássicos como O Conto do Heike, Conto de Genji, Margem da Água
          e Romance dos Três Reinos, muitos dos quais recontou em seu próprio estilo. O estilo do romancista rendeu
          grandes títulos e prêmios como a Ordem do Mérito Cultural em 1960 (o prêmio mais importante para um homem de
          letras no Japão), a Ordem do Tesouro Sagrado e o Prêmio de Arte Mainichi. Suas obras estão cheias de
          referências religiosas budistas e xintoístas, além de citações de clássicos chineses.</p>

        <img class="img-musashi" src="../assets/img/Musashi_Vagabond.jpg" alt="Musashi Vagabond">
      </div>
      <div class="text">
        <p>Aos 70 anos Yoshikawa faleceu de câncer, deixando obras-primas que mudaram uma geração, é reconhecido como um
          dos melhores romancistas históricos do Japão.</p>
      </div>
    </div>
  </section>
</template>

<style>
p {
  margin-bottom: 1rem;
}

.text {
  display: flex;
  flex-direction: column;

  margin: 0.25rem auto 0.25rem auto;
  padding: 0 0.5rem;

  max-width: 680px;

  font-size: 1.3rem;
  line-height: 1.8rem;
}

.paragraph-intro {
  margin-top: 2rem;
}

.emphasis {
  display: block;

  margin-right: 0.5rem;

  font-size: 3.9rem;
  line-height: 0.83;

  float: left;

  position: relative;
}

@media only screen and (max-width: 787px) {
  .emphasis {
    font-size: 3.2rem;
  }

  .text {
    padding: 0 1.5rem;
    margin-bottom: 0.5rem;

    font-size: 1.15rem;
    line-height: 1.6rem;
  }
}
</style>
