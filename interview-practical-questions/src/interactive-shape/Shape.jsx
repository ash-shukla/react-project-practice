import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";

const BOX_DATA = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

const Shape = () => {
  const data = useMemo(() => BOX_DATA.flat(Infinity), [BOX_DATA]);
  const [selected, setSelected] = useState(new Set());
  const [unloading, setUnloading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (selected.size >= countOfVisibleBoxes) {
      unload();
    }
  }, [selected]);

  const countOfVisibleBoxes = useMemo(() => {
    return data.reduce((acc, box) => {
      if (box === 1) {
        acc += 1;
      }
      return acc;
    }, 0);
  });

  const unload = () => {
    setUnloading(true);
    const keys = Array.from(selected.keys());
    const removeNextKey = () => {
      if (keys.length) {
        const currentKey = keys.shift();
        setSelected((prev) => {
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey);
          return updatedKeys;
        });
        timerRef.current = setTimeout(removeNextKey, 500);
      } else {
        setUnloading(false);
        clearTimeout(timerRef.current);
      }
    };
    timerRef.current = setTimeout(removeNextKey, 100);
  };

  const handleClick = (e) => {
    const index = e.target.getAttribute("data-index");
    const status = e.target.getAttribute("data-status");
    if (
      index === null ||
      status === "hidden" ||
      selected.has(index) ||
      unloading
    ) {
      return;
    }
    setSelected((prev) => {
      return new Set(prev.add(index));
    });
  };
  return (
    <div className="boxes" onClick={handleClick}>
      {data.map((box, index) => {
        const status = box === 1 ? "visible" : "hidden";
        const isSelected = selected.has(index.toString());
        return (
          <div
            key={`${box}-${index}`}
            data-index={index}
            data-status={status}
            className={classNames("box", status, isSelected && "selected")}
          />
        );
      })}
    </div>
  );
};

export default Shape;
