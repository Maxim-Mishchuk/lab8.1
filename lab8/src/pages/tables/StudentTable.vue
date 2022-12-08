<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>group_id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in $store.state.students">
        <td>{{ student.id }}</td>
        <td>{{ student.group_id }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "StudentTable"
}
</script>

<style scoped>

</style>