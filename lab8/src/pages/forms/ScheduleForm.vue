<template>
  <form action="" method="post" @submit.prevent>
    <input
        v-model="schedule.name"
        type="text"
        placeholder="Name"
    >

    <select v-model="schedule.teacher_id">
      <option
          v-for="teacher in $store.state.teachers"
          :value="teacher.id"
      >
        {{ teacher.name+" "+teacher.surname }}
      </option>
    </select>

    <select v-model="schedule.discipline_id">
      <option
        v-for="discipline in $store.state.disciplines"
        :value="discipline.id"
      >
        {{ discipline.name }}
      </option>
    </select>

    <select v-model="schedule.group_id">
      <option
        v-for="group in $store.state.groups"
        :value="group.id"
      >
        {{ group.name }}
      </option>
    </select>

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

    <input
        type="submit"
        value="Add"
        @click="process"
    >
  </form>
</template>

<script>
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

  methods: {
    process() {
      this.$store.commit('addSchedule', this.schedule);
    }
  }
}
</script>

<style scoped>

</style>