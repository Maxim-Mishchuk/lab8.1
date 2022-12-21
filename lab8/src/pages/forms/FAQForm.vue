<template>
  <form action="" method="post" @submit.prevent>
    <h2>Add FAQ</h2>
    <custom-input
        placeholder="Question"
        type-validation="textWithNums"
        v-model="faq.question"
        v-model:validation-value="validations.question"
    />
    <custom-input
        placeholder="Answer"
        type-validation="textWithNums"
        v-model="faq.answer"
        v-model:validation-value="validations.answer"
    />

    <custom-submit value="Add" @click="process"/>
  </form>
</template>

<script>
import customInput from "@/components/CustomInput.vue";
import {mapActions} from "vuex";
export default {
  name: "FAQForm",
  components: {
    customInput
  },

  data() {
    return {
      faq: {
        question: '',
        answer: ''
      },

      validations: {
        question: false,
        answer: false
      }
    }
  },

  methods: {
    ...mapActions({
      addFAQ: 'faq/addFAQ'
    }),

    process() {
      if (this.validateFAQ()) {
        this.addFAQ({...this.faq});
        this.clearAllFields();
      }
    },

    validateFAQ() {
      let validations = [
          this.validations.question,
          this.validations.answer
      ]

      return validations.filter(status => status === false).length === 0
    },

    clearAllFields() {
      this.faq.question = '';
      this.faq.answer = '';

      this.validations.question = false;
      this.validations.answer = false;
    }
  }
}
</script>

<style scoped>

</style>