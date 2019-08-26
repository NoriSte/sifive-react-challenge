import React from "react";

const DragAndDrop = ({ defaultOrder, render }) => {
  const order = defaultOrder;
  const boundingRects = [];

  const [dragggingId, setDraggingIg] = React.useState();
  const [dragOffset, setDragOffset] = React.useState(0);

  React.useEffect(() => {
    const onMouseMove = ({ clientY }) => {
      if (!dragggingId) {
        return;
      }
      const rect = boundingRects.find(item => item.id === dragggingId).boundingRect;
      setDragOffset(clientY - rect.y);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [dragggingId]);

  React.useEffect(() => {
    const onMouseUp = () => {
      setDraggingIg(null);
      setDragOffset(0);
    };
    window.addEventListener("mouseup", onMouseUp);
    return () => window.removeEventListener("mouseup", onMouseUp);
  }, [dragggingId]);

  const onMouseDown = ({ currentTarget }) => {
    setDraggingIg(currentTarget.dataset.id);
  };

  const refs = [];
  for (let n = order.length, i = 0; i < n; i++) {
    refs.push(element => {
      // it must be recalculated on every window resize
      if (element) {
        boundingRects.push({
          id: element.dataset.id,
          boundingRect: element.getBoundingClientRect()
        });
      }
    });
  }

  return render({ order, refs, onMouseDown, dragggingId, dragOffset });
};

export default DragAndDrop;
