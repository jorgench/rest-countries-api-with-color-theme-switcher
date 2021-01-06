<template>
  <div>
    <div v-for="(tag, j) in tags" :key="j" @click="select(tag)">
      {{ tag.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    select(tag) {
      this.$emit('select', tag);
    },
  },
};
</script>

<style></style>
