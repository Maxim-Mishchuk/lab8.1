<template>

  <form action="" method="post" @submit.prevent>
    <h2>Edit teacher</h2>
    <custom-input
        placeholder="Name"
        type-validation="name"
        v-model="getTeacher.name"
        v-model:validation-value="validations.name"
    />

    <custom-input
        placeholder="Surname"
        type-validation="name"
        v-model="getTeacher.surname"
        v-model:validation-value="validations.surname"
    />

    <custom-input
        placeholder="Email"
        type-validation="email"
        v-model="getTeacher.email"
        v-model:validation-value="validations.email"
    />

    <input
        type="tel"
        placeholder="Phone"
        v-model="getTeacher.phone"
        v-mask="'+38(###)-###-##-##'"
        @input="validatePhoneNumber"
    >
    <message-form
        :type="messages.messagePhone.type"
        :message="messages.messagePhone.text"
    />
      <custom-submit @click="process" value="Edit"/>

  </form>
</template>

<script>
import { mapGetters,mapActions} from 'vuex';
import customInput from "@/components/CustomInput.vue";
import MessageForm from "@/components/MessageForm.vue";
import CustomSubmit from "@/components/CustomSubmit.vue";

export default {
  name: "EditTeacher",
  components: {
    customInput,
    MessageForm,
    CustomSubmit
  },
  data() {
    return {

      validations: {
        name: true,
        surname: true,
        email: true,
        phone: true
      },

      messages: {
        messagePhone: {
          type: null,
          text: ''
        }
      }
    }
  },
  computed:{
    ...mapGetters({
      getTeacherByID: 'teachers/getTeacherByID'
    }),
    getTeacher(){
      return  Object.assign({}, this.getTeacherByID(parseInt(this.$route.params.id)))
    }



  },
  methods: {
    ...mapActions({
      editTeacherByID: 'teachers/editTeacherByID'
    }),

    process() {
      if(this.validateTeacher()) {
        this.editTeacherByID(this.getTeacher)
        this.$router.push('/teacherTable')
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
      this.validations.phone = this.getTeacher.phone.length === 18;
      if (this.validations.phone) {
        this.messages.messagePhone.type = 1;
        this.messages.messagePhone.text = 'Correct phoneNumber!';
      } else {
        this.messages.messagePhone.type = 0;
        this.messages.messagePhone.text = 'Invalid phoneNumber, please write other';
      }
    },
  }
}
</script>

<style scoped>

</style>