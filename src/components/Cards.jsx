import * as React from "react";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { useState } from "react";

import DateIcon from "../assets/date.svg";
import StarIcon from "../assets/star-line.svg";
import DeleteIcon from "../assets/trash.svg";
import OptionIcon from "../assets/options.svg";
import ToggleDemo from "./Toggle";

import Data from "../sample-data.json";
import AlertDialogDemo from "./DeleteDialog";

let today = new Date().toISOString().slice(0, 10);

function CardWithForm({ task }) {
  const [isStarred, setIsStarred] = useState(false);

  const handleStarClick = () => {
    setIsStarred(!isStarred);
  };

  const handleToggleCompleted = (newCompleted, taskId) => {
    const updatedTasks = Data.tasks.map((t) =>
      t._id === taskId ? { ...t, completed: newCompleted } : t
    );
  };

  return (
    <Card key={task._id} className="w-[300px] mr-8 mb-8">
      <CardHeader className="mb-8">
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>

      <div className="flex ml-6 border-b-2 mb-4 w-64 border-dashed pb-4">
        <img src={DateIcon} alt="date" className="w-4" />
        {task.deadline.slice(0, 10)}
      </div>
      <CardFooter className="flex justify-between">
        <ToggleDemo task={task} onToggleCompleted={handleToggleCompleted} />
        <div className="flex">
          <img
            src={StarIcon}
            alt="star"
            className={`w-5 mr-2 ${isStarred ? "color:[#fde047]" : ""}`}
            onClick={handleStarClick}
          />
          {/* <img src={DeleteIcon} alt="delete" className="w-5 mr-3" /> */}
          <AlertDialogDemo />
          <img src={OptionIcon} alt="option" className="w-1" />
        </div>
      </CardFooter>
    </Card>
  );
}

export default CardWithForm;
