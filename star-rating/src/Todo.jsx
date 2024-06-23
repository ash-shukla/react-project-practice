import { useEffect, useState } from "react";
import { allTasks } from "./tasks.js";

const Todo = () => {
  const [nextTasks, setNextTasks] = useState({ a: 0, b: 15 });
  // const tempTasks = allTasks.slice(0, nextTasks);
  const [taskList, setTaskList] = useState(allTasks);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setTaskList(data));
  }, []);

  // const updatedTasks = (prevLength) => {
  //   let updatedTempTasks = taskList.slice(prevLength, nextTasks.b);
  //   return setTaskList([...updatedTempTasks]);
  // };
  const onNext = () => {
    let prevLength = nextTasks.a;
    setNextTasks({ a: prevLength + 15, b: nextTasks.b + 15 });
  };
  console.log(nextTasks);
  return (
    <div>
      {taskList.map((x) => {
        return <div key={x.id}>{x.id}</div>;
      })}
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Todo;
