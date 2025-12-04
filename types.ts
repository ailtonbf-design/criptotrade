import { LucideIcon } from "lucide-react";

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatData {
  name: string;
  value: number;
}
