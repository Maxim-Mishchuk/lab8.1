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
      </tr>
    </thead>
    <tbody>
      <tr v-for="schedule in $store.state.schedules">
        <td>{{ schedule.id }}</td>
        <td>{{ schedule.name }}</td>
        <td>{{ schedule.teacher_id }}</td>
        <td>{{ schedule.discipline_id }}</td>
        <td>{{ schedule.group_id }}</td>
        <td>{{ schedule.time }}</td>
        <td>{{ schedule.classroom }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ScheduleTable"
}
</script>

<style scoped>

</style>