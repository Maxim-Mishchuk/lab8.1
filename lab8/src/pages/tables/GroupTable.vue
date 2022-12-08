<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>department_id</th>
        <th>Name</th>
        <th>Course</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="group in $store.state.groups">
        <td>{{ group.id }}</td>
        <td>{{ group.department_id }}</td>
        <td>{{ group.name }}</td>
        <td>{{ group.course }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "GroupTable"
}
</script>

<style scoped>

</style>