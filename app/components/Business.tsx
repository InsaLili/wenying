import React from "react";

import { BusinessUnit } from "./BusinessUnit";

export const Business = () => (
  <section className="relative flex justify-center bg-slate-600 p-8 text-white sm:h-[250px] sm:px-36 sm:py-20">
    {/* <div className="border-b-4 border-wy-green text-lg sm:text-3xl">
      我们的业务
    </div> */}
    <div className="relative max-w-[1200px]">
      <div className="items-self-center grid grid-cols-2 gap-x-8 gap-y-10 justify-self-center sm:grid-cols-3">
        <BusinessUnit
          text1="常年顾问"
          text2="坚持长期主义，以常年顾问为主要服务模式"
          text3="以企业业绩增长为核心，具备八大核心模块咨询能力与经验"
        />
        <BusinessUnit
          text1="品牌孵化"
          text2="自营品牌模式 + 联营品牌模式"
          text3="精选优质赛道，整合资源，赋能企业转型发展"
        />
        <BusinessUnit
          text1="资本运营"
          text2="商业模式优化，资本战略顶层规划"
          text3="借力资本市场，实现跨越式增长"
        />
      </div>
      <div className="absolute right-0 text-xs sm:bottom-[-36px]">
        查看更多 &gt;&gt;
      </div>
    </div>
  </section>
);
