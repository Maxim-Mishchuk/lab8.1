<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Faculty_ID</th>
        <th>Name</th>
        <th>Short_Name</th>
        <th>Edit</th>
        <th>Select</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="department in departments">
        <td>{{ department.id }}</td>
        <td>{{ department.faculty_id }}</td>
        <td>{{ department.name }}</td>
        <td>{{ department.short_name }}</td>
        <td>Edit</td>
        <td><input @input="checkDepartment" type="checkbox" :value="department.id"></td>
      </tr>
    </tbody>
  </table>
  <form action="" method="post" @submit.prevent>
    <actions-with-tables @getAction="processAction"/>

    <custom-submit @click="process" value="Do"/>
  </form>
</template>

<script>
import ActionsWithTables from "@/components/ActionsWithTables.vue";
import {mapActions, mapState} from 'vuex'
export default {
  name: "DepartmentTable",
  components: {
    ActionsWithTables
  },

  data() {
    return {
      checkedDepartments: [],
      actionToDo: ''
    }
  },

  computed: {
    ...mapState({
      departments: state => state.departments.departments
    })
  },
  methods: {
    ...mapActions({
      deleteCheckedDepartments: 'departments/deleteCheckedDepartments'
    }),

    checkDepartment(event) {
      let event_id = event.target.value;
      if (event.target.checked === true) {
        this.checkedDepartments.push(event_id);
      } else {
        this.checkedDepartments = this.checkedDepartments.filter(current_id => current_id !== event_id);
      }
    },

    processAction(actionToDo) {
      this.actionToDo = actionToDo
    },

    process() {
      if (this.actionToDo === 'delete') {
        this.deleteCheckedDepartments(this.checkedDepartments)
      }
    }
  }
}
</script>

<style scoped>

</style>