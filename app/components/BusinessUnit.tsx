import React from "react";

export type BusinessUnitProps = {
  text1: string;
  text2: string;
  text3: string;
};

export const BusinessUnit = (props: BusinessUnitProps) => {
  const { text1, text2, text3 } = props;
  return (
    <div className="relative w-36">
      <img
        src="./corner.png"
        alt="corner"
        className="absolute left-[-10px] top-[-6px] w-4"
      />
      <div>{text1}</div>
      <div className="text-xs">{text2}</div>
      <br />
      <div className="text-xs">{text3}</div>
    </div>
  );
};
