export type Questionnaire = {
  id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
  [key in string]: any;
};
