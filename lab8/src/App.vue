<template>
  <navbar/>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {

  methods: {
    ...mapActions({
      GET_FACULTIES: 'faculties/GET_FACULTIES',
      GET_DEPARTMENTS: 'departments/GET_DEPARTMENTS'
    })
  },

  mounted() {
    this.GET_FACULTIES();
    this.GET_DEPARTMENTS();
  }
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
