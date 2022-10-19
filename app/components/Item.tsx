import React from "react";

export type ItemProps = {
  img: string;
  text1: string;
  text2: string;
};

export const Item = (props: ItemProps) => {
  const { img, text1, text2 } = props;
  return (
    <div className="flex w-36 flex-col items-center text-sm font-bold">
      <img src={img} alt="company" className="h-14" />
      <div>{text1}</div>
      <div>{text2}</div>
    </div>
  );
};
