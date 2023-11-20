import { FunctionComponent, useState } from "react";
import styles from "./MapHeader.module.scss";
import DropdownBtn from "./DorpdownBtn";
import { PUBLIC_URL } from "../../../utils";
interface MapHeaderProps {}

const MapHeader: FunctionComponent<MapHeaderProps> = () => {
  return (
    <div className={styles.MapHeader}>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <img src={`${PUBLIC_URL}/assets/filter.svg`} alt="" />
      </div>
      <DropdownBtn label="Date" />
      <DropdownBtn label="Status" />
      <DropdownBtn label="Confidence Score" />
      <DropdownBtn label="Area" />
      <DropdownBtn label="Priority" />
      <DropdownBtn label="Violation type" />
    </div>
  );
};

export default MapHeader;
