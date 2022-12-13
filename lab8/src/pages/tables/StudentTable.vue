<template>
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
        <td>{{ student.id }}</td>
        <td>{{ groups.find(group => group.id===student.group_id).name }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.phone }}</td>
        <td><router-link :to="{ name:'editStudent', params: {
              id: student.id,
          }}"
                         id="button"
        >Edit</router-link></td>
        <td><input @input="checkStudent" type="checkbox" :value="student.id"></td>
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
  name: "StudentTable",
  components: {
    ActionsWithTables
  },

  data() {
    return {
      checkedStudents: [],
      actionToDo: ''
    }
  },

  computed: {
    ...mapState({
      students: state => state.students.students,

      groups: state => state.groups.groups
    })
  },

  methods: {
    ...mapActions({
      deleteCheckedStudents: 'students/deleteCheckedStudents'
    }),

    checkStudent(event) {
      let event_id = event.target.value;
      if (event.target.checked === true) {
        this.checkedStudents.push(event_id);
      } else {
        this.checkedStudents = this.checkedStudents.filter(current_id => current_id !== event_id);
      }
    },

    processAction(actionToDo) {
      this.actionToDo = actionToDo
    },

    process() {
      if (this.actionToDo === 'delete') {
        this.deleteCheckedStudents(this.checkedStudents)
      }
    }
  }
}
</script>

<style scoped>

</style>