import React from "react";

import clsx from "clsx";

export type MenuItemProps = {
  text: string;
  className?: string;
  active?: boolean;
  value?: number;
  handleClick?: (value: number) => void;
};

export default function MenuItem(props: MenuItemProps) {
  const {
    className,
    text,
    active = false,
    value = 0,
    handleClick = () => {},
  } = props;
  return (
    <button
      key={text}
      className={clsx(
        "w-28 py-4 md:w-60 md:px-8",
        active ? "bg-wy-green" : "bg-gray-200",
        className
      )}
      onClick={() => handleClick(value)}
    >
      {text}
    </button>
  );
}
