<template>
    <div id="education">
        <h1 class="ml-auto text-left">Education</h1>
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
export default {
  components: { EduCard },
  data() {
    return {
      educationList: data.dev.education.entries
    };
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

