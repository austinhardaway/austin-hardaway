<template>
    <div class="home content">
      
      <h1 ref='name' class="display-1 ml-auto text-left" :style="{color : colors[0]}" @mouseover="getColor(0)">{{fname}}<br/>{{lname}}</h1>
      <p>
          <em :style="{color : colors[1]}" @mouseover="getColor(1)">I turn ideas into code</em><br>
          <a :href="facebook" :style="{color : colors[2]}" @mouseover="getColor(2)"><i class="fab fa-facebook-square"></i></a>
          <a :href="linkedin" :style="{color : colors[3]}" @mouseover="getColor(3)"><i class="fab fa-linkedin"></i></a>
          <a :href="twitter" :style="{color : colors[4]}" @mouseover="getColor(4)"><i class="fab fa-twitter-square"></i></a>
          <a :href="github" :style="{color : colors[5]}" @mouseover="getColor(5)"><i class="fab fa-github-square"></i></a>
          <a :href="email" :style="{color : colors[6]}" @mouseover="getColor(6)"><i class="fas fa-envelope-square"></i></a><br>
          <router-link to="Contact" tag="button" :style="{color : colors[7]}" @mouseover="getColor(7)" class="btn-lg btn-outline-dark black-text">Hire Me</router-link>
      </p>
      
    </div>
</template>


<script>
const data = require("../assets/data.json");
const colorGen = require("../assets/colors.js").default;
const colors = ["black", "black", "black", "black", "black", "black", "black"];

export default {
  data() {
    return {
      fname: data.dev.fname,
      lname: data.dev.lname,
      facebook: data.dev.facebook,
      linkedin: data.dev.linkedin,
      twitter: data.dev.twitter,
      github: data.dev.git,
      email: data.dev.email,
      colors: colors
    };
  },
  methods: {
    getColor: function(n) {
      colors[n] = colorGen[Math.floor(Math.random() * colorGen.length)];
      if (n === 1) {
        colors[n] = colorGen[Math.floor(Math.random() * colorGen.length - 2)];
      }
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: "Poiret One";
  font-size: 200px;
  font-weight: normal;
  color: black;
}
p {
  float: left;
  margin-left: 4%;
  font-size: 2.5em;
}
a {
  color: black;
}
em {
  font-style: inherit;
}

.content {
  margin-left: 15%;
  text-align: left;
}
@media (max-width: 1080px) {
  h1 {
    font-size: 150px;
  }
  em {
    font-size: 30px;
  }
}
@media (max-width: 800px) {
  h1 {
    font-size: 100px;
  }
  em {
    font-size: 20px;
  }
}
@media (max-width: 540px) {
  h1 {
    font-size: 50px;
  }
  a {
    font-size: 20px;
  }
}
</style>
