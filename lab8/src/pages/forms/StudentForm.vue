<template>
  <form action="" method="post" @submit.prevent>
    <input
        v-model="student.name"
        type="text"
        placeholder="Name"
    >
    <input
        v-model="student.email"
        type="email"
        name=""
        placeholder="Email"
    >
    <input
        v-model="student.phone"
        type="tel"
        name=""
        placeholder="Phone"
    >
    <select v-model="student.group_id" name="">
      <option value="">Group</option>
      <option
          v-for="group in $store.state.groups"
          :value="group.id"
      >
        {{ group.name }}
      </option>
    </select>
    <input
        type="submit"
        value="Add"
        @click="process"
    >
  </form>
</template>

<script>
export default {
  name: "StudentForm",
  data() {
    return {
      student: {
        group_id: '',
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    process() {
      this.$store.commit('addStudent', this.student);
    }
  }
}
</script>

<style scoped>

</style>