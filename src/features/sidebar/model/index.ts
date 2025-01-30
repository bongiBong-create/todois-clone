export interface INavigation {
  id: number;
  path: string;
  text: string;
}

export interface ISidebarNav {
  isClose: boolean;
}

export const navigation: INavigation[] = [
  {
    id: 1,
    path: "/",
    text: "Общие"
  },
  {
    id: 2,
    path: "/today",
    text: "Сегодня"
  },
]