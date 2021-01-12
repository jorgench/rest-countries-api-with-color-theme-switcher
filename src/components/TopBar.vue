<template>
  <section class="bg-primary cl-base shadow-sm">
    <div class="topbar | wrapper">
      <header class="topbar_header">
        <h4 class="title">Where in the world?</h4>
      </header>
      <button
        class="button | has-icon | cl-base bg-primary"
        @click="changeState"
      >
        <svg class="icon"></svg>
        <span>Dark Mode</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopBar',

  methods: {
    changeState() {
      this.$store.commit('changeMode');
    },
  },
};
</script>
