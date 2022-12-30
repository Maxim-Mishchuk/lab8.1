<template>
  <form @submit.prevent>
    <h2>
      Edit student: {{ studentByID($route.params.id).name }},
      Group: {{ groupByID(getStudent.group_id).name }}
    </h2>

    <custom-input
        placeholder="Name"
        type-validation="name"
        v-model="getStudent.name"
        v-model:validation-value="validations.name"
    />

    <custom-input
        placeholder="Email"
        type-validation="email"
        v-model="getStudent.email"
        v-model:validation-value="validations.email"
    />

    <input
        placeholder="Phone"
        type="tel"
        @input="validatePhoneNumber"
        v-mask="'+38(###)-###-##-##'"
        v-model="getStudent.phone"
    >
    <message-form
        :type="messages.messagePhone.type"
        :message="messages.messagePhone.text"
    />
    <select v-model="getStudent.group_id" name="">
      <option
          v-for="group in groups"
          :value="group._id"
      >
        {{ group.name }}
      </option>
    </select>
    <message-form
        :type="messages.messageGroupID.type"
        :message="messages.messageGroupID.text"
    />

    <custom-submit @click="process" value="Edit"/>

  </form>

</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import CustomInput from "@/components/CustomInput.vue";
import MessageForm from "@/components/MessageForm.vue";

export default {
  name: "EditStudent",

  components: {
    CustomInput,
    MessageForm,
  },
  data() {
    return {


      validations: {
        name: true,
        email: true,
        group_id: true,
        phone: true
      },

      messages: {
        messageGroupID: {
          type: null,
          text: ''
        },
        messagePhone: {
          type: null,
          text: ''
        }
      }
    }
  },

  computed: {
    ...mapGetters({
      studentByID: 'students/STUDENT_BY_ID',
      groups: "groups/GROUPS",
      groupByID: "groups/GROUP_BY_ID"
    }),

    getStudent() {
      return Object.assign({}, this.studentByID(this.$route.params.id))
    },
  },


    methods: {
      ...mapActions({
        editStudentByID: 'students/UPDATE_STUDENT'
      }),

      process() {
        if (this.validateStudent()) {
          this.editStudentByID(this.getStudent)
          this.$router.push('/studentTable')
        }
      },

      validateStudent() {
        let validations = [
          this.validations.name,
          this.validations.email,
          this.validations.phone,
          this.validations.group_id
        ]

        return validations.filter(status => status === false).length === 0
      },

      validatePhoneNumber() {
        this.validations.phone = this.getStudent.phone.length === 18;
        if (this.validations.phone) {
          this.messages.messagePhone.type = 1;
          this.messages.messagePhone.text = 'Correct phoneNumber!';
        } else {
          this.messages.messagePhone.type = 0;
          this.messages.messagePhone.text = 'Invalid phoneNumber, please write other';
        }
      },

      validateGroupID() {
        if (!this.getStudent.group_id) {
          this.validations.group_id = false;
          this.messages.messageGroupID.type = 0;
          this.messages.messageGroupID.text = 'Please, choose the groupID'
        } else {
          this.validations.group_id = true;
          this.messages.messageGroupID.type = 1;
          this.messages.messageGroupID.text = 'GroupID`ve been chosen';
        }
      },
    }
}
</script>

<style scoped>

</style>