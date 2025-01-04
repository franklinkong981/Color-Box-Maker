import react from "react";

const Box = ({id, color, height, width, removeBox}) => {
  const handleRemove = () => {
    removeBox(id);
  };

  return (
    <div className="Box" id={id}>
      <div className="Box-display" style={{backgroundColor: color, width: width, height: height}}></div>
      <button className="Box-remove-button" onClick={handleRemove}>DELETE BOX</button>
    </div>
  );
};

export default Box;