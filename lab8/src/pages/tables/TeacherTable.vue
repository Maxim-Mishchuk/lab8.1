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
          <router-link :to="{ name:'editTeacher', params: {
              id: teacher.id,
          }}"
                       id="button"
          >Edit</router-link>
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
      checkedTeachers: [],
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
      let event_id = event.target.value;
      if (event.target.checked === true) {
        this.checkedTeachers.push(event_id);
      } else {
        this.checkedTeachers = this.checkedTeachers.filter(current_id => current_id !== event_id);
      }
    },

    processAction(actionToDo) {
      this.actionToDo = actionToDo
    },

    process() {
      if (this.actionToDo === 'delete') {
        this.deleteCheckedTeachers(this.checkedTeachers);
      }
    }
  }
}
</script>

<style scoped>

</style>