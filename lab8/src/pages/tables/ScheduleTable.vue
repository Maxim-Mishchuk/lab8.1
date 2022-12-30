<template>
  <div v-if="schedules.length > 0">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Teacher_ID</th>
        <th>Discipline_ID</th>
        <th>Group_ID</th>
        <th>Time</th>
        <th>Classroom</th>
        <th>Edit</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="schedule in schedules">
        <td>{{ schedule._id }}</td>
        <td>{{ schedule.name }}</td>
        <td>{{ teacherByID(schedule.teacher_id).name + " " + teacherByID(schedule.teacher_id).surname }}</td>
        <td>{{ disciplineByID(schedule.discipline_id).name }}</td>
        <td>{{ groupByID(schedule.group_id).name }}</td>
        <td>{{ schedule.time }}</td>
        <td>{{ schedule.classroom }}</td>
        <td>
          <router-link :to="
          {
            name:'editSchedule',
            params: {
              id: schedule._id,
            }
          }">
            Edit
          </router-link>
        </td>
        <td><input @input="checkSchedule" type="checkbox" :value="schedule._id"></td>
      </tr>
      </tbody>
    </table>
    <form action="" method="post" @submit.prevent>
      <actions-with-tables @getAction="processAction"/>
      <custom-submit @click="process" value="Do"/>
    </form>
  </div>
  <div v-else>
    ScheduleTable is empty! Please, add some schedules to render the table
  </div>
</template>

<script>
import ActionsWithTables from "@/components/ActionsWithTables.vue";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "ScheduleTable",
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
      schedules: "schedules/SCHEDULES",

      teacherByID: "teachers/TEACHER_BY_ID",
      disciplineByID: "disciplines/DISCIPLINE_BY_ID",
      groupByID: "groups/GROUP_BY_ID"
    })
  },

  methods: {
    ...mapActions({
      deleteCheckedSchedules: 'schedules/REMOVE_SCHEDULES'
    }),

    checkSchedule(event) {
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
        this.deleteCheckedSchedules(this.checkedEvents.map(current_event => current_event.target.value));
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