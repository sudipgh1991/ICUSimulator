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

export interface SimulationScreen {
  awRR: number;
  bP_Auto_Dia: number;
  bP_Auto_Sys: number;
  bP_Dia: number;
  bP_Sys: number;
  heartRate: number;
  id: number;
  pulse: number;
  spO2: number;
  tblood: number;
  userType: string;
}
