export interface ITodo {
  id: number,
  title: string;
  description: string;
  date: string;
  priority: "P1" | "P2" | "P3" | "P4";
}
