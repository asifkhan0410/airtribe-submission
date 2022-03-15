import React, { useState } from "react";
import { useStateValue } from "../../context-api/StateProvider";
import NewGroup from "../NewGroup/NewGroup";
import styles from "../../styles/NewGroup.module.css";
import { Button, TextField } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";

export default function Board() {
  const [differentGroups, setDifferentGroups] = useState([
    "Todo",
    "Doing",
    "Done",
  ]);
  const [openAddNewGroupDialog, setOpenAddNewGroupDialog] =
    useState(false);
  const [newGroup, setNewGroup] = useState("");
  return (
    <div
      style={{
        display: "flex",
        marginTop: "2rem",
        flexWrap: "wrap",
        overflow: "auto",
      }}
    >
      {differentGroups.map((item, index) => (
        <NewGroup key={index} name={item} />
      ))}
      <div style={{ position: "relative" }}>
        <button
          className={styles.newElementButton}
          onClick={(e) => setOpenAddNewGroupDialog(true)}
        >
          + New{" "}
        </button>
        {openAddNewGroupDialog && (
          <ClickAwayListener
            onClickAway={() =>
              setOpenAddNewGroupDialog(false)
            }
          >
            <div
              className={styles.outerBox}
              style={{ margin: "0.83em" }}
            >
              <input
                autoFocus
                className={styles.newElementWithText}
                margin="dense"
                id="name"
                value={newGroup}
                onChange={(e) =>
                  setNewGroup(e.target.value)
                }
                type="text"
                fullWidth
                variant="standard"
              />
              <button
                className={styles.newElementButton}
                style={{ marginRight: "10px" }}
                onClick={() =>
                  differentGroups.indexOf(newGroup) ===
                    -1 &&
                  setDifferentGroups([
                    ...differentGroups,
                    newGroup,
                  ])
                }
              >
                Add
              </button>
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
}
