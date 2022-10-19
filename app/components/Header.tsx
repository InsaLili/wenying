import React from "react";

import { Link } from "@remix-run/react";

export const Header = () => (
  <section className="h-[300px] w-full bg-[url('/bg.png')] bg-cover bg-top p-4">
    <div className="flex">
      <div className="w-48">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="flex h-16 flex-1 gap-8 p-4 text-white">
        <Link className="ml-auto" to="./">
          关于 / About
        </Link>
        <Link to="./">业务 / Business</Link>
        <Link to="./">优势 / Advantages</Link>
        <Link to="./">案例 / Cases</Link>
      </div>
    </div>
    <div className="flex items-center justify-center pt-10">
      <img src="./p1.png" alt="问增长之道" />
    </div>
  </section>
);
