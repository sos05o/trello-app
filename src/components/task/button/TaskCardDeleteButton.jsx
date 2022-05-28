import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard}) => {
  const taskCardDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter(e => e.id !== id));
  }
  return (
    <div>
      <button
        className={"taskCardDeleteButton"}
        onClick={() => {
          taskCardDeleteButton(taskCard.id)
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  )
}