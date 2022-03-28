import React from "react";
import classes from "./MyInput.module.css";

// ели компонент неконтролируемый добавляем forwardRef и т.д.
const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={classes.myInput} {...props} />;
});

export default MyInput;
