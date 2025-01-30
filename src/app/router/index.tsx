import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../shared/ui/main-layout";
import { Common } from "../../pages/common";
import { Today } from "../../pages/today";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Common />,
      },
      {
        path: "today",
        element: <Today />,
      },
    ],
  },
]);
