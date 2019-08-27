import React from "react";

const DragAndDrop = ({ defaultOrder, render }) => {
  const boundingRects = [];

  const [order, setOrder] = React.useState(defaultOrder);
  const [newOrder, setNewOrder] = React.useState();
  const [startingClientY, setStartingClientY] = React.useState(0);

  // the dragged element
  const [dragggingId, setDraggingId] = React.useState();
  // the drag amount in pixels
  const [dragOffset, setDragOffset] = React.useState(0);
  // the boudingRects y stored when the drag starts
  const [fixedYs, setFixedYs] = React.useState([]);

  const calculateNewOrder = ({ draggingPixels, draggedId }) => {
    const newY = fixedYs.map(item => ({
      id: item.id,
      y: item.id === draggedId ? item.y + draggingPixels : item.y
    }));
    newY.sort((a, b) => a.y - b.y);
    return newY.map(item => item.id);
  };

  React.useEffect(() => {
    if (!dragOffset || !dragggingId) {
      return;
    }
    setNewOrder(calculateNewOrder({ draggingPixels: dragOffset, draggedId: dragggingId }));
  }, [dragOffset, dragggingId]);

  // store the drag amount (if the drag has been started)
  React.useEffect(() => {
    const onMouseMove = ({ clientY }) => {
      if (!dragggingId) {
        return;
      }
      const elementY = fixedYs.find(item => item.id === dragggingId).y;
      const startingYRelativeToDraggingElement = elementY - startingClientY;
      setDragOffset(clientY - elementY + startingYRelativeToDraggingElement);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [dragggingId]);

  // the drag&drop end
  React.useEffect(() => {
    const onMouseUp = () => {
      if (newOrder) {
        setOrder(newOrder);
      }
      setDraggingId(null);
      setDragOffset(0);
      setNewOrder(null);
      setFixedYs([]);
      setStartingClientY(0);
      // TODO: the dragp&drop must be cancelled on window resize
    };
    window.addEventListener("mouseup", onMouseUp);
    return () => window.removeEventListener("mouseup", onMouseUp);
  }, [dragggingId, newOrder]);

  const onMouseDown = ({ currentTarget, clientY }) => {
    setStartingClientY(clientY);
    setDraggingId(currentTarget.dataset.id);
    // the boundingRects must not be recalculated until the drag&drop ends
    const ys = boundingRects.map(item => ({
      id: item.id,
      y: item.boundingRect.y
    }));
    setFixedYs(ys);
  };

  // refs creation
  const refs = [];
  for (let n = order.length, i = 0; i < n; i++) {
    refs.push(element => {
      // TODO: they must be recalculated on every window resize
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
