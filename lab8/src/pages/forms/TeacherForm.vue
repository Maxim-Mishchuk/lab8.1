<template>
  <form action="" method="post" @submit.prevent>
    <h2>Add teacher</h2>
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
import {mapActions} from 'vuex'
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
    ...mapActions({
      addTeacher: 'teachers/addTeacher'
    }),

    process() {
      this.addTeacher({...this.teacher})
    }
  }
}
</script>

<style scoped>

</style>