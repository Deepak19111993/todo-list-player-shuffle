import React, { useState } from "react";
import styled from "./TodoApp.module.scss";
import addIcon from "../../assets/images/add.png";
import deleteIcon from "../../assets/images/delete.png";
import editIcon from "../../assets/images/edit.png";

const TodoApp = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);
  const [toggleIcon, setToggleIcon] = useState(true);
  const [isEdit, setIsEdit] = useState(null);
  //   console.log(inputData);

  console.log(item);
  const addItem = () => {
    let newInputData = inputData.trim();
    if (!newInputData) {
    } else if (newInputData && !toggleIcon) {
      setItem(
        item.map((elem, index) => {
          if (index === isEdit) {
            return [newInputData];
          }
          return elem;
        })
      );
      setToggleIcon(true);
      setInputData("");
      setIsEdit(null);
    } else {
      setItem([...item, newInputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const updateItem = item.filter((elem, index) => index !== id);
    setItem(updateItem);
  };

  const editItem = (id) => {
    setToggleIcon(false);
    const editUpdate = item.find((elem, index) => index === id);
    setInputData(editUpdate);
    setIsEdit(id);
  };

  return (
    <div className={styled.todoWrapper}>
      <h1 className={styled.title}>TODO APP</h1>
      <div className={styled.todoListWrapper}>
        <div className={styled.inputWrapper}>
          <input
            className={styled.inputText}
            name="input"
            type="text"
            value={inputData}
            placeholder="Enter Your Text Here"
            onChange={(e) => setInputData(e.target.value)}
          />
          {toggleIcon ? (
            <img
              className={styled.addIcon}
              src={addIcon}
              alt="Add Icon"
              onClick={addItem}
            />
          ) : (
            <img
              className={`${styled.addIcon} ${styled.editIcon}`}
              src={editIcon}
              alt="Add Icon"
              onClick={addItem}
            />
          )}
        </div>
        {item.map((elem, index) => (
          <div key={index} className={styled.inputDataList}>
            <span>{elem}</span>
            <div className={styled.btnWrapper}>
              <img
                className={styled.icon}
                src={editIcon}
                alt="Edit Icon"
                onClick={() => editItem(index)}
              />
              <img
                className={styled.icon}
                src={deleteIcon}
                alt="Delete Icon"
                onClick={() => deleteItem(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
