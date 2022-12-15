<template>
  <p :class="typesOfMessages[type]">
    {{ message }}
  </p>
</template>

<script>
export default {
  name: "MessageForm",

  props: {
    message: {
      type: String,
      required: true
    },

    type: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      typesOfMessages: [
          'red-msg',
          'green-msg',

      ]
    }
  }
}
</script>

<style scoped>
  p {
    margin-bottom: 10px;
  }

  .green-msg {
    color: darkolivegreen;
  }

  .red-msg {
    color: darkred;
  }
</style>