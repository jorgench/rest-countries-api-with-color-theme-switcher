<template>
  <div class="dropdown | bg-primary shadow-lg">
    <div class="dropdown_trigger" role="button" aria-pressed="false">
      <span> {{ message }}</span>
      <svg class="icon" role="icon"></svg>
    </div>

    <div class="dropdown_content">
      <div class="card | bg-primary cl-base shadow-sm">
        <div class="card_content | is-less-border">
          Vamos a ver que puede decir aquí
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    placeholder: {
      type: String,
      default: 'Filter By Region',
    },
  },
  data() {
    return {
      message: this.placeholder,
    };
  },
};
</script>
