import React from "react";
import Lesson from "./Lesson";

const Module = props => {
  return (
    <li>
      <p>{props.data.title}</p>
      {props.data.lessons && (
        <ul>
          {props.data.lessons.map(item => (
            <Lesson data={item} key={item.id} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Module;
