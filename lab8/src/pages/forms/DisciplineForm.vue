<template>
  <form action="" method="post" @submit.prevent>
    <h2>Add discipline</h2>
    <input
        type="text"
        v-model="discipline.name"
        @input="validateName"
        placeholder="Name"
    >

    <message-form
        :message="message.text"
        :type="message.type"
    />
    <custom-submit @click="process" value="Add"/>
  </form>
</template>

<script>
import MessageForm from "@/components/MessageForm.vue";
import {mapActions} from 'vuex'
export default {
  name: "DisciplineForm",
  components: {
    MessageForm
  },


  data() {
    return {
      discipline: {
        name: '',
      },

      message: {
        text: '',
        type: null
      }
    }
  },

  methods: {
    ...mapActions({
      addDiscipline: 'disciplines/addDiscipline'
    }),

    process() {
      if(this.validateDiscipline()) {
        this.addDiscipline({...this.discipline});
        this.clearAllFields();
      }
    },

    validateDiscipline() {
      let validations = [
          this.validateName(),
      ]

      return validations.filter(status => status === false).length === 0
    },

    validateName() {
      const regExName = /^$|[^a-zA-Z\u0400-\u04FF]+/;
      if (regExName.test(this.discipline.name) || this.discipline.name.length <= 2) {
        this.message.text = 'Invalid name, please write other';
        this.message.type = 0;
        return false;
      }
      this.message.text = 'Correct name!';
      this.message.type = 1;
      return true;
    },

    clearAllFields() {
      this.discipline.name = '';
    }
  }
}
</script>

<style scoped>

</style>