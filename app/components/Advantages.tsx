import React from "react";

import { AdvantageUnit } from "./AdvantageUnit";

export const Advantages = () => (
  <section className="flex w-full flex-col items-center py-8 px-4">
    <div className="flex max-w-[1200px] flex-col items-center">
      <div className="border-b-4 border-wy-green text-lg sm:text-3xl">
        我们的优势
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <AdvantageUnit
          title="一流机构资深顾问"
          description="来源于国内外一流咨询机构，顾问100%拥有硕士及以上学历，并拥有至少5年以上甲乙工作经验"
          logos={["/img/deloitte.png", "/img/accenture.png", "/img/kpmg.png"]}
        />
        <AdvantageUnit
          title="知名企业实战经验"
          description="来源于国内外知名企业，如立白集团、美的集团、顺丰集团、碧桂园、迦蓝集团等公司"
          logos={[
            "/img/liby.png",
            "/img/midea.png",
            "/img/sfexpress.png",
            "/img/biguiyuan.png",
            "/img/jala.png",
          ]}
        />
        <AdvantageUnit
          title="权威专家博士团队"
          description="获得国内外知名大学如中山大学、中国科学技术大学、华南理工大学、暨南大学等的智力支持"
          logos={[
            "/img/zhongshan.png",
            "/img/zhongkeda.png",
            "/img/huanan.png",
            "/img/jinan.png",
          ]}
          columns="grid-cols-4"
        />
        <AdvantageUnit
          title="头部证券与基金机构深度合作"
          description="与国内头部中信证券、中信建投等券商，以及VC、PE机构如经玮中国、华映资本、松禾资本等机构深度合作"
          logos={[
            "/img/zxzj.png",
            "/img/zxjt.png",
            "/img/matrix.png",
            "/img/huaying.png",
            "/img/songhe.png",
          ]}
        />
        <AdvantageUnit
          title="头部律所、会计事务所深度合作"
          description="与国内头部律师事务所、会计师事务所深度合作，赋能客户资本运作与IPO上市，如盈科、正中珠江、大华会计事务所等。"
          logos={["/img/yingke.png", "/img/zhengzhong.png", "/img/dahua.png"]}
        />
      </div>
    </div>
  </section>
);
