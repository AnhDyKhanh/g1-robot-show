import {
  Footprints,
  Brain,
  Activity,
  Hand,
  Cpu,
  Code,
  HelpCircle,
} from "lucide-react";

export const ICON_MAP = {
  Footprints,
  Brain,
  Activity,
  Hand,
  Cpu,
  Code,
  HelpCircle,
} as const;

export type IconName = keyof typeof ICON_MAP;
