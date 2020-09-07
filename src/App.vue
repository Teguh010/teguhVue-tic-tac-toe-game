<template>
  <div>
    <h1 class="title" style="background-color:LightSeaGreen">
      <marquee direction="right">Teguh JS Tic-Tac-Toe</marquee>
    </h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
body {
  font: normal 16px courier, arial;
  text-align: center;
  background-color: purple;
}
.title {
  font: 36px courier, arial;
  padding-top: 5px;
}
</style>
