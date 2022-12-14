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

    <custom-submit @click="process" value="Add"/>
  </form>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "FacultyForm",

  data(){
    return{
      faculty:{
        name: '',
        short_name: ''
      }
    }
  },
  methods: {
    ...mapActions({
      addFaculty: 'faculties/addFaculty',
    }),

    process() {
      this.addFaculty({...this.faculty});
      this.clearAllFields();
    },

    clearAllFields() {
      this.faculty.name = '';
      this.faculty.short_name = '';
    }
  }
}
</script>

<style scoped>

</style>