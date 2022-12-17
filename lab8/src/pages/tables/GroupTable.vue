<template>
  <div v-if="groups.length > 0">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Department</th>
        <th>Name</th>
        <th>Course</th>
        <th>Edit</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="group in groups">
        <td>{{ group.id }}</td>
        <td>{{ departments.find(department => department.id===parseInt(group.department_id)).name }}</td>
        <td>{{ group.name }}</td>
        <td>{{ group.course }}</td>
        <td>
          <router-link :to="
          {
            name:'editGroup',
            params: {
              id: group.id
            }
          }">
            Edit
          </router-link>
        </td>
        <td><input @input="checkGroup" type="checkbox" :value="group.id"></td>
      </tr>
      </tbody>
    </table>
    <form action="" method="post" @submit.prevent>
      <actions-with-tables @getAction="processAction"/>
      <custom-submit @click="process" value="Do"/>
    </form>
  </div>
  <div v-else>
    GroupTable is empty! Please, add some groups to render the table
  </div>
</template>

<script>
import ActionsWithTables from "@/components/ActionsWithTables.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "GroupTable",
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
    ...mapState({
      groups: state => state.groups.groups,
      departments: state => state.departments.departments
    })
  },

  methods: {
    ...mapActions({
      deleteCheckedGroups: 'groups/deleteCheckedGroups'
    }),

    checkGroup(event) {
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
        this.deleteCheckedGroups(this.checkedEvents.map(current_event => current_event.target.value));
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