import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Gowthamarajan01",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gowthamarajan-p-4a3a47320/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:alonergowtha@gmail.com",
    icon: Mail,
  },
];
