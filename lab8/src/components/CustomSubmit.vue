<template>
  <div class="submit-btn">
    <input class="submit-btn-input" type="submit" :value="value">
  </div>
</template>

<script>
export default {
  name: "CustomSubmit",
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .submit-btn {
    margin: 10px 0;
    position: relative;
    display: block;
    width: fit-content;
  }

  .submit-btn::after {
    content: "";
    position: absolute;

    left: 15px;
    bottom: 0.5em;
    width: calc(100% - 30px);
    height: 2px;

    background: white;
    opacity: 0;

    transform: translateY(-2px);
    transition: 0.25s all ease-out;
  }

  .submit-btn:hover::after{
    opacity: 1;
    transform: translateY(0);
  }

 .submit-btn-input {
   margin: 0;
   background: black;
   color: white;
 }
</style>