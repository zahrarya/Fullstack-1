import React from "react";
import CardWithForm from "../components/Cards";
import Data from "../sample-data.json";

function UncompletedTasks() {
  const uncompletedTasks = Data.tasks.filter((task) => !task.completed);

  return (
    <div className="flex flex-wrap">
      {uncompletedTasks.map((uncompleted) => (
        <CardWithForm key={uncompleted._id} task={uncompleted} />
      ))}
    </div>
  );
}

export default UncompletedTasks;
