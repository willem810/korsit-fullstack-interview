<template>
  <div id="app">
    <Header />
    <router-view />

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Header from "./components/layout/header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
@import "./assets/css/business-frontpage.css";
@import "./vendor/bootstrap/css/bootstrap.min.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
