import React from "react";

import { Link } from "@remix-run/react";

export const Header = () => (
  <section className="h-[150px] w-full bg-[url('/bg.png')] bg-cover bg-top p-4 sm:h-[300px]">
    <div className="flex">
      <div className="w-36 sm:w-48">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="hidden h-16 flex-1 gap-8 p-4 text-white md:flex">
        <Link className="ml-auto" to="./">
          关于 / About
        </Link>
        <Link to="./">业务 / Business</Link>
        <Link to="./">优势 / Advantages</Link>
        <Link to="./">案例 / Cases</Link>
      </div>
    </div>
    <div className="flex items-center justify-center pt-4 sm:pt-10">
      <img src="./p1.png" alt="问增长之道" />
    </div>
  </section>
);
