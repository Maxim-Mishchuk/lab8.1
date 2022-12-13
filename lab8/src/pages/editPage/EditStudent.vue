<template>
  <form action="" method="post" @submit.prevent>
    <h2>Add student</h2>
    <input
        v-model="getStudent.name"
        type="text"
        placeholder="Name"
    >
    <input
        v-model="getStudent.email"
        type="email"
        name=""
        placeholder="Email"
    >
    <input
        v-model="getStudent.phone"
        type="tel"
        name=""
        placeholder="Phone"
    >
    <select v-model="getStudent.group_id" name="">
      <option
          v-for="group in groups"
          :value="group.id"
      >
        {{ group.name }}
      </option>
    </select>

    <custom-submit @click="process" value="Add"/>
  </form>

</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  name: "EditStudent",

  data() {
    return {

    }
  },

  computed: {
    ...mapState({
      groups: state => state.groups.groups
    }),

    getStudent() {
      return this.getStudentByID(parseInt(this.$route.params.id))
    },

    ...mapGetters({
      getStudentByID: 'students/getStudentByID'
    }),
  },


    methods: {
      ...mapActions({
        editStudentByID: 'students/editStudentByID'
      }),

      process() {

      }
    }
}
</script>

<style scoped>

</style>