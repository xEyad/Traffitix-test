import { FunctionComponent, useState } from "react";
import styles from "./ProfileSelectBtn.module.scss";
import ArrowDownIcon from "./ArrowDownIcon";
import { PUBLIC_URL } from "../../utils";
interface ProfileSelectBtnProps {}

const ProfileSelectBtn: FunctionComponent<ProfileSelectBtnProps> = () => {
  return (
    <div className={styles.theBtn}>
      <div className={styles.profileImg}>
        <div></div>
        <img src={`${PUBLIC_URL}/assets/profileImg.png`} alt="" />
      </div>
      <div className={styles.greeting}>
        <span>Welcome back,</span>
        <span>Adnan</span>
      </div>
      <ArrowDownIcon />
    </div>
  );
};

export default ProfileSelectBtn;
