import React from "react";

const Lesson = React.forwardRef((props, ref) => {
  return (
    <li
      ref={ref}
      data-id={props.data.id}
      onMouseDown={props.onMouseDown}
      style={{ transform: `translate(0px, ${props.y}px)` }}
    >
      <p>{props.data.title}</p>
    </li>
  );
});

export default Lesson;
