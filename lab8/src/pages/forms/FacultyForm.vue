<template>
  <form @submit.prevent>
    <h2>Add faculty</h2>
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
import { mapActions } from 'vuex'
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
    ...mapActions({
      addFaculty: 'faculties/addFaculty',
    }),

    process() {
      this.addFaculty({...this.faculty});
    }
  }
}
</script>

<style scoped>

</style>