import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  type: "button" | "submit";
  style: string;
  handler: () => void;
}