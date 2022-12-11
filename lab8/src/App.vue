<template>
  <navbar/>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  body {
    font-size: 20px;
  }

  .content {
    width: 75%;
    margin: calc(74px + 100px) auto;
  }
</style>
