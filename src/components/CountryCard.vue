<template>
  <article class="card" @click="$emit('click', { name })">
    <img class="card__image" :src="flag" :alt="name" />
    <div class="card__content flow">
      <h4>{{ name }}</h4>
      <ul>
        <li>Population: {{ population }}</li>
        <li>Region: {{ region }}</li>
        <li>Capital: {{ capital }}</li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    flag: String,
    name: String,
    population: Number,
    region: String,
    capital: String,
  },
};
</script>

<style></style>
