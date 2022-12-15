<template>
  <form @submit.prevent>
    <h2>Edit group: {{getGroup.name}}</h2>
    <custom-input
        placeholder="Name"
        type-validation="name"
        v-model="getGroup.name"
        v-model:validation-value="validations.name"
    />

    <select @click="validateCourse" v-model="getGroup.course">
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

    <select @click="validateDepartmentID" v-model="getGroup.department_id">
      <option value="">Department</option>
      <option
          v-for="department in departments"
          :value="department.id"
      >
        {{department.short_name}}
      </option>
    </select>
    <message-form
        :type="messages.messageDepartmentID.type"
        :message="messages.messageDepartmentID.text"
    />

      <custom-submit @click="process" value="Edit"/>

  </form>

</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';
import CustomInput from "@/components/CustomInput.vue";
import MessageForm from "@/components/MessageForm.vue";
export default {
  name: "EditGroup",
  components: {
    CustomInput,
    MessageForm
  },

  data(){
    return{
      validations: {
        department_id: true,
        name: true,
        course: true
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
    ...mapState({
      departments: state => state.departments.departments
    }),

    getGroup(){
      return Object.assign({}, this.getGroupByID(parseInt(this.$route.params.id)))
    },
    ...mapGetters({
        getGroupByID: 'groups/getGroupByID'
    })
  },

  methods: {
    ...mapActions({
      editGroupByID: "groups/editGroupByID"
    }),

    process() {
      if (this.validateGroup()) {
        this.editGroupByID(this.getGroup)
        this.$router.push('/groupTable')
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
      if (this.getGroup.course >= 1 && this.getGroup.course <= 6) {
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
      if (!this.getGroup.department_id) {
        this.validations.department_id = false;
        this.messages.messageDepartmentID.type = 0;
        this.messages.messageDepartmentID.text = 'Please, choose the departmentID'
      } else {
        this.validations.department_id = true;
        this.messages.messageDepartmentID.type = 1;
        this.messages.messageDepartmentID.text = 'DepartmentID`ve been chosen';
      }
    },
  }
}
</script>

<style scoped>

</style>