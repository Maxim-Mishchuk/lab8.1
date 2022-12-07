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
        id:'',
        name:'',
        short_name:''
      }
    }
  }
}
</script>

<style scoped>

</style>