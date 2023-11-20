import { FunctionComponent, useState } from "react";
import styles from "./Header.module.scss";
import ProfileSelectBtn from "../ProfileSelectBtn/ProfileSelectBtn";
import IconButton from "../IconButton/IconButton";
import WeatherBtn from "../WeatherBtn/WeatherBtn";
import { PUBLIC_URL } from "../../utils";
interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className={styles.header}>
      <WeatherBtn />
      <IconButton>
        <img src={`${PUBLIC_URL}/assets/notification.svg`} alt="" />
      </IconButton>
      <IconButton>
        <img src={`${PUBLIC_URL}/assets/settings.svg`} alt="" />
      </IconButton>
      <ProfileSelectBtn />
    </div>
  );
};

export default Header;
