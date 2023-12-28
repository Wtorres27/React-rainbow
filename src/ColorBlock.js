import React, { useState } from "react";

function ColorBlock(props) {
  return (
    <div className="colorBlock" style={{ backgroundColor: props.color }}>
      <p>{props.color}</p>
    </div>
  );
}

//  exporting component!
export default ColorBlock;
