<template>
  <div id="app">
    <top-bar />
    <router-view />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';

export default {
  name: 'App',
  components: {
    TopBar,
  },
};
</script>

<style lang="scss"></style>
