import React from "react";

const Input = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <label>
      <input type="text" ref={ref} />
    </label>
  );
});

export default Input;
