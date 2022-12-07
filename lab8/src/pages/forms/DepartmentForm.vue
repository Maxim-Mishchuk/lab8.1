<template>
  <form @submit.prevent>
    <input
        autocomplete="off"
        v-model="department.name"
        type="text"
        placeholder="name"
    >
    <select
      v-model="department.group"
      class="input"
    >
      <option
          v-for="faculty in faculties"
          v-bind:key="faculty.id"
      >
        {{faculty.name}}
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

  /*props:{
    faculties:{
      type: Array,
      required: true,
    }
  },*/

  data(){
    return{
      faculties:[{id:1, name:"First"}, {id:2, name:"Second"}, {id:3, name:"First"}, {id:4, name:"Second"}, {id:5, name:"First"}, {id:6, name:"Second"},],
      department: {
        id:'',
        faculty:'',
        name:'',
        short_name:''
      }
    }
  }
}
</script>

<style scoped>

</style>