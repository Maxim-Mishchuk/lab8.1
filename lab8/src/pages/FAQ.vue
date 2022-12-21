<template>
  <div v-for="faq in FAQs" class="faq-block">
    <h2 class="faq-header">{{ faq.question + '?'}}</h2>
    <p class="faq-description">{{ faq.answer }}</p>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "FAQ",

  computed: {
    ...mapState({
      FAQs: state => state.faq.faq
    })
  },

}
</script>

<style scoped>
  .faq-block {
    border: 3px solid black;
    padding: 1em;
    margin: 10px 0;
  }

  .faq-header {
    font-size: 36px;
    padding-bottom: 5px;
    border-bottom: 2px solid black;
  }

  .faq-description {
    margin-top: 1em;
    text-align: justify;
  }
</style>