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
        <td>{{ faculty._id }}</td>
        <td>{{ faculty.name }}</td>
        <td>{{ faculty.short_name }}</td>
        <td>
          <router-link :to="
          {
            name:'editFaculty',
            params: {
              id: faculty._id,
            }
          }">
            Edit
          </router-link>
        </td>
        <td><input @input="checkFaculty" type="checkbox" :value="faculty._id"></td>
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
import {mapActions, mapGetters} from 'vuex';
export default {
  name: "FacultyTable",
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
      faculties: 'faculties/FACULTIES'
    })
  },
  methods: {
    ...mapActions({
      deleteCheckedFaculties: 'faculties/REMOVE_FACULTIES'
    }),

    checkFaculty(event) {
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
        this.deleteCheckedFaculties(this.checkedEvents.map(current_event => current_event.target.value));
        this.uncheckCheckboxes();
      }
    },

    uncheckCheckboxes() {
      this.checkedEvents = this.checkedEvents.map(current_event => current_event.target.checked = false);
      this.checkedEvents = [];
    }
  },
}
</script>

<style scoped>

</style>