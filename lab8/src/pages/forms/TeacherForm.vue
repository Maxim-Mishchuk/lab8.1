<template>
  <form action="" method="post" @submit.prevent>
    <input
        v-model="teacher.name"
        type="text"
        name=""
        placeholder="Name"
    >
    <input
        v-model="teacher.surname"
        type="text"
        name=""
        placeholder="Surname"
    >
    <input
        v-model="teacher.email"
        type="email"
        name=""
        placeholder="Email"
    >

    <input
        v-model="teacher.phone"
        type="tel"
        name=""
        placeholder="Phone"
    >
    <input
        type="submit"
        value="Add"
        @click="process"
    >
  </form>
</template>

<script>
export default {
  name: "TeacherForm",

  data() {
    return {
      teacher: {
        name: '',
        surname: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    process() {
      this.$emit("addTeacher", this.teacher);
    }
  }
}
</script>

<style scoped>

</style>