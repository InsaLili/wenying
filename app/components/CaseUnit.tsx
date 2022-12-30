import React from "react";

export type CaseUnitProps = {
  title: string;
  subtitle: string;
  img: string;
};

export default function CaseUnit(props: CaseUnitProps) {
  const { title, subtitle, img } = props;
  return (
    <>
      <div className="text-md mb-4 text-center font-bold text-neutral-600 md:text-xl">
        {title}
      </div>
      <div className="md:text-md mb-8 text-center text-xs font-bold text-neutral-600">
        {subtitle}
      </div>
      <img src={img} alt="title" />
    </>
  );
}
