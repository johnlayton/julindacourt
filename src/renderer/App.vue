<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from './components/Navigation/Navigation'
  export default {
    name: 'julindacourt',
    components: {
      Navigation
    }
  }
</script>

<style>
  /* CSS */
</style>
