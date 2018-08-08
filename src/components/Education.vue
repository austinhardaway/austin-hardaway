<template>
    <div id="education">
        <h1 class="ml-auto text-left" :style="{color : headerColor}">Education</h1>
        <div class="container">
          <div class="row">
            <edu-card v-for="edu in educationList" :key="edu.priority" :edu="edu"></edu-card>
          </div>
        </div>
    </div>
</template>

<script>
import EduCard from "./EduCard.vue";
const data = require("../assets/data.json");
const colorGen = require("../assets/colors.js").default;

export default {
  components: { EduCard },
  data() {
    return {
      educationList: data.dev.education.entries
    };
  },
  computed: {
    headerColor: function() {
      return colorGen[Math.floor(Math.random() * colorGen.length)];
    }
  }
};
</script>

<style >
h1 {
  font-family: "Poiret One";
  font-size: 100px;
  font-weight: bold;
}

.col {
  margin-top: 20px;
}
</style>

