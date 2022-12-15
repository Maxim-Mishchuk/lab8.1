<template>
  <div v-for="faq in FAQs" class="faq-block">
    <h2 class="faq-header">{{ faq.title + '?'}}</h2>
    <p class="faq-description">{{ faq.body }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "FAQ",

  data() {
    return {
      FAQs: []
    }
  },

  methods: {
    async getFAQs() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        this.FAQs = response.data;
      } catch (e) {
        alert(e)
      }
    }
  },

  mounted() {
    this.getFAQs();
  }
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