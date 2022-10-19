import React from "react";

export type ItemProps = {
  img: string;
  text1: string;
  text2: string;
};

export const Item = (props: ItemProps) => {
  const { img, text1, text2 } = props;
  return (
    <div className="flex w-24 flex-col items-center text-xs font-bold sm:w-36 sm:text-sm">
      <img src={img} alt="company" className="h-8 sm:h-14" />
      <div>{text1}</div>
      <div>{text2}</div>
    </div>
  );
};
