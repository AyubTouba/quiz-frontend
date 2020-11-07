export class Option {
    id;
    questionId;
    name;
    isAnswer;
    selected;//true:lorsqu'elleest selectioné
    state;

    constructor(data) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAnswer = data.isAnswer;
        this.selected=data.selected;
        this.state='off';
    }
}