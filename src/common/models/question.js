import { Option } from './option';

export class Question {
    question_id;
    name;
    questionTypeId;
    options;
    answered;//true lorsuqu il y une rep
    state;
    
    constructor(data) {
        data = data || {};
        this.question_id = data.question_id;
        this.name = data.name;
     //   this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
        this.state='off';
        this.answered=false;
    }
}
