import React, { useContext, useState } from "react";
import { ViewerContext } from "../../Context/ViewContext";
import { Building } from "../Building";
import { addPoint, clearPoint } from "../Clickadd";
import { createBox } from "../createBox";

const SelectBox = () => {
  const { setElement } = useContext(ViewerContext);
  //const [idChange, setIdChange] = useState(0);

  const data = [
    {
      id: "0",
      text: "buidding1",
      handlerClick: () => createBox,
    },
    {
      id: "1",
      text: "buidding2",
      handlerClick: () => Building,
    },
    {
      id: "2",
      text: "addPoint",
      handlerClick: () => addPoint,
    },
    {
      id: "3",
      text: "clearPoint",
      handlerClick: () => clearPoint,
    },
  ];
  const handlerChangeValue = (e) => {
    data.forEach((item) => {
      if (item.id === e.target.value) {
        setElement(item.handlerClick);
        //return;
      }
    });
  };
  return (
    <select
      onChange={handlerChangeValue}
      style={{
        position: "absolute",
        top: "0",
        outline: "none",
        width: "100px",
        padding: "5px 10px",
      }}
    >
      {data.map((item) => (
        <option value={item.id} key={item.id}>
          {item.text}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
