<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Faculty_ID</th>
        <th>Name</th>
        <th>Short_Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="department in $store.state.departments">
        <td>{{ department.id }}</td>
        <td>{{ department.faculty_id }}</td>
        <td>{{ department.name }}</td>
        <td>{{ department.short_name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DepartmentTable"
}
</script>

<style scoped>

</style>