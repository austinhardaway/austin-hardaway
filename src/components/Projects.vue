<template>
    <div id="projects">
        <h1 class="ml-auto text-left" :style="{color : headerColor}">Projects</h1>
        <div class="container">
          <div class="row" v-for="(row, index) in projectWrapper" :key="index">
              <div class="col" v-for="proj in row" :key="proj.name">
                <project-card  :project="proj" ></project-card>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
const data = require("../assets/data.json");
const colorGen = require("../assets/colors.js").default;

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: data.dev.projects.entries
    };
  },
  computed: {
    projectWrapper: function() {
      let wrapper = [];
      for (let i = 0; i < this.projects.length; i++) {
        let row = [];
        for (let j = i + 3; i < j; i++) {
          if (i >= this.projects.length) {
            break;
          } else {
            row.push(this.projects[i]);
          }
        }
        wrapper.push(row);
      }
      return wrapper;
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
  font-size: 100px;
  font-weight: bold;
}

.col {
  margin-top: 20px;
}
</style>

