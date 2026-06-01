import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { get } from "firebase/database";
import Icon from "../Icon/page";

export default function ToggleSwitch({
  round,
  onChange,
  icon1,
  icon2 = "",
  title1 = "",
  title2 = "",
  type,
  icontype,
  id = "",
  name = "",
  value = "",
  checked = false,
}) {
  const [icon, setIcon] = useState(icon1);
  const [Title, setTitle] = useState(title1);
  const handleChange = (event) => {
    if (onChange && typeof onChange == "function") {
      onChange(event);
      if (icon2) {
        if (icon == icon1) {
          setIcon(icon2);
          setTitle(title2);
        } else if (icon == icon2) {
          setIcon(icon1);
          setTitle(title1);
        }
      }
    }
  };
  const sliderClass = round
    ? `${styles.slider} ${styles.round}`
    : styles.slider;
  return (
    <>
      {icon1 ? (
        <>
          {type == "radio" ? (
            <div className={styles.radioContainer}>
              <input
                type={type}
                onChange={handleChange}
                id={id}
                name={name}
                value={value}
                checked={checked}
              />
              <label htmlFor={id} className={styles.icon} title={Title}>
                <Icon type={icontype} icon={icon} />
              </label>
            </div>
          ) : (
            <>
              <label htmlFor={id} className={styles.icon} title={Title}>
                <input
                  type={type}
                  onChange={handleChange}
                  id={id}
                  name={name}
                  value={value}
                />
                <Icon type={icontype} icon={icon} />
              </label>
            </>
          )}
        </>
      ) : (
        <label className={styles.switch} title={Title}>
          <input
            type={type}
            onChange={handleChange}
            id={id}
            name={name}
            value={value}
          />
          <span className={sliderClass}></span>
        </label>
      )}
    </>
  );
}
