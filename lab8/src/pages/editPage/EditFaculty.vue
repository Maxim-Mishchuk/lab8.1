<template>
  <form @submit.prevent>
    <h2>Edit faculty: {{getFaculty.name}}</h2>
    <input
        autocomplete="off"
        v-model="getFaculty.name"
        type="text"
        placeholder="name"
    >
    <input
        autocomplete="off"
        v-model="getFaculty.short_name"
        type="text"
        placeholder="shortName"
    >

    <custom-submit @click="process" value="Edit"/>
  </form>


</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "EditFaculty",

  computed:{
    ...mapGetters({
      getFacultyByID: 'faculties/getFacultyByID'
    }),
    getFaculty(){
      return Object.assign({}, this.getFacultyByID(parseInt(this.$route.params.id)))
    }
  },
  methods: {
    ...mapActions({
      editFacultyByID: "faculties/editFacultyByID"

    }),

    process() {
        this.editFacultyByID({...this.getFaculty})
    }
  }
}
</script>

<style scoped>

</style>