<template>
  <form action="" method="post" @submit.prevent>
    <h2>Add discipline</h2>
    <input
        type="text"
        v-model="discipline.name"
        placeholder="Name"
    >

    <custom-submit @click="process" value="Add"/>
  </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "DisciplineForm",

  data() {
    return {
      discipline: {
        name: '',
      }
    }
  },

  methods: {
    ...mapActions({
      addDiscipline: 'disciplines/addDiscipline'
    }),

    process() {
     this.addDiscipline({...this.discipline});
    }
  }
}
</script>

<style scoped>

</style>