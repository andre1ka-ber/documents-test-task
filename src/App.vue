<template>
  <Documents />
</template>

<script>
import Documents from "./components/Documents";

export default {
  name: 'App',
  components: {Documents},
}
</script>

<style>
@import "./assets/css/app.css";

body {
  margin: 0;
  padding: 0;
  font-family: 'Fira Sans', sans-serif;
}
</style>
