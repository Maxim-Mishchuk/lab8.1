<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>department_id</th>
        <th>Name</th>
        <th>Course</th>
        <th>Edit</th>
        <th>Select</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="group in groups">
        <td>{{ group.id }}</td>
        <td>{{ group.department_id }}</td>
        <td>{{ group.name }}</td>
        <td>{{ group.course }}</td>
        <td><router-link :to="{ name:'editGroup', params: {
              id: group.id,
          }}"
                         id="button"
        >Edit</router-link></td>
        <td><input @input="checkGroup" type="checkbox" :value="group.id"></td>
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
import {mapActions, mapState} from "vuex";

export default {
  name: "GroupTable",
  components: {
    ActionsWithTables
  },

  data() {
    return {
      checkedGroups: [],
      actionToDo: ''
    }
  },

  computed: {
    ...mapState({
      groups: state => state.groups.groups
    })
  },

  methods: {
    ...mapActions({
      deleteCheckedGroups: 'groups/deleteCheckedGroups'
    }),

    checkGroup(event) {
      let event_id = event.target.value;
      if (event.target.checked === true) {
        this.checkedGroups.push(event_id);
      } else {
        this.checkedGroups = this.checkedGroups.filter(current_id => current_id !== event_id);
      }
    },

    processAction(actionToDo) {
      this.actionToDo = actionToDo
    },

    process() {
      if (this.actionToDo === 'delete') {
        this.deleteCheckedGroups(this.checkedGroups);
      }
    }
  }
}
</script>

<style scoped>

</style>