
export const quizService = {
    getResult(questions) {
        var result = 0;
     for (var question in questions) {
        questions[question].options.map(option => ( option.isAnswer == true && option.isAnswer === option.selected) ? result++ : false )
     }

      return result  + '/' +  questions.length ;
    },
   
  };