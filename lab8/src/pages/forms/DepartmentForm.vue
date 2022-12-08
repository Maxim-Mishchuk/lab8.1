<template>
  <form @submit.prevent>
    <input
        autocomplete="off"
        v-model="department.name"
        type="text"
        placeholder="name"
    >
    <select v-model="department.faculty_id">
      <option
          v-for="faculty in $store.state.faculties"
          :value="faculty.id"
      >
        {{faculty.short_name}}
      </option>
    </select>
    <input
        autocomplete="off"
        v-model="department.short_name"
        type="text"
        placeholder="shortName"
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
  name: "DepartmentForm",

  data(){
    return{
      department: {
        faculty_id:'',
        name:'',
        short_name:''
      }
    }
  },
  methods: {
    process() {
      this.$store.commit('addDepartment', this.department);
    }
  }
}
</script>

<style scoped>

</style>