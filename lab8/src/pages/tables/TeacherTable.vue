<template>
  <div v-if="teachers.length > 0">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Edit</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="teacher in teachers">
        <td>{{ teacher.id }}</td>
        <td>{{ teacher.name }}</td>
        <td>{{ teacher.surname }}</td>
        <td>{{ teacher.email }}</td>
        <td>{{ teacher.phone }}</td>
        <td>
          <router-link :to="
          {
            name:'editTeacher',
            params: {
              id: teacher.id,
            }
          }">
            Edit
          </router-link>
        </td>
        <td><input @input="checkTeacher" type="checkbox" :value="teacher.id"></td>
      </tr>
      </tbody>
    </table>
    <form action="" method="post" @submit.prevent>
      <actions-with-tables @getAction="processAction"/>
      <custom-submit @click="process" value="Do"/>
    </form>
  </div>
  <div v-else>
    TeacherTable is empty! Please, add some teachers to render the table
  </div>
</template>

<script>
import ActionsWithTables from "@/components/ActionsWithTables.vue";
import {mapActions, mapState} from 'vuex';
export default {
  name: "TeacherTable",
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
      teachers: state => state.teachers.teachers
    })
  },

  methods: {
    ...mapActions({
      deleteCheckedTeachers: 'teachers/deleteCheckedTeachers'
    }),

    checkTeacher(event) {
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
        this.deleteCheckedTeachers(this.checkedEvents.map(current_event => current_event.target.value));
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