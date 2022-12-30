<template>
  <form action="" method="post" @submit.prevent>
    <h2>Edit discipline: {{ disciplineByID($route.params.id).name }}</h2>
    <custom-input
        type-validation="name"
        placeholder="Name"
        v-model="getDiscipline.name"
        v-model:validation-value="validations.name"
    />
    <custom-submit @click="process" value="Edit"/>

  </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CustomInput from "@/components/CustomInput.vue";

export default {
  name: "editDiscipline",
  components: {
    CustomInput,
  },

  data() {
    return {
      validations: {
        name: true
      }
    }
  },

  computed: {
    ...mapGetters({
      disciplineByID: "disciplines/DISCIPLINE_BY_ID"
    }),
    getDiscipline(){
      return Object.assign({}, this.disciplineByID(this.$route.params.id))
    }
  },

  methods: {
    ...mapActions({
      editDisciplineByID: "disciplines/UPDATE_DISCIPLINE"

    }),

    process() {
      if(this.validateDiscipline()) {
        this.editDisciplineByID(this.getDiscipline)
        this.$router.push('/disciplineTable')
      }
    },
    validateDiscipline() {
      let validations = [
        this.validations.name
      ]

      return validations.filter(status => status === false).length === 0
    },
  }
}
</script>

<style scoped>

</style>