<template>
  <form @submit.prevent>
    <h2>Edit group: {{getGroup.name}}</h2>
    <input
        autocomplete="off"
        v-model="getGroup.name"
        type="text"
        placeholder="name"
    >

    <input
        autocomplete="off"
        v-model="getGroup.course"
        type="number"
        placeholder="Course"
    >

    <select v-model="getGroup.department_id">
      <option value="">Department</option>
      <option
          v-for="department in departments"
          :value="department.id"
      >
        {{department.short_name}}
      </option>
    </select>

    <router-link to="/groupTable">
      <custom-submit @click="process" value="Edit"/>
    </router-link>
  </form>

</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  name: "EditGroup",

  data(){
    return{

    }
  },

  computed: {
    ...mapState({
      departments: state => state.departments.departments
    }),

    getGroup(){
      return Object.assign({}, this.getGroupByID(parseInt(this.$route.params.id)))
    },
    ...mapGetters({
        getGroupByID: 'groups/getGroupByID'
    })
  },

  methods: {
    ...mapActions({
      editGroupByID: "groups/editGroupByID"
    }),

    process() {
      this.editGroupByID(this.getGroup)

    }
  }
}
</script>

<style scoped>

</style>