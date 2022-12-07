<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="teacher in $store.state.teachers">
        <td>{{ teacher.id }}</td>
        <td>{{ teacher.name }}</td>
        <td>{{ teacher.surname }}</td>
        <td>{{ teacher.email }}</td>
        <td>{{ teacher.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TeacherTable"
}
</script>

<style scoped>

</style>