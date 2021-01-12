<template>
  <div class="page flow">
    <div class="wrapper">
      <div id="input-search">
        <input type="text" v-model="queryCountry" />
      </div>

      <div id="dropdown-select">
        <select v-model="queryRegion">
          <option :value="a.key" v-for="(a, i) in regions" :key="i">
            {{ a.label }}
          </option>
        </select>
      </div>
    </div>
    <div class="wrapper">
      <div class="grid">
        <template v-if="!loading && countries.length > 0">
          <div
            class="grid__item"
            v-for="(country, i) in countries"
            :key="i"
            role="button"
            aria-hidden="true"
          >
            <country-card
              v-bind="country"
              tabindex="0"
              role="button"
              aria-pressed="false"
              @click="openDetail"
            />
          </div>
        </template>
        <template v-else>
          <div class="grid__item" v-if="loading"></div>
          <div class="grid__item full">No Net</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CountryCard from '@/components/CountryCard';
import lib from '@/lib';

export default {
  name: 'Home',
  components: {
    CountryCard,
  },
  data() {
    return {
      loading: false,
      queryCountry: '',
      queryRegion: '',
      regions: [
        { label: 'Todos', key: '' },
        { label: 'Africa', key: 'Africa' },
        { label: 'America', key: 'Americas' },
        { label: 'Asia', key: 'Asia' },
        { label: 'Europe', key: 'Europe' },
        { label: 'Oceania', key: 'Oceana' },
      ],
    };
  },
  computed: {
    countries() {
      return this.$store.getters.getCountries({
        query: this.queryCountry,
        region: this.queryRegion,
      });
    },
  },
  methods: {
    openDetail(a) {
      const nameCountry = lib.nameToKey(a.name);
      this.$router.push({ name: 'Detail', params: { name: nameCountry } });
    },
  },
  created() {
    this.$store.dispatch('getCountries');
  },
};
</script>
