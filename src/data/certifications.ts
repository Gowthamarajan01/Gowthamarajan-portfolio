export interface Certification {
  id: string;
  title: string;
  issuer: string;
}

export const certifications: Certification[] = [
  {
    id: "infosys-java",
    title: "Java Programming",
    issuer: "Infosys Springboard",
  },
  {
    id: "uiux-masterclass",
    title: "UI/UX Masterclass",
    issuer: "Certification Program",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing Engineering",
    issuer: "Certification Program",
  },
];

export const languages = ["Tamil", "English", "Telugu"] as const;
