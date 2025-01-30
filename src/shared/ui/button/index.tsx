import { FC } from "react";
import { IButton } from "./model";

export const Button: FC<IButton> = ({ children, handler, style, type }) => {
  return (
    <button onClick={handler} type={type} className={style}>
      {children}
    </button>
  );
};
