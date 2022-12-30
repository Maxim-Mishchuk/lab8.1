<template>
  <form @submit.prevent>
    <h2>Add group</h2>
    <custom-input
      placeholder="Name"
      type-validation="name"
      v-model="group.name"
      v-model:validation-value="validations.name"
    />

    <select @click="validateCourse" v-model="group.course">
      <option value="">Course</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <message-form
        :type="messages.messageCourse.type"
        :message="messages.messageCourse.text"
    />


    <select @click="validateDepartmentID" v-model="group.department_id">
      <option value="">Department</option>
      <option
          v-for="department in departments"
          :value="department._id"
      >
        {{department.short_name}}
      </option>
    </select>
    <message-form
        :type="messages.messageDepartmentID.type"
        :message="messages.messageDepartmentID.text"
    />

    <custom-submit @click="process" value="Add"/>
  </form>


</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import MessageForm from "@/components/MessageForm.vue";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "GroupForm",
  components: {
    CustomInput,
    MessageForm
  },

  data(){
    return{
      group:{
        department_id: '',
        name: '',
        course: null
      },

      validations: {
        department_id: false,
        name: false,
        course: false
      },

      messages: {
        messageCourse: {
          type: null,
          text: ''
        },

        messageDepartmentID: {
          type: null,
          text: ''
        }
      }
    }
  },

  computed: {
    ...mapGetters({
      departments: "departments/DEPARTMENTS"
    })
  },

  methods: {
    ...mapActions({
      addGroup: 'groups/SAVE_GROUP'
    }),

    process() {
      if (this.validateGroup()) {
        this.addGroup({...this.group});
        this.$router.go();
      }
    },

    validateGroup() {
      let validations = [
          this.validations.name,
          this.validations.course,
          this.validations.department_id
      ];

      return validations.filter(status => status === false).length === 0
    },

    validateCourse() {
      if (this.group.course >= 1 && this.group.course <= 6) {
        this.validations.course = true;
        this.messages.messageCourse.type = 1;
        this.messages.messageCourse.text = 'Course`ve been chosen';
      } else {
        this.validations.course = false;
        this.messages.messageCourse.type = 0;
        this.messages.messageCourse.text = 'Please, choose the course'
      }
    },

    validateDepartmentID() {
      if (!this.group.department_id) {
        this.validations.department_id = false;
        this.messages.messageDepartmentID.type = 0;
        this.messages.messageDepartmentID.text = 'Please, choose the departmentID'
      } else {
        this.validations.department_id = true;
        this.messages.messageDepartmentID.type = 1;
        this.messages.messageDepartmentID.text = 'DepartmentID`ve been chosen';
      }
    },

    clearAllFields() {
      this.group.department_id = '';
      this.group.name = '';
      this.group.course = ''

      this.validations.name = false;
      this.validations.course = false;
      this.validations.department_id = false;
    }
  }
}
</script>

<style scoped>

</style>