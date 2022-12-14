<template>
  <form action="" method="post" @submit.prevent>
    <h2>Edit discipline: {{getDiscipline.name}}</h2>
    <input
        type="text"
        v-model="getDiscipline.name"
        placeholder="Name"
    >

    <custom-submit @click="process" value="Edit"/>
  </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "editDiscipline",

  computed: {
    ...mapGetters({
      getDisciplineByID: "disciplines/getDisciplineByID"
    }),
    getDiscipline(){
      return Object.assign({}, this.getDisciplineByID(parseInt(this.$route.params.id)))
    }
  },

  methods: {
    ...mapActions({
      editDisciplineByID: "disciplines/editDisciplineByID"

    }),

    process() {
      this.editDisciplineByID({...this.getDiscipline})

    }
  }
}
</script>

<style scoped>

</style>