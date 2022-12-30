<template>
  <form action="" method="post" @submit.prevent>
    <h2>Add student</h2>
    <custom-input
        placeholder="Name"
        type-validation="name"
      v-model="student.name"
      v-model:validation-value="validations.name"
    />

    <custom-input
        placeholder="Email"
        type-validation="email"
        v-model="student.email"
        v-model:validation-value="validations.email"
    />

    <input
        placeholder="Phone"
        type="tel"
        @input="validatePhoneNumber"
        v-mask="'+38(###)-###-##-##'"
        v-model="student.phone"
    >
    <message-form
        :type="messages.messagePhone.type"
        :message="messages.messagePhone.text"
    />

    <select @click="validateGroupID" v-model="student.group_id">
      <option value="">Group</option>
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

    <custom-submit @click="process" value="Add"/>
  </form>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import MessageForm from "@/components/MessageForm.vue";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "StudentForm",
  components: {
    CustomInput,
    MessageForm
  },

  data() {
    return {
      student: {
        group_id: '',
        name: '',
        email: '',
        phone: ''
      },

      validations: {
        name: false,
        email: false,
        group_id: false,
        phone: false
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
      groups: 'groups/GROUPS'
    })
  },

  methods: {
    ...mapActions({
      addStudent: 'students/SAVE_STUDENT'
    }),

    process() {
      if (this.validateStudent()) {
        this.addStudent({...this.student});
        this.$router.go();
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
      this.validations.phone = this.student.phone.length === 18;
      if (this.validations.phone) {
        this.messages.messagePhone.type = 1;
        this.messages.messagePhone.text = 'Correct phoneNumber!';
      } else {
        this.messages.messagePhone.type = 0;
        this.messages.messagePhone.text = 'Invalid phoneNumber, please write other';
      }
    },

    validateGroupID() {
      if (!this.student.group_id) {
        this.validations.group_id = false;
        this.messages.messageGroupID.type = 0;
        this.messages.messageGroupID.text = 'Please, choose the groupID'
      } else {
        this.validations.group_id = true;
        this.messages.messageGroupID.type = 1;
        this.messages.messageGroupID.text = 'GroupID`ve been chosen';
      }
    },

    clearAllFields() {
      this.student.group_id = '';
      this.student.name = '';
      this.student.email = '';
      this.student.phone = '';

      this.validations.group_id = false;
      this.validations.name = false;
      this.validations.email = false;
      this.validations.phone = false;
    }
  }
}
</script>

<style scoped>

</style>