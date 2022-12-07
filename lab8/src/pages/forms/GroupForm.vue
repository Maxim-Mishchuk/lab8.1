<template>
  <form @submit.prevent>
    <input
        autocomplete="off"
        v-model="group.name"
        type="text"
        placeholder="name"
    >
    <select
        v-model="group.department"
        class="input"
    >
      <option
          v-for="department in departments"
          v-bind:key="department.id"
      >
        {{department.name}}
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

  props:{
    departments: {
      type:Array,
      required:true
    }
  },

  data(){
    return{
        group:{
          id:'',
          department:'',
          name:'',
          course:''
        }
    }
  }
}
</script>

<style scoped>

</style>