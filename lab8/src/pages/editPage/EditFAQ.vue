<template>
  <form action="" method="post" @submit.prevent>
    <h2>Edit FAQ</h2>
    <custom-input
        placeholder="Question"
        type-validation="textWithNums"
        v-model="getFAQ.question"
        v-model:validation-value="validations.question"
    />
    <custom-input
        placeholder="Answer"
        type-validation="textWithNums"
        v-model="getFAQ.answer"
        v-model:validation-value="validations.answer"
    />

    <custom-submit value="Edit" @click="process"/>
    <custom-submit value="Delete" @click="processDelete"/>
  </form>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';
import CustomInput from "@/components/CustomInput.vue";
import MessageForm from "@/components/MessageForm.vue";
import CustomSubmit from "@/components/CustomSubmit.vue";
export default {
  name: "EditFAQ",
  components: {
    CustomInput,
    MessageForm,
    CustomSubmit
  },
  data() {
    return {
      validations: {
        question: true,
        answer: true
      }
    }
  },
  computed:{
    ...mapGetters({
      getFAQbyID: 'faq/getFAQByID'
    }),
    getFAQ(){
      return Object.assign({}, this.getFAQbyID(parseInt(this.$route.params.id)))
    }
  },

  methods: {
    ...mapActions({
      editFAQByID: 'faq/editFAQByID',
      deleteCheckedFAQ: 'faq/deleteCheckedFAQ'
    }),

    process() {
      if (this.validateFAQ()) {
        this.editFAQByID(this.getFAQ)
        this.$router.push('/faq')
      }
    },
    processDelete(){
      this.deleteCheckedFAQ(this.getFAQ.id)
      this.$router.push('/faq')
    },

    validateFAQ() {
      let validations = [
        this.validations.question,
        this.validations.answer
      ]

      return validations.filter(status => status === false).length === 0
    },

  }
}

</script>


<style scoped>

</style>