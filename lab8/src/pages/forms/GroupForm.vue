<template>
  <form @submit.prevent>
    <h2>Add group</h2>
    <input
        autocomplete="off"
        v-model="group.name"
        type="text"
        placeholder="name"
    >

    <input
        autocomplete="off"
        v-model="group.course"
        type="number"
        placeholder="Course"
    >

    <select v-model="group.department_id">
      <option value="">Department</option>
      <option
          v-for="department in departments"
          :value="department.id"
      >
        {{department.short_name}}
      </option>
    </select>

    <custom-submit @click="process" value="Add"/>
  </form>


</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: "GroupForm",

  data(){
    return{
        group:{
          department_id: '',
          name: '',
          course: ''
        }
    }
  },

  computed: {
    ...mapState({
      departments: state => state.departments.departments
    })
  },

  methods: {
    ...mapActions({
      addGroup: 'groups/addGroup'
    }),

    process() {
      this.addGroup({...this.group});
      this.clearAllFields();
    },

    clearAllFields() {
      this.group.department_id = '';
      this.group.name = '';
      this.group.course = ''
    }
  }
}
</script>

<style scoped>

</style>