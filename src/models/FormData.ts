import type { ContactMethod } from "./ContactMethod";

export interface FormData {
  name: string;
  phoneNumber: string;
  contactMethod: ContactMethod | null;
  contact: string;
  idea: string;
  style?: string;
  date?: Date;
}