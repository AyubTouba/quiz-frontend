<template>
   <v-card
    class="mx-auto mt-5"
    width
  >
    <v-card-text>
      <p class="display-1 text--primary">
       {{ question.name }}
      </p>
      <div class="text--primary">
             <v-checkbox v-for=" option in question.options "  :key="option.option_id"
            :label="option.name"  v-model="option.selected"  ></v-checkbox>
      </div>
    </v-card-text>
    <v-card-actions  class="justify-center">
        <span> 
      <v-btn
        :disabled="isFirstQuestion"
        dark
        color="deep-purple accent-4"
        @click="switchQuestion('prev')"
      >
           <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
          <v-btn
          :disabled="isLastQuestion"
        dark
        color="deep-purple accent-4"
         @click="switchQuestion('next')"
      >
           <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
      </span>
      <span>
         
         <v-btn
          :disabled="!isLastQuestion"
        dark
        right
        color="deep-green accent-4"
         @click="finishQuiz"
      >
           Finish <v-icon>mdi-send</v-icon> 
      </v-btn>
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>

import { mapGetters } from 'vuex';
import { SET_QUESTION,QUIZ_FINISHED } from "../../store/actions.type";
export default {
 
  data: () => {
         return  {
          currentQuestion : null,
          currentQuestionList : 0
          }
    }, 
   computed : {
       ...mapGetters(['questions']),
       question(){
         if(this.currentQuestion == null)
         return this.questions[this.currentQuestionList];

              return this.currentQuestion;
       },
        isLastQuestion(){
          return ((this.currentQuestionList+1) ==this.questions.length ) ? true : false ;
       },
        isFirstQuestion(){
          return (this.currentQuestionList != 0 ) ? false : true;
       } 
      
    },
    methods : {
      updateQuestion(){
         
      },
      /**
       * @description Checking the question selected and disable the prev button the question is the first
       * and disable the next button if nomber of question equal the selected question
       * @param {} state 
       */
      switchQuestion(state) {
        let payload = {'index': this.currentQuestionList, 'question': this.question}
         this.$store.dispatch(SET_QUESTION,payload).then(() => {
         if(state === 'next' && this.currentQuestionList < this.questions.length ) {
          this.currentQuestionList == this.currentQuestionList++;
           this.currentQuestion = this.questions[this.currentQuestionList];
         }else if (state === 'prev' && this.currentQuestionList > 0) {
             this.currentQuestionList == this.currentQuestionList--;
           this.currentQuestion = this.questions[this.currentQuestionList];
         }
         })
      },
         /**
           * @description set the quiz as a finished one
           */
      finishQuiz() {
            this.$store.dispatch(QUIZ_FINISHED,true);
      }
    }
}
</script>

<style>

</style>