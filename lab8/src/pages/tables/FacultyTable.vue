<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Short_Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="faculty in $store.state.faculties">
        <td>{{ faculty.id }}</td>
        <td>{{ faculty.name }}</td>
        <td>{{ faculty.short_name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "FacultyTable"
}
</script>

<style scoped>

</style>