<template>
    <!-- <div class="quizz">
      <h1>This is the quizz page</h1>
      <p>{{ filteredName }}</p>
    </div> -->
    
    <CountryCard
    v-for="country in filteredName"
    :filteredCountry="country"
    ></CountryCard>
 
  </template>
  <script>
  import {getNameCountryAndFlags} from "@/services/api/FlagsAPI.js"
  import CountryCard from "./CountryCard.vue"
  export default {
    name: "QuizzFlags",
    data() {
    return {
      franceData: [],
        };
    },
 
  components : {
    CountryCard
  },
  created() {
    this.getFrance();
  },
    methods: {
        getFrance(){
        getNameCountryAndFlags().then((data) => {
            this.franceData = data.map((country) => {
                return {
                    name: country.translations.fra.common,
                    flag:  country.flags.png
                }
                
            });
        }).catch((error) => {
            console.error(error);
        });
    }
    },
    computed: {
    filteredName() {
      console.log(this.franceData)
        return this.franceData;
    },
    }
 
  };
</script>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>