<template>
    <div id="experience">
        <h1 class="ml-auto text-left" :style="{color : headerColor}">Experience</h1>
        <div class="container">
          <div v-for="n in evenIndexes" :key="n" class="row">
            <div class="col">
              <work-card :work="exp[n]"></work-card>
            </div>
            <div class="col">
              <work-card v-if="n+1<exp.length" :work="exp[n+1]"></work-card>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import WorkCard from "./WorkCard.vue";
const data = require("../assets/data.json");
const colorGen = require("../assets/colors.js").default;
export default {
  components: { WorkCard },
  data() {
    return {
      exp: data.dev.experience.entries
    };
  },
  computed: {
    evenIndexes: function() {
      let even = [];
      for (let i = 0; i < this.exp.length; i += 2) {
        even.push(i);
      }
      return even;
    },
    headerColor: function() {
      return colorGen[Math.floor(Math.random() * colorGen.length)];
    }
  }
};
</script>

<style >
h1 {
  font-family: "Poiret One";
  font-weight: bold;
}

div {
  margin-top: 20px;
}
</style>

