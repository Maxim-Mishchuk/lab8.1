<template>
  <form @submit.prevent>
    <h2>Edit department: {{getDepartment.name}}</h2>
    <input
        autocomplete="off"
        v-model="getDepartment.name"
        type="text"
        placeholder="name"
    >
    <input
        autocomplete="off"
        v-model="getDepartment.short_name"
        type="text"
        placeholder="shortName"
    >
    <select v-model="getDepartment.faculty_id">
      <option
          v-for="faculty in faculties"
          :value="faculty.id"
      >
        {{faculty.short_name}}
      </option>
    </select>

    <router-link to="/departmentTable">
      <custom-submit @click="process" value="Edit"/>
    </router-link>
  </form>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  name: "editDepartment",

  computed: {
    ...mapState({
      faculties: state => state.faculties.faculties
    }),
    ...mapGetters({
      getDepartmentByID: 'departments/getDepartmentByID'
    }),

    getDepartment(){
      return Object.assign({}, this.getDepartmentByID(parseInt(this.$route.params.id)))
    }

  },

  methods: {
    ...mapActions({
      editDepartmentByID: 'departments/editDepartmentByID'
    }),

    process() {
      this.editDepartmentByID(this.getDepartment)
    }
  }
}
</script>

<style scoped>

</style>