import { FunctionComponent, PropsWithChildren, useState } from "react";
interface IconButtonProps {}

const IconButton: FunctionComponent<IconButtonProps & PropsWithChildren> = (
  props
) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "6px",
        alignItems: "center",
        gap: "17px",
        width: "24px",
        height: "24px",
        borderRadius: "8px",
        background: "#FAFAFA",
        cursor: "pointer",
      }}
    >
      {props.children}
    </div>
  );
};

export default IconButton;
