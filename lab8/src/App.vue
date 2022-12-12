<template>
  <navbar/>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  @font-face {
    font-family: "JetBrains Mono";
    src: url("assets/fonts/JetBrainsMono-VariableFont_wght.ttf") format("truetype");
  }

  body {
    font-family: "JetBrains Mono", sans-serif;
    font-size: 20px;
  }

  .content {
    width: 75%;
    margin: calc(74px + 100px) auto;
  }
</style>
