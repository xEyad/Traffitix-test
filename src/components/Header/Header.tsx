import { FunctionComponent, useState } from "react";
import styles from "./Header.module.scss";
import ProfileSelectBtn from "../ProfileSelectBtn/ProfileSelectBtn";
import IconButton from "../IconButton/IconButton";
import WeatherBtn from "../WeatherBtn/WeatherBtn";
interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className={styles.header}>
      <WeatherBtn />
      <IconButton>
        <img src="assets/notification.svg" alt="" />
      </IconButton>
      <IconButton>
        <img src="assets/settings.svg" alt="" />
      </IconButton>
      <ProfileSelectBtn />
    </div>
  );
};

export default Header;
