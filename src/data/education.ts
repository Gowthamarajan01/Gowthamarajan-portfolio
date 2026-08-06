export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export const education: EducationEntry[] = [
  {
    id: "vsb-ece",
    degree: "B.E. Electronics and Communication Engineering",
    institution: "V.S.B. Engineering College",
    period: "Final Year",
    detail: "CGPA: 8.9",
  },
];
