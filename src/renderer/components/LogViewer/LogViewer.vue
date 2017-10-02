<template>
    <div>
        <div class="title">Log Viewer</div>
        <div class="items">
            <pre>{{logs}}</pre>
        </div>
    </div>
</template>

<script>
  export default {
    computed: {
      logs: {
        get () {
          return this.$store.state.Logger.logentry
        }
      }
    }
  }
</script>

<style scoped>
</style>
