import React from "react";
import DragAndDrop from "./DragAndDrop";
import Lesson from "./Lesson";

const Module = ({ data, order }) => {
  if (!order) {
    data.lessons.sort((a, b) => a.order - b.order);
    order = data.lessons.map(item => item.id);
  }
  return (
    <li>
      <p>{data.title}</p>
      <ul>
        <DragAndDrop
          defaultOrder={order}
          render={({ order, refs, onMouseDown, dragggingId, dragOffset }) => {
            return order.map((id, i) => {
              const lesson = data.lessons.find(item => item.id === id);

              return (
                <Lesson
                  data={lesson}
                  key={lesson.id}
                  ref={refs[i]}
                  onMouseDown={onMouseDown}
                  y={lesson.id === dragggingId ? dragOffset : 0}
                />
              );
            });
          }}
        />
      </ul>
    </li>
  );
};

export default Module;
