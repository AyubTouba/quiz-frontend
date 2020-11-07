<template>
   <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Yuba Quiz
        </h1>
        <p class="subheading font-weight-regular">
          For more Information About Yuba Quiz please visit our
          <a href="#" target="_blank">github repository</a>
        </p>
      </v-flex>
      <v-container class="grey lighten-5">
          <v-row no-gutters>
              <v-col
        cols="12"
        sm="4"
        v-for="theme in themes" 
        :key="theme.id"
        >
               <Theme :theme="theme" />
              </v-col>
          </v-row>
      </v-container>
         

</v-layout>
  </v-container>
</template>

<script>
 import Theme from '../quiz/Theme';
 import { mapGetters } from 'vuex';
export default {
 name : "Home",
 data: () => ({
   
 }),
 components : {
     Theme
 },
   computed : {
    ...mapGetters([
    'themes'
    ]),

 },
 methods: {
 
 }
}
</script>

<style>

</style>