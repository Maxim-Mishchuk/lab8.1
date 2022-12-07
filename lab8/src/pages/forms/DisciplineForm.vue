<template>
  <form action="" method="post" @submit.prevent>
    <input type="text" placeholder="Name">
    <input type="submit" value="Add" @click="process">
  </form>
</template>

<script>
export default {
  name: "DisciplineForm",
  data() {
    return {
      discipline: {
        name: '',
      }
    }
  },
  methods: {
    process() {
      this.$emit("addDiscipline", this.discipline)
    }
  }
}
</script>

<style scoped>

</style>