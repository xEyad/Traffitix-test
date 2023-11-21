import { FunctionComponent, useState } from "react";
import styles from "./MapSettings.module.scss";
import { PUBLIC_URL } from "../../../utils";
interface MapSettingsProps {
  className?: string;
  onOptionChange?: (opt: number) => void;
}

const MapSettings: FunctionComponent<MapSettingsProps> = (props) => {
  const options = ["Congestions", "Radars", "Traffic", "Accidents", "Alerts"];
  const [activeOption, setactiveOption] = useState(0);
  return (
    <div className={`${props.className} ${styles.mapSettings}`}>
      <div className={styles.title}>
        <img src={`${PUBLIC_URL}/assets/layers.svg`} alt="" />
        <span>Map settings</span>
      </div>
      {options.map((option, idx) => (
        <div
          className={styles.option}
          onClick={() => {
            setactiveOption(idx);
            if (props.onOptionChange) props.onOptionChange(idx);
          }}
        >
          <div className={styles.checkbox}>
            <div
              className={activeOption == idx ? styles.checkboxActive : ""}
            ></div>
          </div>
          <span>{option}</span>
          <img src={`${PUBLIC_URL}/assets/layers.svg`} alt="" />
        </div>
      ))}
    </div>
  );
};

export default MapSettings;
