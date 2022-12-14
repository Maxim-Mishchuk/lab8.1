<template>
  <form @submit.prevent>
    <h2>Add department</h2>
    <input
        autocomplete="off"
        v-model="department.name"
        type="text"
        placeholder="name"
    >
    <input
        autocomplete="off"
        v-model="department.short_name"
        type="text"
        placeholder="shortName"
    >
    <select v-model="department.faculty_id">
      <option value="">Faculty</option>
      <option
          v-for="faculty in faculties"
          :value="faculty.id"
      >
        {{faculty.short_name}}
      </option>
    </select>

    <custom-submit @click="process" value="Add"/>
  </form>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: "DepartmentForm",

  data(){
    return{
      department: {
        faculty_id: '',
        name: '',
        short_name: ''
      }
    }
  },

  computed: {
    ...mapState({
      faculties: state => state.faculties.faculties
    })
  },

  methods: {
    ...mapActions({
      addDepartment: 'departments/addDepartment'
    }),

    process() {
      this.addDepartment({...this.department});
      this.clearAllFields();
    },

    clearAllFields() {
      this.department.faculty_id = '';
      this.department.name = '';
      this.department.short_name = '';
    }
  }
}
</script>

<style scoped>

</style>