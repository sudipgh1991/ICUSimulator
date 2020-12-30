export interface CaseStudy {
  id?: number;
  age?: number;
  conditionId?: string;
  symptomId?: string;
  measureId?: string;
  type?: string;
  briefDescription: string;
  detailedDescription: string;
}

export interface Quiz {
  question: string;
  options: Array<string>;
  answer?: string;
}
