import { useAppDispatch, useAppSelector } from "../../shared/hooks/useStore";
import { getLocalData } from "../../app/store/reducers/commonSlice";
import { useEffect } from "react";
import { Todo } from "../../features/todo/ui";
import { ITodo } from "../../features/todo/model";

import styles from "./index.module.css";

const data: ITodo[] = [
  {
    id: 1,
    title: "test",
    description: "Проснуться в 8",
    priority: "P1",
    date: "20.01.2025",
  },
];

export const Common = () => {
  const dispatch = useAppDispatch();
  const { commonTodos } = useAppSelector((state) => state.common);

  useEffect(() => {
    dispatch(getLocalData(data));
  });

  return (
    <section className={`${styles.common} container`}>
      <h2 className={styles.title}>Общие</h2>

      <button></button>

      {commonTodos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </section>
  );
};
