<template>
  <v-container>
   <v-row>
      <v-col
        offset-md="1"
        md="10"
      >
     <v-card
    class="mx-auto"
   
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title> {{theme.title}} </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">#  {{theme.theme_id}} </v-card-subtitle>

    <v-card-text class="text--primary">
         <div> {{theme.description}}</div>
    </v-card-text>
  </v-card>
 
      </v-col>
   </v-row>
        <template>
       <v-col
        cols="12"
        v-for="quiz in quizes"
        :key="quiz.id"
        >
     <v-card
     tile
    raised
  >
    <v-list-item three-line>
     <v-list-item-avatar
        tile
        size="100"
        color="grey"
      ></v-list-item-avatar>

      <v-list-item-content>
        <div class="overline mb-4"> # {{ quiz.quiz_id }} </div>
        <v-list-item-title class="headline mb-1">{{ quiz.name }}</v-list-item-title>
         <v-card-text class="text--primary">
         <div>{{ quiz.description }}</div>
    </v-card-text>
      </v-list-item-content>


    </v-list-item>
   
    <v-card-actions >
         <v-spacer></v-spacer>
      <div><v-btn color="#004D40" dark right :to="'/quiz/' + quiz.quiz_id ">Quiz</v-btn></div>
    </v-card-actions>
  </v-card>
       </v-col>
</template>

  </v-container>
</template>

<script>
import { getListQuizByTheme } from '../../api/quiz';
import { mapGetters } from 'vuex';
export default {
    name : 'ListQuiz',
    data: () => {
         return  {
           /** @type {object} object of quizes  */
             quizes : []
         }
    },
    created() {
      /** @type {number}  */
      let idTheme =  this.$route.params.id ;
      
      /** @description getting quizes from the API  */
       getListQuizByTheme(idTheme).then((response) => {
           this.quizes = response.data;
       }).catch((err) => {
         console.log(err);
       })
     
    },
      computed : {
    ...mapGetters(['getThemeById']),
     theme() {
      return this.$store.getters.getThemeById(this.$route.params.id);
        }
 },
}
</script>

