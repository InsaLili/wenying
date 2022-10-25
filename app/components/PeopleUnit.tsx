import React from "react";

export type PeopleUnitProps = {
  name: string;
  title: string;
  description: string;
  photo: string;
};

export default function PeopleUnit(props: PeopleUnitProps) {
  const { name, title, description, photo } = props;
  return (
    <div className="h-[500px] bg-neutral-400 py-8 px-4 text-white sm:h-[460px]">
      <div className="m-auto h-[150px] w-36">
        <img src={photo} alt={name} className="w-full" />
      </div>
      <div className="mt-6 text-center text-xl font-bold">{name}</div>
      <div className="mb-6 text-center">{title}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
}
