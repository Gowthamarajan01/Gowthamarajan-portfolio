/**
 * EmailJS lets the contact form send email straight from the browser —
 * no custom backend required. The public key is meant to be exposed
 * client-side; it only authorizes sending through the configured
 * service + template below, not reading any account data.
 *
 * Set these in `.env.local` (see `.env.example`).
 */
export const emailjsConfig = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
};

export const isEmailjsConfigured =
  !!emailjsConfig.publicKey && !!emailjsConfig.serviceId && !!emailjsConfig.templateId;
