<template>
  <form @submit.prevent>
    <input
        autocomplete="off"
        v-model="group.name"
        type="text"
        placeholder="name"
    >

    <select v-model="group.department">
      <option v-for="department in $store.state.departments" value="{{ department.id }}">
        {{department.short_name}}
      </option> 
    </select>

    <input
        autocomplete="off"
        v-model="group.course"
        type="number"
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
  name: "GroupForm",

  data(){
    return{
        group:{
          id:'',
          department_id:'',
          name:'',
          course:''
        }
    }
  },

  methods: {
    process() {
      this.$store.commit('addGroup', this.group);
    }
  }
}
</script>

<style scoped>

</style>