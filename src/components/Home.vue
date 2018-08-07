<template>
    <div class="home content">
        <h1 class="ml-auto text-left">{{fname}}<br>{{lname}}</h1>
        <p>
            I turn ideas into code<br>
            <a :href="facebook" ><i class="fab fa-facebook-square"></i></a>
            <a :href="linkedin"><i class="fab fa-linkedin"></i></a>
            <a :href="twitter"><i class="fab fa-twitter-square"></i></a>
            <a :href="github"><i class="fab fa-github-square"></i></a>
            <a :href="email"><i class="fas fa-envelope-square"></i></a><br>
            <button class="btn-lg btn-outline-dark black-text">Hire Me</button>
        </p>
    </div>
</template>

<script>
const data = require("../assets/data.json");
export default {
  data() {
    return {
      fname: data.dev.fname,
      lname: data.dev.lname,
      facebook: data.dev.facebook,
      linkedin: data.dev.linkedin,
      twitter: data.dev.twitter,
      github: data.dev.git,
      email: data.dev.email
    };
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
</style>
