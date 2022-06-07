import React, { useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ToolTip.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearTooltip, setSearch } from "../../redux/slices/search/searchSlice";

export const ToolTip = ({ search }) => {
  const dispatch = useDispatch();
  const tooltip = useSelector((state) => state.searchSlice.tooltip);
  const toolTipRef = useRef(null);

  useEffect(() => {
    const handelClickOutside = (event) => {
      if (toolTipRef.current && !event.path.includes(toolTipRef.current)) {
        dispatch(clearTooltip());
      }
    };
    document.body.addEventListener("click", handelClickOutside);
    return () => document.body.removeEventListener("click", handelClickOutside);
  }, []);

  const clickHandler = (name) => {
    dispatch(setSearch(name));
    dispatch(clearTooltip());
  };

  return (
    <>
      {tooltip.length > 0 ? (
        <div ref={toolTipRef} className={styles.suggestionsWrapper}>
          {tooltip.map((name) => (
            <div
              className={styles.name}
              onClick={() => clickHandler(name.value)}
              key={uuidv4()}
            >
              {name.value}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
