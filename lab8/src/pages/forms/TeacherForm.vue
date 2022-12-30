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
    <message-form
        :type="messages.messagePhone.type"
        :message="messages.messagePhone.text"
    />

    <custom-submit @click="process" value="Add"/>
  </form>
</template>

<script>
import customInput from "@/components/CustomInput.vue";
import MessageForm from "@/components/MessageForm.vue";
import {mapActions} from 'vuex'
export default {
  name: "TeacherForm",
  components: {
    customInput,
    MessageForm
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
      },

      messages: {
        messagePhone: {
          type: null,
          text: ''
        }
      }
    }
  },
  methods: {
    ...mapActions({
      addTeacher: 'teachers/SAVE_TEACHER'
    }),

    process() {
      if(this.validateTeacher()) {
        this.addTeacher({...this.teacher})
        this.$router.go();
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
      if (this.validations.phone) {
        this.messages.messagePhone.type = 1;
        this.messages.messagePhone.text = 'Correct phoneNumber!';
      } else {
        this.messages.messagePhone.type = 0;
        this.messages.messagePhone.text = 'Invalid phoneNumber, please write other';
      }
    },

    clearAllFields() {
      this.teacher.name = '';
      this.teacher.surname = '';
      this.teacher.email = '';
      this.teacher.phone = '';

      this.validations.name = false;
      this.validations.surname = false;
      this.validations.email = false;
      this.validations.phone = false;
    }
  }
}
</script>

<style scoped>

</style>