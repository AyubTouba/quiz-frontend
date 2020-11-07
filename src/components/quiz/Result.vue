<template>
   <v-card
    class="mx-auto mt-5"
    width
  >
    <v-card-text >
      <p class="display-1 text--primary">
      Result : 
      </p>
      <div class="text--primary text-center">
    
            <h1 class="font-weight-black">  {{ result }}</h1>
      </div>
    </v-card-text>
   
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { quizService } from '../../common/quizservice';
export default {
    computed : {
       ...mapGetters(['questions']),
       result() {
           return  quizService.getResult(this.questions);
       }
    }
}
</script>

<style>

</style>