import React, { useEffect, useState } from "react";
import styles from "../../styles/NewGroup.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStateValue } from "../../context-api/StateProvider";

export default function EditTask({ task, onClose, onDelete }) {
  const [{ tasks }, dispatch] = useStateValue();
  const [activeEditable, setActiveEditable] = useState("");
  const [editedTask, setEditedTask] = useState({
    taskName: task.taskName,
    taskId: task.taskId,
    taskType: task.taskType,
    taskDescription: task.taskDescription,
  });

  useEffect(() => {
    return () => {
      const index = tasks.findIndex(
        (item) =>
          Number(item.taskId) === Number(task.taskId)
      );
      tasks[index] = editedTask;
      dispatch({
        type: "SET_TASK",
        tasks: [...tasks],
      });
    };
  }, [editedTask]);

  const handleDelete = (e) => {
    //   e.preventDefault()
    onDelete(task.taskId)
      onClose()

      
  }

  return (
    <div style={{ width: "25vw", height: "50vh" }}>
      <div>
        <p>Title</p>
        <h2
          contentEditable="true"
          style={{ width: "100%", margin: 0 }}
          className={styles.outerBox}
          suppressContentEditableWarning
          onBlur={(e) =>
            setEditedTask({
              ...editedTask,
              taskName: e.currentTarget.textContent,
            })
          }
        >
          <span className={styles.newElementWithText}>
            {editedTask.taskName}
          </span>
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0px",
        }}
      >
        <p>Group type</p>
        <p
          contentEditable="true"
          className={styles.outerBox}
          suppressContentEditableWarning
          onBlur={(e) =>
            setEditedTask({
              ...editedTask,
              taskType: e.currentTarget.textContent,
            })
          }
        >
          <span className={styles.newElementWithText}>
            {editedTask.taskType}
          </span>
        </p>
      </div>
      <div>
        <p>Title</p>
        <p
          contentEditable="true"
          className={styles.outerBox}
          suppressContentEditableWarning
          style={{ minHeight: "20vh", alignItems: "start" }}
          onBlur={(e) =>
            setEditedTask({
              ...editedTask,
              taskDescription: e.currentTarget.textContent,
            })
          }
        >
          <span className={styles.newElementWithText}>
            {editedTask.taskDescription}
          </span>
        </p>
      </div>

      <button
        className={styles.newElementButton}
        style={{ width: "auto",marginTop: '30px' }}
        onClick={(e) => handleDelete(e)}
      >
        <DeleteIcon htmlColor={"red"} />
      </button>
    </div>
  );
}
