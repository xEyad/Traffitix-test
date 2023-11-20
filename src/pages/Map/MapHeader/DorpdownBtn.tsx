import { FunctionComponent, useState } from "react";
interface DropdownBtnProps {
  label: string;
}

const DropdownBtn: FunctionComponent<DropdownBtnProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        padding: "8px",
        background: "#F4F7FB",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          color: "#646E82",
          fontFamily: "Roboto",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "125%",
        }}
      >
        {props.label}
      </span>
      <img src="assets/menu-icon.svg" alt="" />
    </div>
  );
};

export default DropdownBtn;
