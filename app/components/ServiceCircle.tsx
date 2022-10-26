import React from "react";

export type ServiceCircleProps = {
  text: string;
};

export default function ServiceCircle(props: ServiceCircleProps) {
  const { text } = props;
  return (
    <div className="flex h-48 w-48 items-center justify-center bg-[url('/img/circle.png')] bg-cover text-2xl font-bold text-blue-900">
      {text}
    </div>
  );
}
