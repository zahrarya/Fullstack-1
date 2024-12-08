import React from "react";
import CardWithForm from "../components/Cards";
import Data from "../sample-data.json";

function CompletedTasks() {
  const completedTasks = Data.tasks.filter((task) => task.completed);

  return (
    <div className="flex flex-wrap">
      {completedTasks.map((completed) => (
        <CardWithForm key={completed._id} task={completed} />
      ))}
    </div>
  );
}

export default CompletedTasks;
