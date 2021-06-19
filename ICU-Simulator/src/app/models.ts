export interface Scenario {
  id?: number;
  age?: number;
  conditionId?: string;
  symptomId?: string;
  measureId?: string;
  type?: string;
  briefDescription?: string;
  detailedDescription?: string;
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

export interface Condition {
  id: number;
  description: string;
}

export interface Symptom {
  id: number;
  description: string;
}

export interface PatientProfile {
  caseStudyId: number;
  name: string;
  age: number;
  email: string;
  contact: string;
  address: string;
  bloodType: string;
  allergies: string;
  disease: string;
  lastVisit: string;
  condition: string;
  symptoms: string;
}

export interface Quiz {
  id?: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: string;
  justification: string;
}
