<template>
  <select @click="throwAction" v-model="actionToDo" >
    <option value="delete">
      Delete
    </option>
  </select>
</template>

<script>
export default {
  name: "ActionsWithTables",
  data() {
    return {
      actionToDo: '',
    }
  },
  methods: {
    throwAction() {
      this.$emit('getAction', this.actionToDo);
    }
  }

}
</script>

<style scoped>

</style>