<template>
  <form action="" method="post" @submit.prevent>
    <h2>Add student</h2>
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
import {mapActions, mapState} from 'vuex'
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

  computed: {
    ...mapState({
      groups: state => state.groups.groups
    })
  },

  methods: {
    ...mapActions({
      addStudent: 'students/addStudent'
    }),

    process() {
      this.addStudent({...this.student});
      this.clearAllFields();
    },

    clearAllFields() {
      this.student.group_id = '';
      this.student.name = '';
      this.student.email = '';
      this.student.phone = '';
    }
  }
}
</script>

<style scoped>

</style>