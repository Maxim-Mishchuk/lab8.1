<template>
  <form @submit.prevent>
    <h2>Edit department</h2>
    <custom-input
        placeholder="Name"
        type-validation="name"
        v-model="getDepartment.name"
        v-model:validation-value="validations.name"
    />

    <custom-input
        placeholder="shortName"
        type-validation="name"
        v-model="getDepartment.short_name"
        v-model:validation-value="validations.short_name"
    />
    <select @click="validateFacultyID" v-model="getDepartment.faculty_id">
      <option
          v-for="faculty in faculties"
          :value="faculty.id"
      >
        {{faculty.short_name}}
      </option>
    </select>

    <message-form
        :type="messages.messageFacultyID.type"
        :message="messages.messageFacultyID.text"
    />

      <custom-submit @click="process" value="Edit"/>
  </form>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';
import CustomInput from "@/components/CustomInput.vue";
import MessageForm from "@/components/MessageForm.vue";
import CustomSubmit from "@/components/CustomSubmit.vue";

export default {
  name: "editDepartment",
  components: {
    CustomInput,
    MessageForm,
    CustomSubmit
  },
  data(){
    return{

      validations: {
        faculty_id: true,
        name: true,
        short_name: true
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
    ...mapState({
      faculties: state => state.faculties.faculties
    }),
    ...mapGetters({
      getDepartmentByID: 'departments/getDepartmentByID'
    }),

    getDepartment(){
      return Object.assign({}, this.getDepartmentByID(parseInt(this.$route.params.id)))
    }

  },

  methods: {
    ...mapActions({
      editDepartmentByID: 'departments/editDepartmentByID'
    }),

    process() {
      if(this.validateDepartment()){
        this.editDepartmentByID(this.getDepartment)
        this.$router.push('/departmentTable')
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
      if (!this.getDepartment.faculty_id) {
        this.validations.faculty_id = false;
        this.messages.messageFacultyID.type = 0;
        this.messages.messageFacultyID.text = 'Please, choose the facultyID'
      } else {
        this.validations.faculty_id = true
        this.messages.messageFacultyID.type = 1;
        this.messages.messageFacultyID.text = 'facultyID`ve been chosen'
      }
    },
  }
}
</script>

<style scoped>

</style>