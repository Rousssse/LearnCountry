<template>
    <div class="country__container">
    <div class="country__card">
      <div class="country__flag">
      <img :src="filteredCountry.flag" >
    </div>
    <p>{{ filteredCountry.name }}</p>
    <input 
        v-model="userInput" 
        @keyup.enter="checkAnswer" 
        placeholder="Enter the country name" 
        class="input-field"
      />
      <p v-if="message" :class="{ success: isCorrect, error: !isCorrect }">{{ message }}</p>
    </div>
</div>
  </template>
  <script>
  export default {
    name: "CountryCard",
    props: {
        filteredCountry: { type: Object, required: true }
    },
  
  data() {
    return {
        userInput:'',
        mesage:'',
        isCorrect: false
    };
  },
  methods: {
    checkAnswer(){
        if(this.userInput.trim().toLowerCase() === this.filteredCountry.name.toLowerCase()){
            this.message ="Correct !";
            this.isCorrect = true;
        }
        else {
            this.message ="Incorrect !";
            this.isCorrect = false;
        }
        this.userInput = '';
    }
  }
}
</script>
<style>
.country__card{
    width: 260px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 30px;
    background: #ffffff;
    box-shadow:  8px 8px 40px #a8a8a8,
             -8px -8px 40px #ffffff;
}
.country__container {
 
    padding: 10px;
    display: flex;
    justify-content: center;
}
.country__flag img {
    border-radius: 20px;
    max-width: 200px;
    max-height: 140px;
}
.country__container p {
    color: black;
    font-size: 16px;
}
</style>
  
