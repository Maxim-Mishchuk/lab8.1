<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Edit</th>
        <th>Select</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="discipline in disciplines">
        <td>{{ discipline.id }}</td>
        <td>{{ discipline.name }}</td>
        <td>Edit</td>
        <td><input @input="checkDiscipline" type="checkbox" :value="discipline.id"></td>
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
  name: "DisciplineTable",
  components: {
    ActionsWithTables
  },

  data() {
    return {
      checkedDisciplines: [],
      actionToDo: ''
    }
  },

  computed: {
    ...mapState({
      disciplines: state => state.disciplines.disciplines
    })
  },

  methods: {
    ...mapActions({
      deleteCheckedDisciplines: 'disciplines/deleteCheckedDisciplines'
    }),

    checkDiscipline(event) {
      let event_id = event.target.value;
      if (event.target.checked === true) {
        this.checkedDisciplines.push(event_id);
      } else {
        this.checkedDisciplines = this.checkedDisciplines.filter(current_id => current_id !== event_id);
      }
    },

    processAction(actionToDo) {
      this.actionToDo = actionToDo
    },

    process() {
      if (this.actionToDo === 'delete') {
        this.deleteCheckedDisciplines(this.checkedDisciplines);
      }
    }
  }
}
</script>

<style scoped>

</style>