import { useState } from "react";

export const useSidebar = () => {
  const [isClose, setIsClose] = useState(false);

  const toggleSidebar = () => {
    setIsClose((prev) => !prev);
  };

  return {
    toggleSidebar,
    isClose
  }
}