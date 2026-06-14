"use client";

import React, {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import styles from "../NavBar.module.scss";

export default function SubNav({
  children,
  name,
  mobileBreakpoint,
  onExpandedRowsChange,
}) {
  const dropdownId = useId();
  const [screenWidth, setScreenWidth] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const [isDesktopLineGapVisible, setDesktopLineGapVisible] = useState(false);
  const dropdownRef = useRef(null);

  const childrenArray = React.Children.toArray(children);
  const dropdownRowCount = childrenArray.length + 1;

  const closeDropDown = useCallback(() => {
    setToggled(false);
    onExpandedRowsChange?.(dropdownId, 0);
  }, [dropdownId, onExpandedRowsChange]);

  const toggleDropDown = () => {
    const next = !isToggled;
    setToggled(next);

    if (next) {
      setDesktopLineGapVisible(true);
      onExpandedRowsChange?.(dropdownId, childrenArray.length);
    } else {
      onExpandedRowsChange?.(dropdownId, 0);
    }
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
    if (
      mobileBreakpoint !== null &&
      screenWidth > mobileBreakpoint &&
      isToggled
    ) {
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
        mobileBreakpoint !== null &&
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

  useEffect(() => {
    const navHolder = dropdownRef.current?.closest(`.${styles.navHolder}`);

    if (!navHolder) {
      return;
    }

    if (mobileBreakpoint === null || screenWidth <= mobileBreakpoint) {
      navHolder.style.removeProperty("--desktop-dropdown-line-mask");
      return;
    }

    const visibleLineGaps = Array.from(
      navHolder.querySelectorAll("[data-desktop-line-gap]"),
    );

    if (visibleLineGaps.length === 0) {
      navHolder.style.removeProperty("--desktop-dropdown-line-mask");
      return;
    }

    const navRect = navHolder.getBoundingClientRect();
    const maskStops = visibleLineGaps
      .map((dropdown) => dropdown.getBoundingClientRect())
      .sort((a, b) => a.left - b.left)
      .flatMap((dropdownRect) => {
        const start = `${dropdownRect.left - navRect.left}px`;
        const end = `${dropdownRect.right - navRect.left}px`;

        return [`#000 ${start}`, `transparent ${start}`, `transparent ${end}`, `#000 ${end}`];
      });

    navHolder.style.setProperty(
      "--desktop-dropdown-line-mask",
      `linear-gradient(to right, #000 0, ${maskStops.join(", ")}, #000 100%)`,
    );
  }, [isDesktopLineGapVisible, isToggled, mobileBreakpoint, screenWidth]);

  const handleTransitionEnd = (event) => {
    if (
      event.target === event.currentTarget &&
      event.propertyName === "height" &&
      !isToggled
    ) {
      setDesktopLineGapVisible(false);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`${styles.itemDropDown} ${isToggled ? styles.active : ""}`}
      style={{ "--dropdown-row-count": dropdownRowCount }}
      data-desktop-line-gap={isDesktopLineGapVisible ? "" : undefined}
      onTransitionEnd={handleTransitionEnd}
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
