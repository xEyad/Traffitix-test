import { FunctionComponent, PropsWithChildren, useState } from "react";
import styles from "./WeatherBtn.module.scss";
import { PUBLIC_URL } from "../../utils";
interface WeatherBtnProps {}

const WeatherBtn: FunctionComponent<WeatherBtnProps> = () => {
  return (
    <div className={styles.WeatherBtn}>
      <img src={`${PUBLIC_URL}/assets/weather.svg`} alt="" />
      <div>
        <span>18* C</span>
        <span>Dubai</span>
      </div>
    </div>
  );
};

export default WeatherBtn;
