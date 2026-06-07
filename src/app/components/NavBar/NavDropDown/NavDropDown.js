"use client";

import React, {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import styles from "../NavBar.module.scss";

export default function SubNav({ children, name, onExpandedRowsChange }) {
  const mobileBreakpoint = 768;
  const dropdownId = useId();
  const [screenWidth, setScreenWidth] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const dropdownRef = useRef(null);

  const childrenArray = React.Children.toArray(children);
  const dropdownRowCount = childrenArray.length + 1;

  const closeDropDown = useCallback(() => {
    onExpandedRowsChange?.(dropdownId, 0);
    setToggled(false);
  }, [dropdownId, onExpandedRowsChange]);

  const toggleDropDown = () => {
    const next = !isToggled;
    setToggled(next);
    onExpandedRowsChange?.(dropdownId, next ? childrenArray.length : 0);
  };

  useEffect(() => {
    if (isToggled) {
      onExpandedRowsChange?.(dropdownId, childrenArray.length);
    }
  }, [childrenArray.length, dropdownId, isToggled, onExpandedRowsChange]);

  useEffect(() => {
    return () => onExpandedRowsChange?.(dropdownId, 0);
  }, [dropdownId, onExpandedRowsChange]);

  const dropDownClick = () => {
    if (screenWidth > mobileBreakpoint && isToggled) {
      closeDropDown();
    }
  };

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);

    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        screenWidth > mobileBreakpoint &&
        isToggled &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropDown();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [screenWidth, mobileBreakpoint, isToggled, closeDropDown]);

  return (
    <div
      ref={dropdownRef}
      className={`${styles.itemDropDown} ${isToggled ? styles.active : ""}`}
      style={{ "--dropdown-row-count": dropdownRowCount }}
    >
      <div onClick={toggleDropDown} className={styles.item}>
        {name}
        <div
          className={`${styles.arrowContainer} ${
            isToggled ? styles.active : ""
          }`}
        >
          <span className={styles.arrow}></span>
        </div>
      </div>
      <div
        className={`${styles.items} ${isToggled ? styles.active : ""}`}
        onClick={dropDownClick}
      >
        {childrenArray}
      </div>
    </div>
  );
}
