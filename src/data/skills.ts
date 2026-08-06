export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Data & AI"
  | "Systems & Hardware"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  /** 0-100, used for the skill grid's proficiency indicator */
  level: number;
}

export const skills: Skill[] = [
  { name: "Java", category: "Languages", level: 90 },
  { name: "C++", category: "Languages", level: 78 },
  { name: "TypeScript", category: "Languages", level: 75 },

  { name: "React", category: "Frontend", level: 85 },
  { name: "Next.js", category: "Frontend", level: 78 },
  { name: "UI/UX Design", category: "Frontend", level: 72 },

  { name: "Node.js", category: "Backend", level: 82 },
  { name: "Express", category: "Backend", level: 80 },
  { name: "REST APIs", category: "Backend", level: 84 },
  { name: "MongoDB", category: "Backend", level: 76 },
  { name: "MySQL", category: "Backend", level: 74 },

  { name: "OpenCV", category: "Data & AI", level: 76 },
  { name: "Computer Vision", category: "Data & AI", level: 74 },

  { name: "ESP32", category: "Systems & Hardware", level: 80 },
  { name: "Embedded Systems", category: "Systems & Hardware", level: 78 },
  { name: "Blockchain", category: "Systems & Hardware", level: 70 },

  { name: "Git & GitHub", category: "Tools", level: 88 },
];

export const skillCategories: SkillCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Data & AI",
  "Systems & Hardware",
  "Tools",
];
