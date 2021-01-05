<template>
  <section class="topbar bg-secondary cl-white">
    <div class="wrapper">
      <header class="topbar_header">
        <h4>Where in the world?</h4>
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
      console.log('Hey I change the color');
    },
  },
};
</script>
