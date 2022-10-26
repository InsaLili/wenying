import React from "react";

export type ServiceDiamondProps = {
  text: string;
};

export default function ServiceDiamond(props: ServiceDiamondProps) {
  const { text } = props;
  return (
    <div className="text-md flex h-36 w-36 items-center justify-center bg-[url('/img/diamond.png')] bg-contain bg-center bg-no-repeat p-8 font-bold text-blue-900">
      {text}
    </div>
  );
}
