import React from "react";

import clsx from "clsx";

export type AdvantageUnitProps = {
  title: string;
  description: string;
  logos: string[];
  columns?: string;
};

export const AdvantageUnit = (props: AdvantageUnitProps) => {
  const { title, description, logos, columns = "grid-cols-3" } = props;
  return (
    <div className="flex flex-col items-center py-8 px-4 shadow-lg">
      <div className="text-md h-16 font-bold text-blue-900 md:text-lg">
        {title}
      </div>
      <div className="md:text-md h-36 text-sm sm:px-6">{description}</div>
      <div className={clsx("grid gap-4", columns)}>
        {logos.map((url) => (
          <img src={url} alt={url} />
        ))}
      </div>
    </div>
  );
};
