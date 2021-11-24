import React, { useState } from "react";
import Slider from "react-input-slider";
const Calculator = () => {
  const [state, setState] = useState({ x: 0 });
  return (
    <div>
      ({state.x})
      <Slider
        axis="x"
        x={state.x}
        onChange={({ x }) => setState((state) => ({ ...state, x }))}
      />
    </div>
  );
};

export default Calculator;
