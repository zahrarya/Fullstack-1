import React from "react";
import CardWithForm from "../components/Cards";
import Data from "../sample-data.json";

function ImportantTasks() {
  const importantTasks = Data.tasks.filter((task) => task.important);

  return (
    <div className="flex flex-wrap">
      {importantTasks.map((importantTask) => (
        <CardWithForm key={importantTask._id} task={importantTask} />
      ))}
    </div>
  );
}

export default ImportantTasks;
