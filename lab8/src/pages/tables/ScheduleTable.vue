<template>
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
        <td>{{ schedule.id }}</td>
        <td>{{ schedule.name }}</td>
        <td>{{ schedule.teacher_id }}</td>
        <td>{{ schedule.discipline_id }}</td>
        <td>{{ schedule.group_id }}</td>
        <td>{{ schedule.time }}</td>
        <td>{{ schedule.classroom }}</td>
        <td>Edit</td>
        <td><input @input="checkSchedule" type="checkbox" :value="schedule.id"></td>
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
  name: "ScheduleTable",
  components: {
    ActionsWithTables
  },

  data() {
    return {
      checkedSchedules: [],
      actionToDo: ''
    }
  },

  computed: {
    ...mapState({
      schedules: state => state.schedules.schedules
    })
  },

  methods: {
    ...mapActions({
      deleteCheckedSchedules: 'schedules/deleteCheckedSchedules'
    }),

    checkSchedule(event) {
      let event_id = event.target.value;
      if (event.target.checked === true) {
        this.checkedSchedules.push(event_id);
      } else {
        this.checkedSchedules = this.checkedSchedules.filter(current_id => current_id !== event_id);
      }
    },

    processAction(actionToDo) {
      this.actionToDo = actionToDo
    },

    process() {
      if (this.actionToDo === 'delete') {
        this.deleteCheckedSchedules(this.checkedSchedules);
      }
    }
  }
}
</script>

<style scoped>

</style>