<template>
  <form action="" method="post" @submit.prevent>
    <h2>Add teacher</h2>
    <custom-input
        placeholder="Name"
        type-validation="name"
        v-model="teacher.name"
        v-model:validation-value="validations.name"
    />

    <custom-input
        placeholder="Surname"
        type-validation="name"
        v-model="teacher.surname"
        v-model:validation-value="validations.surname"
    />

    <custom-input
        placeholder="Email"
        type-validation="email"
        v-model="teacher.email"
        v-model:validation-value="validations.email"
    />

    <input
        type="tel"
        placeholder="Phone"
        v-model="teacher.phone"
        v-mask="'+38(###)-###-##-##'"
        @input="validatePhoneNumber"
    >

    <custom-submit @click="process" value="Add"/>
  </form>
</template>

<script>
import customInput from "@/components/CustomInput.vue";
import {mapActions} from 'vuex'
export default {
  name: "TeacherForm",
  components: {
    customInput
  },


  data() {
    return {
      teacher: {
        name: '',
        surname: '',
        email: '',
        phone: ''
      },

      validations: {
        name: false,
        surname: false,
        email: false,
        phone: false
      }
    }
  },
  methods: {
    ...mapActions({
      addTeacher: 'teachers/addTeacher'
    }),

    process() {
      if(this.validateTeacher()) {
        this.addTeacher({...this.teacher})
        this.clearAllFields();
      }
    },

    validateTeacher() {
      let validations = [
          this.validations.name,
          this.validations.surname,
          this.validations.email,
          this.validations.phone
      ]

      return validations.filter(status => status === false).length === 0
    },

    validatePhoneNumber() {
      this.validations.phone = this.teacher.phone.length === 18;
    },

    clearAllFields() {
      this.teacher.name = '';
      this.teacher.surname = '';
      this.teacher.email = '';
      this.teacher.phone = '';
    }
  }
}
</script>

<style scoped>

</style>