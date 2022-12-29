<template>
  <form @submit.prevent>
    <h2>Add department</h2>
    <custom-input
        placeholder="Name"
        type-validation="name"
        v-model="department.name"
        v-model:validation-value="validations.name"
    />

    <custom-input
        placeholder="shortName"
        type-validation="name"
        v-model="department.short_name"
        v-model:validation-value="validations.short_name"
    />

    <select @click="validateFacultyID" v-model="department.faculty_id">
      <option value="">Faculty</option>
      <option
          v-for="faculty in faculties"
          :value="faculty._id"
      >
        {{faculty.short_name}}
      </option>
    </select>

    <message-form
        :type="messages.messageFacultyID.type"
        :message="messages.messageFacultyID.text"
    />

    <custom-submit @click="process" value="Add"/>
  </form>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import MessageForm from "@/components/MessageForm.vue";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "DepartmentForm",
  components: {
    CustomInput,
    MessageForm
  },

  data(){
    return{
      department: {
        faculty_id: '',
        name: '',
        short_name: ''
      },

      validations: {
        faculty_id: false,
        name: false,
        short_name: false
      },

      messages: {
        messageFacultyID: {
          type: null,
          text: ''
        }
      }
    }
  },

  computed: {
    ...mapGetters({
      faculties: "faculties/FACULTIES"
    })
  },

  methods: {
    ...mapActions({
      addDepartment: 'departments/SAVE_DEPARTMENTS'
    }),

    process() {
      if(this.validateDepartment()) {
        this.addDepartment({...this.department});
        this.clearAllFields();
      }
    },

    validateDepartment() {
      let validations = [
        this.validations.faculty_id,
        this.validations.name,
        this.validations.short_name
      ];

      return validations.filter(status => status === false).length === 0
    },

    validateFacultyID() {
      if (!this.department.faculty_id) {
        this.validations.faculty_id = false;
        this.messages.messageFacultyID.type = 0;
        this.messages.messageFacultyID.text = 'Please, choose the facultyID'
      } else {
        this.validations.faculty_id = true
        this.messages.messageFacultyID.type = 1;
        this.messages.messageFacultyID.text = 'facultyID`ve been chosen'
      }
    },

    clearAllFields() {
      this.department.faculty_id = '';
      this.department.name = '';
      this.department.short_name = '';

      this.validations.name = false;
      this.validations.short_name = false;
      this.validations.faculty_id = false;
    }
  }
}
</script>

<style scoped>

</style>