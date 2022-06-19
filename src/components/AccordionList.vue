<script setup lang="ts">
import { onMounted } from 'vue';
import { useLanguageStore } from '../stores/language';

const languageOption = useLanguageStore();
const activeClass: string = "active";

function activeAccordion() {
  const accordionList: HTMLElement = document.querySelectorAll(".accordion dt");

  if (accordionList.length) {
    const target: HTMLElement = event.target;

    target.classList.toggle(activeClass);
    target.nextElementSibling.classList.toggle(activeClass);
  }
}

onMounted(() => {
  const firstAccordionOpen: HTMLElement = document.querySelector(".open-dt")

  firstAccordionOpen.classList.add(activeClass);
  firstAccordionOpen.nextElementSibling.classList.add(activeClass);
})
</script>

<template>
  <section class="accordion-list">
    <div v-if="languageOption">
      <h2>MASTERPIECES BY YOSHIKAWA</h2>
      <dl class="accordion">
        <dt class="open-dt" @click="activeAccordion"> Musashi</dt>
        <dd>
          <p>The classic samurai novel about the real exploits of the most famous swordsman. Musashi is a novel in the
            best tradition of Japanese story telling. It is a living story, subtle and imaginative, teeming with
            memorable characters, many of them historical. Interweaving themes of unrequited love, misguided revenge,
            filial piety and absolute dedication to the Way of the Samurai, it depicts vividly a world Westerners know
            only vaguely.</p>
        </dd>
        <hr>
        <dt @click="activeAccordion"> La Pierre Et Le Sabre</dt>
        <dd>
          <p>17th century Japan, the young Takezo became the samurai Miyamoto Musashi and had only one goal: to strive
            for perfection. Go beyond his feelings and persevere to improve, improve and understand the deeper meaning
            of life by developing his art, the art of combat. Duel after duel, he created his own style. His initiatory
            journey, combining adventures, love and self-quest, took us into a great epic fresco.</p>
          <p> The book re-telling of the myth of Musashi in Japan, written more with a fable and poem appearance than a
            story.</p>
        </dd>
        <hr>
        <dt @click="activeAccordion"> La Parfaite Lumiére </dt>
        <dd>
          <p>Suddenly he saw the truth: the techniques of the sword man were not his goal; he was looking forward a way
            of the saber which embraced everything. (...) By the first time, he wondered if that was possible for an
            insignificant human being to be one with the universe. "The young Takezo has become Miyamoto Musashi, a
            formidable samurai. He now knows that the art of the saber is only acquired through sacrifice and choice,
            that it is also the art of Life. In the lands surrounding the Mount Fuji, the beautiful Otsu, the disciple
            Jotaro and the Iori child follow in the footsteps of Musashi: those who worship him must also accept the
            harsh discipline of the samurai. wisdom, the only way to the perfect light. But to reach it, Musashi must
            engage in the ultimate battle.</p>
          <p>The book re-telling of the myth of Musashi in Japan, written more with a fable and poem appearance than a
            story.</p>
        </dd>
        <hr>
        <dt @click="activeAccordion"> Taiko </dt>
        <dd>
          <p>In the tempestuous closing decades of the sixteenth century, the Empire of Japan writhes in chaos as the
            shogunate crumbles and rival warlords battle for supremacy. Warrior monks in their armed citadels block the
            road to the capital; castles are destroyed, villages plundered, fields put to the torch.</p>
          <p>Amid this devastation, three men dream of uniting the nation. At one extreme is the charismatic but brutal
            Nobunaga, whose ruthless ambition crushes all before him. At the opposite pole is the cold, deliberate
            Ieyasu, wise in counsel, brave in battle, mature beyond his years. But the keystone of this triumvirate is
            the most memorable of all, Hideyoshi, who rises from the menial post of sandal bearer to become
            Taiko-absolute ruler of Japan in the Emperor's name.</p>
          <p>Tells many stories: of the fury of Nobunaga and the fatal arrogance of the black-toothed Yoshimoto; of the
            pathetic downfall of the House of Takeda; how the scorned Mitsuhide betrayed his master; how once
            impregnable ramparts fell as their defenders died gloriously. Most of all, though, Taiko is the story of how
            one man transformed a nation through the force of his will and the depth of his humanity. Filled with scenes
            of pageantry and violence, acts of treachery and self-sacrifice, tenderness and savagery, Taiko combines the
            panoramic spectacle of a Kurosawa epic with a vivid evocation of feudal Japan.</p>
        </dd>
        <hr>
        <dt @click="activeAccordion"> The Heike Story: A Modern Translation of The Classic Tale of Love and War</dt>
        <dd>
          <p>Kyoto in the twelfth century was a magnificent city, but crime, disorder, and lust were rampant. The people
            were abused by the nobility, while the armed Buddhist monks terrorized court and commoner alike. In despair,
            the Emperor called upon the Heike and Genji clans to quell civil disturbances. Although the clans succeeded,
            they quarreled over the spoils of war and plunged the country into a century of warfare.This novel describes
            the rise to power of Kiyomori of the Heike clan during this turbulent time. From a youth sunk in poverty,
            Kiyomori eventually rose to become the Emperor's Chief Councillor. Although he was a gentle, enlightened
            man, he left a trail of bloodshed and ruin in his wake. The strange twists of Kiyomori's fate are the core
            of this epic novel.The Heike Story is a modern translation of a Japanese classic. Its exotic atmosphere,
            narrative power, pageantry, and poetry will enthrall English readers and provide an entertaining
            introduction to an important source of Japanese culture. </p>
        </dd>
        <hr>
      </dl>
    </div>
    <div v-else>
      <h2>OBRAS-PRIMAS DE YOSHIKAWA</h2>
      <div></div>
      <dl class="accordion">
        <dt class="open-dt"> Musashi</dt>
        <dd>
          <p>A clássica novela samurai sobre as reais façanhas do mais famoso espadachim. Musashi é a melhor novela com
            a narrativa tradicional japonesa. É uma história viva, sútil e imaginativa, repleto de persnagens
            memoráveis, muito deles históricos. Temas entrelaçados de amor não correspondido, vingança equivocada,
            piedade filial e dedicação absoluta ao Caminho dos Samurais, retratam vividamente um mundo ocidental que os
            ocidentais conhecem apenas vagamente.</p>
        </dd>
        <hr>
        <dt @click="activeAccordion"> La Pierre Et Le Sabre</dt>
        <dd>
          <p>Japão do século XVII, o jovem Takezo torna-se o samurai Miyamoto Musashi e tem apenas um objetivo: buscar a
            perfeição. Indo além de seus sentimentos e persitência para melhorar, aperfeiçoar e entender mais
            profundamento o significado da vida, desenvolvendo sua arte, arte do espada. Duelo após duelo, ele vai
            criando um estilo próprio. Sua jornada, combina aventuras, amor e autoquestionamento, leva nos a uma
            história épica.</p>
          <p> O livro reconta o mito de Musashi no Japão, escrito mais com uma aparência de fábula e poema do que de uma
            história</p>
        </dd>
        <hr>
        <dt @click="activeAccordion"> La Parfaite Lumiére</dt>
        <dd>
          <p>De repente, ele viu a verdade: as técnicas da espada não eram seu único objetivo; ele estava procurando um
            caminho do bushi que envolve tudo. (...) Pela primeira vez, ele se perguntou se era possível que um ser
            humano insignificante poderia ser um só com o universo. "O jovem Takezo se tornou Miyamoto Musashi, um
            samurai formidável. Ele agora sabe que a arte bushi só é adquirida através do sacrifício e da escolha, que
            também é a arte da vida. Nas terras ao redor do Monte Fuji, a bela Otsu , o discípulo Joutaro e a criança
            Iori seguem os passos de Musashi: aqueles que o adoram também devem aceitar a dura disciplina do samurai, a
            sabedoria, o único caminho para a luz perfeita. Mas, para alcançá-la, Musashi deve se empenhar ao máximo.
          </p>
          <p>O livro reconta o mito de Musashi no Japão, escrito mais com uma aparência de fábula e poema do que de uma
            história</p>
        </dd>
        <hr>
        <dt @click="activeAccordion"> Taiko </dt>
        <dd>
          <p>Nas tempestuosas décadas finais do século XVI, o Império do Japão se contorce no caos, enquanto o shogunato
            desmorona e os senhores rivais de guerra lutam pela supremacia. Monges guerreiros em suas cidades armadas
            bloqueiam o caminho para a capital; castelos são destruídos, aldeias saqueadas, campos são queimados.</p>
          <p>Em meio a essa devastação, três homens sonham em unir a nação. Num extremo está o carismático, mas brutal
            Nobunaga, cuja ambição implacável esmaga tudo diante dele. No pólo oposto está o frio e deliberado Ieyasu,
            sábio em conselhos, corajoso em batalha, amadurecido além dos anos. Mas a pedra angular deste triunvirato é
            a mais memorável de todas, Hideyoshi, que sobe do posto de camponês para se tornar o governante absoluto
            Taiko do Japão em nome do Imperador.</p>
          <p>Conta muitas histórias: da fúria de Nobunaga e da arrogância fatal dos Yoshimoto de dentes pretos; da queda
            patética da Casa de Takeda; como o desprezado Mitsuhide traiu seu mestre; como uma vez as muralhas
            inexpugnáveis caíram quando seus defensores morreram gloriosamente. Acima de tudo, porém, Taiko é a história
            de como um homem transformou uma nação através da força de sua vontade e da profundidade de sua humanidade.
            Repleto de cenas de pompa e violência, atos de traição e auto-sacrifício, ternura e selvageria, Taiko
            combina o espetáculo panorâmico épico de Kurosawa com uma evocação vívida do Japão feudal.</p>
        </dd>
        <hr>
        <dt @click="activeAccordion">La Chronique des Heiké</dt>
        <dd>
          <p>Kyoto no século XII era uma cidade magnífica, mas o crime, a desordem e a luxúria eram desenfreados. As
            pessoas foram abusadas pela nobreza, enquanto os monges budistas armados aterrorizaram a corte e os plebeus.
            Desesperado, o Imperador convocou os clãs Heike e Genji a reprimir distúrbios civis. Embora os clãs tenham
            tido sucesso, eles discutiram sobre os despojos da guerra e mergulharam o país em um século de guerra. Este
            romance descreve a ascensão ao poder de Kiyomori do clã Heike durante esse período turbulento. De um jovem
            afundado na pobreza, Kiyomori finalmente se tornou o Conselheiro Chefe do Imperador. Embora ele fosse um
            homem gentil e iluminado, ele deixou um rastro de derramamento de sangue e ruína em seu rastro. As estranhas
            reviravoltas do destino de Kiyomori são o núcleo deste romance épico. A História de Heike é uma tradução
            moderna de um clássico japonês. Sua atmosfera exótica, poder narrativo, pompa e poesia encantarão os
            leitores ingleses e fornecerão uma introdução divertida a uma importante fonte da cultura japonesa.</p>
        </dd>
        <hr>
      </dl>
    </div>
  </section>
</template>

<style>
.accordion dt:before {
  content: "►";
}

.accordion dt.active:before {
  content: "▼";
}

dd {
  display: none;
}

dd.active {
  display: flex;
  flex-direction: column;

  margin: 0.25rem auto 0.25rem !important;
  padding: 0 0.5rem;

  max-width: 680px;

  font-size: 1.3rem !important;
  line-height: 1.8rem;
}

.accordion-list {
  margin-top: 1rem;
}

.accordion-list h2 {
  display: flex;
  flex-direction: column;

  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.5rem;
  font-style: italic;

  max-width: 680px;
  margin: 0 auto 0.5rem;
}

.accordion-list h2::after {
  content: 1px;

  max-width: 320px;
  height: 1px;

  background: #000000;
  border-bottom: 2px solid #313030;
}

.accordion-list hr {
  max-width: 680px;
}

.accordion-list dt {
  cursor: pointer;

  margin: 0 auto;

  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;
  max-width: 680px;

  align-content: center;
}

.open-dt {
  margin-top: 1rem;
}
</style>
