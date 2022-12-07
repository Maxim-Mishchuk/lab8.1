<template>

</template>

<script>
export default {
  name: "ScheduleForm",

  data() {
    return {
      schedule: {

      }
    }
  },

  methods: {
    process() {
      this.$store.commit('addSchedule', this.schedule);
    }
  }
}
</script>

<style scoped>

</style>