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
import { mapGetters,mapActions} from 'vuex';
export default {
  name: "EditTeacher",
  data() {
    return {
      teacher: {
        name: '',
        surname: '',
        email: '',
        phone:''
      }
    }
  },
  computed:{
    ...mapGetters({
      getTeacherByID: 'teachers/getTeacherByID'
    }),



  },
  methods: {


    process() {

    }
  }
}
</script>

<style scoped>

</style>