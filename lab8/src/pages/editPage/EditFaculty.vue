<template>
  <form @submit.prevent>
    <h2>Edit faculty: {{ getFacultyByID(getFaculty.id).short_name }}</h2>
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
import CustomSubmit from "@/components/CustomSubmit.vue";
export default {
  name: "EditFaculty",
  components: {
    customInput,
    CustomSubmit
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