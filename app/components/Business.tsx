import React from "react";

import { BusinessUnit } from "./BusinessUnit";

export const Business = () => (
  <section className="relative flex justify-center bg-slate-600 p-8 text-white sm:h-[250px] sm:px-36 sm:py-20">
    <div className="relative max-w-[1200px]">
      <div className="items-self-center grid grid-cols-2 gap-x-8 gap-y-10 justify-self-center sm:grid-cols-3">
        <BusinessUnit
          text1="管理咨询"
          text2="Management Consulting"
          text3="以企业业绩增长为核心，具备八大核心模块咨询能力与经验"
        />
        <BusinessUnit
          text1="品牌孵化"
          text2="Brand Incubation"
          text3="整合资源，共同投资打造品牌，赋能企业转型发展"
        />
        <BusinessUnit
          text1="股权投资"
          text2="Equity Investment"
          text3="链接资源，股权投资，实现企业突破式发展"
        />
      </div>
      <div className="absolute right-0 text-xs sm:bottom-[-36px]">
        查看更多 &gt;&gt;
      </div>
    </div>
  </section>
);
