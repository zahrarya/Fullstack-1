import React from "react";
import CardWithForm from "../components/Cards";
import Data from "../sample-data.json";

function AllTasks() {
  const allTasks = Data.tasks;

  return (
    <div className="flex flex-wrap">
      {allTasks.map((task) => (
        <CardWithForm key={task._id} task={task} />
      ))}
    </div>
  );
}

export default AllTasks;
