import { FunctionComponent, PropsWithChildren, useState } from "react";
interface IconButtonProps {}

const IconButton: FunctionComponent<IconButtonProps & PropsWithChildren> = (
  props
) => {
  return (
    <div
      title="Repo Github"
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
      <a
        href="https://github.com/xEyad/Traffitix-test"
        target="_blank"
        style={{ color: "inherit", textDecoration: "unset" }}
      >
        {props.children}
      </a>
    </div>
  );
};

export default IconButton;
