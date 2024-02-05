import React, { useState } from "react";

export function BasicsBatchUpdate() {
  const [number, setNumber] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const onButtonClickBatchUpdate = () => {
    setNumberTwo((n) => n + 1);
    setNumberTwo((n) => n + 1);
    setNumberTwo((n) => n + 1);
  };
  const onButtonClick = () => {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  };
  return (
    <>
      <div>
        <h1>Normal Update {number}</h1>
        <button onClick={onButtonClick}>+3</button>
      </div>
      <div>
        <h1>Batch Update - {numberTwo}</h1>
        <button onClick={onButtonClickBatchUpdate}>+3</button>
      </div>
    </>
  );
}
