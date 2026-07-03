export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
}

export type G1Model = "standard" | "developer";

export interface Configuration {
  model: G1Model;
  handsUpgrade: boolean;
  spareBattery: boolean;
  protectiveCase: boolean;
  supportPlan: "standard" | "premium";
}

export interface CustomerDetails {
  name: string;
  email: string;
  company: string;
  country: string;
  useCase: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SpecRow {
  label: string;
  value: string;
}
