export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "Internship" | "Leadership" | "Hackathon";
  description: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "brainery-spot",
    role: "Web Development & Technical Writing Intern",
    organization: "Brainery Spot",
    period: "2024",
    type: "Internship",
    description:
      "Contributed to web development tasks and produced technical documentation and articles, translating engineering work into clear, structured writing.",
    highlights: [
      "Built and maintained web features end to end",
      "Authored technical documentation for internal and public use",
    ],
  },
  {
    id: "silicon-showdown",
    role: "Event Coordinator",
    organization: "Silicon Showdown",
    period: "2024",
    type: "Leadership",
    description:
      "Coordinated logistics, scheduling, and on-ground execution for a technical event, working across teams to keep the program on track.",
    highlights: [
      "Managed end-to-end event coordination",
      "Collaborated with cross-functional student teams",
    ],
  },
  {
    id: "cicada-25",
    role: "Participant",
    organization: "CICADA'25 Hackathon",
    period: "2025",
    type: "Hackathon",
    description:
      "Built and pitched a project under time constraints, applying rapid prototyping and full-stack development skills in a competitive setting.",
    highlights: [
      "Rapid prototyping under hackathon time constraints",
      "Cross-disciplinary teamwork and pitching",
    ],
  },
];
