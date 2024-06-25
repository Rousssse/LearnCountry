<template>
    <div class="quizz">
      <h1>This is the quizz page</h1>
      <p>{{ filteredName }}</p>
    </div>
  </template>
  <script>
  import {getNameCountryAndFlags} from "@/services/api/FlagsAPI.js"
  export default {
    name: "QuizzFlags",
    data() {
    return {
      franceData: [],
        };
    },
    mounted() {
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
        console.log(this.franceData, "this.franceDATa")
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