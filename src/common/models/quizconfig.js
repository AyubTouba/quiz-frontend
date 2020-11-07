
export class QuizConfig {
    allowBack;
    allowReview;
    autoMove; 
    duration;
    pageSize;
    requiredAll;
    richText;
    shuffleQuestions;
    shuffleOptions;
    showClock;
    showPager;
    theme;

    constructor(data) {
        data = data || {};
        this.allowBack = data.allowBack;
        this.allowReview = data.allowReview;
        this.autoMove = data.autoMove;
        this.duration = data.duration;
        this.pageSize = data.pageSize;
        this.requiredAll = data.requiredAll;
        this.richText = data.richText;
        this.shuffleQuestions = data.shuffleQuestions;
        this.shuffleOptions = data.shuffleOptions;
        this.showClock = data.showClock;
        this.showPager = data.showPager;
    }
}
