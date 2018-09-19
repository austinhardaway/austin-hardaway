<template>
    <nav class="nav justify-content-end">
        <router-link to="Home"><a class=nav-link>Home</a></router-link>
        <router-link to="Experience"><a class="nav-link">Experience</a></router-link>
        <router-link to="Education"><a class="nav-link">Education</a></router-link>
        <router-link to="Projects"><a class="nav-link" >Projects</a></router-link>
    </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
nav a {
  color: rgb(0, 0, 0);
  font-size: 150%;
}
nav a:hover {
  text-decoration: underline !important;
  color: #0000009a;
  font-weight: bold;
}

@media (max-width: 690px) {
  nav a {
    font-size: 30px;
  }
}
@media (max-width: 600px) {
  nav a {
    font-size: 23px;
  }
}
@media (max-width: 490px) {
  nav a {
    font-size: 15px;
  }
}
@media (max-width: 360px) {
  nav a {
    font-size: 12px;
  }
}
</style>
