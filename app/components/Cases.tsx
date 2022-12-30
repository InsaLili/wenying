import React, { useState } from "react";

import CaseUnit from "./CaseUnit";
import MenuItem from "./MenuItem";

const CaseOne = (
  <CaseUnit
    title="案例1-HF化工：问盈辅导HF化工恢复增长，成立合资公司布局日化赛道，实现跨越式发展"
    subtitle="2019-2028年营业收入（单位：亿元）"
    img="/img/case1.png"
  />
);

const CaseTwo = (
  <CaseUnit
    title="夯实管理基础，助力跨境电商业务稳健发展，2024年迈入头部梯队"
    subtitle="2019-2024年营业收入（单位：亿元）"
    img="/img/case2.png"
  />
);

const CaseThree = (
  <CaseUnit
    title="新三板上市公司，秉承长期主义，助力AS股份稳健发展"
    subtitle="2016-2024年营业收入增长（单位：亿元）"
    img="/img/case3.png"
  />
);

const CaseList = [CaseOne, CaseTwo, CaseThree];
const CaseTitles = ["案例1 - HF化工", "案例2 - JY网络", "案例3 - AS股份"];
export const Cases = () => {
  const [current, setCurrent] = useState<number>(0);
  const handleClick = (value: number) => {
    setCurrent(value);
  };

  return (
    <section className="flex items-center justify-center p-4">
      <div className="flex max-w-[1200px]">
        <div className="mr-2 flex flex-col text-sm md:text-xl">
          <MenuItem
            text="成功案例"
            className="border-l-8 border-wy-green text-center"
          />
          {CaseTitles.map((title, index) => (
            <MenuItem
              key={title}
              text={title}
              active={index === current}
              value={index}
              handleClick={handleClick}
            />
          ))}
        </div>
        <div className="border-2 bg-[url('/img/casebg.png')] p-4">
          {CaseList[current]}
          <div className="py-4 text-xs font-bold text-neutral-500">
            数据来源：问盈咨询实施案例
          </div>
        </div>
      </div>
    </section>
  );
};
