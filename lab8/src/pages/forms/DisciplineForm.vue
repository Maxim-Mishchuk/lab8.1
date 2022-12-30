<template>
  <form action="" method="post" @submit.prevent>
    <h2>Add discipline</h2>
    <custom-input
        type-validation="name"
        placeholder="Name"
        v-model="discipline.name"
        v-model:validation-value="validations.name"
    />

    <custom-submit @click="process" value="Add"/>
  </form>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import {mapActions} from 'vuex'
export default {
  name: "DisciplineForm",
  components: {
    CustomInput
  },


  data() {
    return {
      discipline: {
        name: '',
      },

      validations: {
        name: false
      }
    }
  },

  methods: {
    ...mapActions({
      addDiscipline: 'disciplines/SAVE_DISCIPLINE'
    }),

    process() {
      if(this.validateDiscipline()) {
        this.addDiscipline({...this.discipline});
        this.$router.go();
      }
    },

    validateDiscipline() {
      let validations = [
        this.validations.name
      ]

      return validations.filter(status => status === false).length === 0
    },


    clearAllFields() {
      this.discipline.name = '';

      this.validations.name = false;
    }
  }
}
</script>

<style scoped>

</style>