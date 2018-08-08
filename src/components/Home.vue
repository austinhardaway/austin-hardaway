<template>
    <div class="home content">
        <h1 ref='name' class="ml-auto text-left" :style="{color : colors[0]}" @mouseover="getColor(0)">{{fname}}<br>{{lname}}</h1>
        <p>
            <em :style="{color : colors[1]}" @mouseover="getColor(1)">I turn ideas into code</em><br>
            <a :href="facebook" :style="{color : colors[2]}" @mouseover="getColor(2)"><i class="fab fa-facebook-square"></i></a>
            <a :href="linkedin" :style="{color : colors[3]}" @mouseover="getColor(3)"><i class="fab fa-linkedin"></i></a>
            <a :href="twitter" :style="{color : colors[4]}" @mouseover="getColor(4)"><i class="fab fa-twitter-square"></i></a>
            <a :href="github" :style="{color : colors[5]}" @mouseover="getColor(5)"><i class="fab fa-github-square"></i></a>
            <a :href="email" :style="{color : colors[6]}" @mouseover="getColor(6)"><i class="fas fa-envelope-square"></i></a><br>
            <button :style="{color : colors[7]}" @mouseover="getColor(7)" class="btn-lg btn-outline-dark black-text">Hire Me</button>
        </p>
    </div>
</template>

<script>
const data = require("../assets/data.json");
const colorGen = [
  "red",
  "blue",
  "green",
  "black",
  "salmon",
  "crimson",
  "darkorange",
  "gold",
  "orchid",
  "rebeccapurple",
  "darkviolet",
  "lime",
  "springgreen",
  "darkcyan",
  "teal",
  "deepskyblue",
  "royalblue",
  "navy"
];
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
</style>
