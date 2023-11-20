import { FunctionComponent, useState } from "react";
import styles from "./MapHeader.module.scss";
import DropdownBtn from "./DorpdownBtn";
interface MapHeaderProps {}

const MapHeader: FunctionComponent<MapHeaderProps> = () => {
  return (
    <div className={styles.MapHeader}>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <img src="assets/filter.svg" alt="" />
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
