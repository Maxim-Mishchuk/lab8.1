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
      GET_DEPARTMENTS: 'departments/GET_DEPARTMENTS',
      GET_GROUPS: 'groups/GET_GROUPS',
      GET_STUDENTS: 'students/GET_STUDENTS',
      GET_TEACHERS: 'teachers/GET_TEACHERS',
      GET_DISCIPLINES: 'disciplines/GET_DISCIPLINES',
      GET_SCHEDULES: 'schedules/GET_SCHEDULES',
      GET_FAQS: 'faq/GET_FAQS'
    })
  },

  mounted() {
    this.GET_FACULTIES();
    this.GET_DEPARTMENTS();
    this.GET_GROUPS();
    this.GET_STUDENTS();
    this.GET_TEACHERS();
    this.GET_DISCIPLINES();
    this.GET_SCHEDULES();
    this.GET_FAQS();
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
    width: 80%;
    margin: calc(74px + 100px) auto;
  }
</style>
