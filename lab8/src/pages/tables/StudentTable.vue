<template>
  <div v-if="students.length > 0">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>group</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Edit</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="student in students">
        <td>{{ student._id }}</td>
        <td>{{ groupByID(student.group_id).name }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.phone }}</td>
        <td>
          <router-link :to="
          {
            name:'editStudent',
            params: {
              id: student._id,
            }
          }">
            Edit
          </router-link>
        </td>
        <td><input @input="checkStudent" type="checkbox" :value="student._id"></td>
      </tr>
      </tbody>
    </table>
    <form action="" method="post" @submit.prevent>
      <actions-with-tables @getAction="processAction"/>
      <custom-submit @click="process" value="Do"/>
    </form>
  </div>
  <div v-else>
    StudentTable is empty! Please, add some students to render the table
  </div>
</template>

<script>
import ActionsWithTables from "@/components/ActionsWithTables.vue";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "StudentTable",
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
      students: "students/STUDENTS",
      groupByID: "groups/GROUP_BY_ID"
    })
  },

  methods: {
    ...mapActions({
      deleteCheckedStudents: 'students/REMOVE_STUDENTS'
    }),

    checkStudent(event) {
      if (event.target.checked === true) {
        this.checkedEvents.push(event);
      } else {
        this.checkedEvents = this.checkedEvents.filter(
            current_event => current_event.target.value !== event.target.value
        );
      }
    },

    processAction(actionToDo) {
      this.actionToDo = actionToDo
    },

    process() {
      if (this.actionToDo === 'delete') {
        this.deleteCheckedStudents(this.checkedEvents.map(current_event => current_event.target.value));
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