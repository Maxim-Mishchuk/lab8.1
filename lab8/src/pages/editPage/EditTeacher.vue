<template>

  <form action="" method="post" @submit.prevent>
    <h2>Add teacher</h2>
    <input
        v-model="getTeacher.name"
        type="text"
        name=""
        placeholder="Name"
    >
    <input
        v-model="getTeacher.surname"
        type="text"
        name=""
        placeholder="Surname"
    >
    <input
        v-model="getTeacher.email"
        type="email"
        name=""
        placeholder="Email"
    >

    <input
        v-model="getTeacher.phone"
        type="tel"
        name=""
        placeholder="Phone"
    >
    <custom-submit @click="process" value="Add"/>
  </form>
</template>

<script>
import { mapGetters,mapActions} from 'vuex';
export default {
  name: "EditTeacher",
  data() {
    return {
    }
  },
  computed:{
    ...mapGetters({
      getTeacherByID: 'teachers/getTeacherByID'
    }),
    getTeacher(){
      return this.getTeacherByID(parseInt(this.$route.params.id))
    }



  },
  methods: {
    ...mapActions({
      editTeacherByID: 'teachers/editTeacherByID'
    }),

    process() {
      this.editTeacherByID({...this.getTeacher})

    }
  }
}
</script>

<style scoped>

</style>