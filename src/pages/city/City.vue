<template>
    <div>
        <city-heard></city-heard>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
  import CityHeard from './components/header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  import {getCity} from '@/api/qunar'

  export default {
    name: 'City',
    components: {
      CityHeard,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    methods: {
      getCityInfo() {
        getCity().then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      },
      handleLetterChange(letter) {
        this.letter = letter
      }
    },
    mounted() {
      this.getCityInfo()
    }
  }
</script>

<style scoped lang="stylus">

</style>