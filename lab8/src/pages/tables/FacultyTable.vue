<template>
  <div v-if="faculties.length > 0">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Short_Name</th>
        <th>Edit</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="faculty in faculties">
        <td>{{ faculty.id }}</td>
        <td>{{ faculty.name }}</td>
        <td>{{ faculty.short_name }}</td>
        <td><router-link :to="{ name:'editFaculty', params: {
              id: faculty.id,
          }}"
                         id="button"
        >Edit</router-link></td>
        <td><input @input="checkFaculty" type="checkbox" :value="faculty.id"></td>
      </tr>
      </tbody>
    </table>
    <form action="" method="post" @submit.prevent>
      <actions-with-tables @getAction="processAction"/>
      <custom-submit @click="process" value="Do"/>
    </form>
  </div>
  <div v-else>
    FacultyTable is empty! Please, add some faculties to render the table
  </div>
</template>

<script>
import ActionsWithTables from "@/components/ActionsWithTables.vue";
import {mapActions, mapState} from 'vuex';
export default {
  name: "FacultyTable",
  components: {
    ActionsWithTables
  },
  data() {
    return {
      checkedFaculties: [],
      actionToDo: ''
    }
  },
  computed: {
    ...mapState({
      faculties: state => state.faculties.faculties,
    })
  },
  methods: {
    ...mapActions({
      deleteCheckedFaculties: 'faculties/deleteCheckedFaculties'
    }),

    checkFaculty(event) {
      let event_id = event.target.value;
      if (event.target.checked === true) {
        this.checkedFaculties.push(event_id);
      } else {
        this.checkedFaculties = this.checkedFaculties.filter(current_id => current_id !== event_id);
      }
    },

    processAction(actionToDo) {
      this.actionToDo = actionToDo
    },

    process() {
      if (this.actionToDo === 'delete') {
        this.deleteCheckedFaculties(this.checkedFaculties);
      }
    }
  }
}
</script>

<style scoped>

</style>