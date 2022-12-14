<template>
  <form action="" method="post" @submit.prevent>
    <h2>Edit student: {{getStudent.name}}, Group: {{groups.find(group => group.id===getStudent.group_id).name}}</h2>

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

    <custom-submit @click="process" value="Edit"/>
  </form>

</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  name: "EditStudent",

  computed: {
    ...mapState({
      groups: state => state.groups.groups
    }),

    getStudent() {
      return  Object.assign({}, this.getStudentByID(parseInt(this.$route.params.id)))
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
        this.editStudentByID({...this.getStudent})
      }
    }
}
</script>

<style scoped>

</style>