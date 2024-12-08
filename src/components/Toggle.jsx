import React, { useState } from "react";

import { Toggle } from "./ui/toggle";

function ToggleDemo({ task, onToggleCompleted }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
    onToggleCompleted && onToggleCompleted(!isCompleted);
  };

  return (
    <Toggle
      aria-label="Toggle completion"
      onClick={toggleCompletion}
      className="focus:outline-none rounded-full"
    >
      {isCompleted ? "completed" : "uncompleted"}
    </Toggle>
  );
}

export default ToggleDemo;
