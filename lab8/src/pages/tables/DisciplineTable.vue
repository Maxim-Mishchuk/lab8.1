<template>
  <div v-if="disciplines.length > 0">
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
          <td>
            <router-link :to="
            {
              name:'editDiscipline',
              params: {
                id: discipline.id,
              }
            }">
              Edit
            </router-link>
          </td>
          <td><input @input="checkDiscipline" type="checkbox" :value="discipline.id"></td>
        </tr>
      </tbody>
    </table>
    <form action="" method="post" @submit.prevent>
      <actions-with-tables @getAction="processAction"/>
      <custom-submit @click="process" value="Do"/>
    </form>
  </div>
  <div v-else>
    DisciplineTable is empty! Please, add some disciplines to render the table
  </div>
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
      checkedEvents: [],
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
        this.deleteCheckedDisciplines(this.checkedEvents.map(current_event => current_event.target.value));
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