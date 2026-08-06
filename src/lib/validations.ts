import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Enter your full name")
    .max(80, "Name is too long"),
  email: z.string().email("Enter a valid email address"),
  subject: z
    .string()
    .min(4, "Give it a short subject")
    .max(120, "Subject is too long"),
  message: z
    .string()
    .min(20, "Message should be at least 20 characters")
    .max(2000, "Message is too long"),
  // Honeypot field — real users never fill this in. Bots that
  // autofill every field will trip it.
  company: z.string().max(0, "Spam detected").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
