import { QuizConfig } from './quiz-config';
import { Question } from './question';

export class Quiz {
    id;
    name;
    description;
    config;
    questions ;

    constructor(data) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new QuizConfig(data.config);
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}
