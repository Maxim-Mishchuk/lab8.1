<template>
  <form @submit.prevent>
    <h2>Add faculty</h2>
    <custom-input
        type-validation="name"
        placeholder="Name"
        v-model="faculty.name"
        v-model:validation-value="validations.name"
    />
    <custom-input
        type-validation="name"
        placeholder="shortName"
        v-model="faculty.short_name"
        v-model:validation-value="validations.short_name"
    />

    <custom-submit @click="process" value="Add"/>
  </form>

</template>

<script>
import customInput from "@/components/CustomInput.vue";
import { mapActions } from 'vuex'
export default {
  name: "FacultyForm",
  components: {
    customInput
  },

  data(){
    return{
      faculty: {
        name: '',
        short_name: ''
      },

      validations: {
        name: false,
        short_name: false
      }
    }
  },
  methods: {
    ...mapActions({
      addFaculty: 'faculties/addFaculty',
    }),

    process() {
      if(this.validateFaculty()) {
        this.addFaculty({...this.faculty});
        this.clearAllFields();
      }
    },

    validateFaculty() {
      let validations = [
        this.validations.name,
        this.validations.short_name
      ]

      return validations.filter(status => status === false).length === 0
    },

    clearAllFields() {
      this.faculty.name = '';
      this.faculty.short_name = '';

      this.validations.name = false;
      this.validations.short_name = false;
    }
  }
}
</script>

<style scoped>

</style>