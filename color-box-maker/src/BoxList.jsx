import react, {useState} from "react";
import {v4 as uuid} from "uuid";

import Box from "./Box.jsx";
import NewBoxForm from "./NewBoxForm.jsx";

const BoxList = () => {
  //boxes will be an array of box objects, each box object will have 4 attributes: id, color, height, and width.
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, {...newBox, id: uuid()}]);
  };

  const removeBox = (boxId) => {
    setBoxes(boxes => {
      return boxes.filter((box) => box.id !== boxId);
    });
  };

  return (
    <div className="BoxList">
      <h2 className="BoxList-title">Box List! Use form to create boxes!</h2>
      <NewBoxForm addBox={addBox}/>
      <div className="BoxList-boxes">
        {boxes.map(box => <Box key={box.id} color={box.color} height={box.height} width={box.width} removeBox={removeBox}/>)}
      </div>
    </div>
  );
};

export default BoxList;