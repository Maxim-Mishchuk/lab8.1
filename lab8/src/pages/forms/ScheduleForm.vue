<template>
  <form action="" method="post" @submit.prevent>
    <h2>Add schedule</h2>
    <input
        v-model="schedule.name"
        type="text"
        placeholder="Name"
    >

    <input
        v-model="schedule.time"
        type="time"
        placeholder="Time"
    >

    <input
        v-model="schedule.classroom"
        type="text"
        placeholder="Classroom"
    >

    <select v-model="schedule.teacher_id">
      <option value="">Teacher</option>
      <option
          v-for="teacher in teachers"
          :value="teacher.id"
      >
        {{ teacher.name+" "+teacher.surname }}
      </option>
    </select>

    <select v-model="schedule.discipline_id">
      <option value="">Discipline</option>
      <option
          v-for="discipline in disciplines"
          :value="discipline.id"
      >
        {{ discipline.name }}
      </option>
    </select>

    <select v-model="schedule.group_id">
      <option value="">Group</option>
      <option
          v-for="group in groups"
          :value="group.id"
      >
        {{ group.name }}
      </option>
    </select>

    <custom-submit @click="process" value="Add"/>
  </form>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: "ScheduleForm",

  data() {
    return {
      schedule: {
        name: '',
        teacher_id: '',
        discipline_id: '',
        group_id: '',
        time: '',
        classroom: ''
      }
    }
  },

  computed: {
    ...mapState({
      teachers: state => state.teachers.teachers,
      disciplines: state => state.disciplines.disciplines,
      groups: state => state.groups.groups
    })
  },

  methods: {
    ...mapActions({
      addSchedule: 'schedules/addSchedule'
    }),

    process() {
      this.addSchedule({...this.schedule});
    }
  }
}
</script>

<style scoped>

</style>