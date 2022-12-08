<template>
  <form @submit.prevent>
    <input
      autocomplete="off"
      v-model="faculty.name"
      type="text"
      placeholder="name"
    >
    <input
        autocomplete="off"
        v-model="faculty.short_name"
        type="text"
        placeholder="shortName"
    >
    <input
        type="submit"
        value="Add"
        @click="process"
    >
  </form>

</template>

<script>
export default {
  name: "FacultyForm",
  data(){
    return{
      faculty:{
        name:'',
        short_name:''
      }
    }
  },
  methods: {
    process() {
      this.$store.commit('addFaculty', this.faculty);
    }
  }
}
</script>

<style scoped>

</style>