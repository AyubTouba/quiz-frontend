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
      <v-card-title>{{quiz.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">#{{quiz.quiz_id}}</v-card-subtitle>

    <v-card-text class="text--primary">
         <div>{{quiz.description}}</div>
    </v-card-text>

    <v-card-actions>
           <v-spacer></v-spacer>
      <v-btn
       color="#004D40" dark right
       @click="starQuiz"
       v-if="!isStarted"
      >
       Start Quiz 
      </v-btn>
      
    </v-card-actions>
  </v-card>
 
      </v-col>
     <v-col
       offset-md="2"
        md="8"
      >
      <div v-if="isStarted && !isFinished">
     <Question  />
      </div>
       <div v-if="isFinished">
     <Result />
      </div>
         </v-col>
          </v-row>
      
      
        
  </v-container>
</template>

<script>
import Question from './Question';
import Result from './Result';
import { getQuizById } from '../../api/quiz';
import { ADD_QUIZ } from "../../store/actions.type";
import { mapGetters } from 'vuex';
export default {
    name : 'Quiz',
    data: () => {
         return  {
           isStartedQ: false
         }
    },
    components : {
        Question,
        Result
    },
    created() {
      let idquiz =  this.$route.params.id ;
       getQuizById(idquiz).then((response) => {
           this.$store.dispatch(ADD_QUIZ,response.data);
       }).catch((err) => {
         console.log(err);
       })
     
    },
    methods:{
      starQuiz(){
         this.isStartedQ = true;
      },
    },
    computed : {
        ...mapGetters(['quiz','isFinished']),
       isStarted(){
         return this.isStartedQ;
       } 
      
    }
}
</script>

<style scope>
.notstarted {
  display: none;
}
.started {
  display: block;
}
</style>