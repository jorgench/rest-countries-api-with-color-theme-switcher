<template>
  <section class="bg-primary cl-base">
    <div class="topbar | wrapper">
      <header class="topbar_header">
        <h4 class="title">Where in the world?</h4>
      </header>
      <button
        class="button has-icon color-default bg-secondary"
        @click="changeState"
      >
        Dark Mode
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
