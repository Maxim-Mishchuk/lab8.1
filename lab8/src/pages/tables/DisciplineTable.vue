<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="discipline in $store.state.disciplines">
        <td>{{ discipline.id }}</td>
        <td>{{ discipline.name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DisciplineTable"
}
</script>

<style scoped>

</style>