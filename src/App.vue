<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style>
#app {
  font-family: "Nunito", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

h1 {
  font-size: 100px;
}

@media (max-width: 450px) {
  h1 {
    font-size: 75px;
  }
}
@media (max-width: 370px) {
  h1 {
    font-size: 50px;
  }
}
</style>
