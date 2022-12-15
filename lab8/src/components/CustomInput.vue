<template>
  <input
      :type="typeInput"
      :autocomplete="typeAutocomplete"
      :placeholder="placeholder"

      v-model="modelValue"
      @input="updateInput"
  >

  <message-form
      :type="message.type"
      :message="message.text"
  />

</template>

<script>
import MessageForm from "@/components/MessageForm.vue";
export default {
  name: "CustomInput",
  components: {
    MessageForm
  },

  props: {
    typeInput: {
      type: String,
      required: false,
      default: "text"
    },

    typeValidation: {
      type: String,
      required: false
    },

    typeAutocomplete: {
      type: String,
      required: false,
      default: 'off'
    },

    placeholder: {
      type: String,
      required: false
    },

    modelValue: {
      required: true,
    },

    validationValue: {
      type: Boolean,
      required: false
    }
  },

  data() {
    return {
      message: {
        text: '',
        type: null
      },

    }
  },

  methods: {
    updateInput(event) {
      this.resultOfValidation = this.validate();
      this.$emit('update:modelValue', event.target.value);
      this.$emit('update:validationValue', this.resultOfValidation);
    },



    /* ------ Validations ------ */

    validate() {
      switch (this.typeValidation) {
        case 'name':
          return this.validateName();
        case 'email':
          return this.validateEmail();
        case 'time':
          return this.validateTime()
      }
    },

    validateName() {
      const regExName = /^$|[^a-zA-Z\u0400-\u04FF]+/;
      if (regExName.test(this.modelValue) || this.modelValue.length < 2) {
        this.message.text = 'Invalid name, please write other';
        this.message.type = 0;
        return false;
      }
      this.message.text = 'Correct name!';
      this.message.type = 1;
      return true;
    },

    validateEmail() {
      const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regExEmail.test(this.modelValue)) {
        this.message.text = 'Invalid email, please write other';
        this.message.type = 0;
        return false;
      }
      this.message.text = 'Correct email!';
      this.message.type = 1;
      return true;
    },

    validateTime() {
      if (this.modelValue) {
        this.message.text = 'Correct time!';
        this.message.type = 1;
        return true;
      }
      this.message.text = 'Please, write the correct time';
      this.message.type = 0;
      return false;
    }

  }
}
</script>

<style scoped>

</style>