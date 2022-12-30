<template>
  <form @submit.prevent>
    <h2>Edit faculty: {{ facultyByID($route.params.id).short_name }}</h2>
    <custom-input
        type-validation="name"
        placeholder="Name"
        v-model="getFaculty.name"
        v-model:validation-value="validations.name"
    />
    <custom-input
        type-validation="name"
        placeholder="shortName"
        v-model="getFaculty.short_name"
        v-model:validation-value="validations.short_name"
    />

      <custom-submit @click="process" value="Edit"/>

  </form>


</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import customInput from "@/components/CustomInput.vue";

export default {
  name: "EditFaculty",
  components: {
    customInput,
  },
  data(){
    return{
      validations: {
        name: true,
        short_name: true
      }
    }
  },


  computed:{
    ...mapGetters({
      facultyByID: 'faculties/FACULTY_BY_ID'
    }),
    getFaculty(){
      return Object.assign({}, this.facultyByID(this.$route.params.id))
    }
  },
  methods: {
    ...mapActions({
      editFacultyByID: "faculties/UPDATE_FACULTY"

    }),

    process() {
      if(this.validateFaculty()) {
        this.editFacultyByID(this.getFaculty)
        this.$router.push('/facultyTable')
      }
    },
    validateFaculty() {
      let validations = [
        this.validations.name,
        this.validations.short_name
      ]

      return validations.filter(status => status === false).length === 0
    },
  }
}
</script>

<style scoped>

</style>