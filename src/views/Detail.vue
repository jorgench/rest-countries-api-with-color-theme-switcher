<template>
  <div class="page">
    <div class="wrapper">
      <button @click="backView">Back</button>
    </div>

    <div class="wrapper">
      <div class="detail">
        <div class="detail__image">
          <img :src="detail.flag" :alt="'flag of ' + detail.name" />
        </div>

        <div class="detail__content">
          <h3>{{ detail.name }}</h3>

          <div>
            <p><strong>Native Name:</strong> {{ detail.nativeName }}</p>
            <p><strong>Population:</strong> {{ detail.population }}</p>
            <p><strong>Region:</strong> {{ detail.region }}</p>
            <p><strong>Sub Region:</strong> {{ detail.subregion }}</p>
            <p><strong>Capital:</strong> {{ detail.capital }}</p>
          </div>
          <div>
            <p v-if="detail.topLevelDomain.length > 0">
              <strong>Top Level Domain:</strong> {{ detail.topLevelDomain[0] }}
            </p>
            <p v-if="detail.currencies.length > 0">
              <strong>Currencies:</strong> {{ detail.currencies[0].name }}
            </p>

            <p v-if="detail.languages.length > 0">
              <strong>Languages:</strong>
              {{ detail.languages.map(a => a.name).join() }}
            </p>
          </div>

          <div>
            <strong>Border Countries:</strong>
            <tags :tags="detail.borders" @select="changeDetail" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lib from '@/lib';
import Tags from '@/components/Tags';

export default {
  name: 'Detail',
  components: {
    Tags,
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    detail() {
      return this.$store.getters.getDetail(
        lib.keyToName(this.$route.params.name),
      );
    },
  },
  methods: {
    backView() {
      this.$router.go(-1);
    },
    changeDetail(a) {
      const nameCountry = lib.nameToKey(a.name);
      this.$router.push({ name: 'Detail', params: { name: nameCountry } });
    },
  },
  mounted() {
    this.$store.dispatch('getCountries');
  },
};
</script>
