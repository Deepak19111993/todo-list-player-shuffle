import React, { useState } from "react";
// import styled from "./Player.module.scss";
import styled from "./Player.module.scss";

const Player = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);
  const [getSuffleItem, setGetSuffleItem] = useState(item);
  const [visiable, setVisiable] = useState(false);
  const [groupVisiable, setGroupVisiable] = useState(false);
  const [randomBtnVisiable, setRandomBtnVisiable] = useState(false);

  const addItem = () => {
    const updateValue = inputData.split(",");

    const newUpdate = updateValue.filter((elem, index) => {
      return elem.trim() !== " " && elem.trim() !== null && elem.trim() !== "";
    });

    if (updateValue.length > 1) {
      // console.log("// multiple names");
      setItem([...item, ...newUpdate]);
      setGetSuffleItem([...item, ...newUpdate]);
      setInputData("");
      setVisiable(true);
    } else {
      // console.log("// single");
      if (inputData.trim()) {
        // console.log("TRIMMER", inputData.trim());
        setItem([...item, inputData.trim()]);
        setGetSuffleItem([...item, inputData.trim()]);
        setInputData("");
        setVisiable(true);
      }
    }
    setInputData("");
    // console.log(updateValue);
    // console.log("newUpdate", newUpdate);
  };

  const createGroup = () => {
    setGroupVisiable(true);
    setRandomBtnVisiable(true);
  };

  const createRandomList = () => {
    // console.log("create Random List");
    const suffleItem = [...getSuffleItem];
    var shuffle = suffleItem.sort(function () {
      return 0.5 - Math.random();
    });
    setGetSuffleItem(shuffle);
    // console.log(getSuffleItem);
    // console.log(shuffle);
  };

  return (
    <div className={styled.playerWrapper}>
      <div className={styled.inputWrapper}>
        <input
          type="text"
          name="name"
          value={inputData}
          placeholder="Enter Name"
          onChange={(e) => setInputData(e.target.value)}
        />
        <button type="button" onClick={addItem}>
          <span>&#x271A;</span> Add
        </button>
      </div>
      {visiable && (
        <div className={styled.listWrapper}>
          <div className={styled.title}>List -----------------</div>
          <ol>
            {item.map((elem, index) => (
              <li className={styled.tag} key={index}>
                {elem}
              </li>
            ))}
          </ol>
        </div>
      )}
      {/* {visiable && ( */}
      <div className={styled.btnWrapper}>
        {visiable && (
          <button className={styled.btn} onClick={() => createGroup()}>
            <span>&#x260C;</span> Create Group
          </button>
        )}
        {randomBtnVisiable && (
          <button className={styled.btn} onClick={() => createRandomList()}>
            <span>&#x2608;</span> Shuffle
          </button>
        )}
      </div>
      {/* )} */}
      {visiable && (
        <div className={styled.groupWrapper}>
          <div className={styled.title}>Group ----------------</div>
          <div className={styled.groupListWrapper}>
            {groupVisiable &&
              Array(item.length > 4 ? 4 : item.length)
                .fill("")
                .map((elem, index) => (
                  <div key={index} className={styled.list}>
                    <h3>Group {index + 1} </h3>
                    {getSuffleItem.map((name, i) => {
                      if (i < 4) {
                        if (i === index) {
                          return <div key={i}>{name}</div>;
                        }
                      } else {
                        if (i % 4 === index) {
                          return <div key={i}>{name}</div>;
                        }
                      }
                      return "";
                    })}
                  </div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
