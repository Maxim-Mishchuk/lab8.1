<template>
  <div v-if="departments.length > 0">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Faculty</th>
        <th>Name</th>
        <th>Short_Name</th>
        <th>Edit</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="department in departments">
        <td>{{ department._id }}</td>
        <td>{{ facultyByID(department.faculty_id).short_name }}</td>
        <td>{{ department.name }}</td>
        <td>{{ department.short_name }}</td>
        <td>
          <router-link :to="{
            name:'editDepartment',
            params: {
              id: department._id,
            }
          }">
            Edit
          </router-link>
        </td>
        <td><input @input="checkDepartment" type="checkbox" :value="department._id"></td>
      </tr>
      </tbody>
    </table>
    <form action="" method="post" @submit.prevent>
      <actions-with-tables @getAction="processAction"/>

      <custom-submit @click="process" value="Do"/>
    </form>
  </div>
  <div v-else>
    DepartmentTable is empty! Please, add some departments to render the table
  </div>
</template>

<script>
import ActionsWithTables from "@/components/ActionsWithTables.vue";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "DepartmentTable",
  components: {
    ActionsWithTables
  },

  data() {
    return {
      checkedEvents: [],
      actionToDo: ''
    }
  },

  computed: {
    ...mapGetters({
      departments: 'departments/DEPARTMENTS',
      facultyByID: 'faculties/FACULTY_BY_ID',
    })
  },
  methods: {
    ...mapActions({
      deleteCheckedDepartments: 'departments/REMOVE_DEPARTMENTS'
    }),

    checkDepartment(event) {
      if (event.target.checked === true) {
        this.checkedEvents.push(event);
      } else {
        this.checkedEvents = this.checkedEvents.filter(
            current_event => current_event.target.value !== event.target.value
        );
      }
      console.log(this.checkedEvents)
    },

    processAction(actionToDo) {
      this.actionToDo = actionToDo
    },

    process() {
      if (this.actionToDo === 'delete') {
        this.deleteCheckedDepartments(this.checkedEvents.map(current_event => current_event.target.value))
        this.uncheckCheckboxes();
      }
    },

    uncheckCheckboxes() {
      this.checkedEvents = this.checkedEvents.map(current_event => current_event.target.checked = false);
      this.checkedEvents = [];
    }
  }
}
</script>

<style scoped>

</style>