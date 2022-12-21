<template>
  <form action="" method="post" @submit.prevent>
    <h2>Edit discipline: {{ getDisciplineByID(getDiscipline.id).name }}</h2>
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