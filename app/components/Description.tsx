import React from "react";

import { Item } from "./Item";

export const Description = () => (
  <section className="flex h-[300px] w-full  flex-col items-center justify-center gap-4 bg-[url('/p2.png')] bg-cover bg-top p-4 sm:h-[400px]">
    <div className="text-lg font-bold text-blue-900 sm:text-4xl">
      帮助企业可持续增长的创新型咨询公司
    </div>
    <div className="text-md font-bold sm:mb-10 sm:text-xl">
      聚焦业绩增长 常年顾问模式
    </div>
    <div className="grid grid-cols-3 gap-4 p-2 sm:grid-cols-6">
      <Item img="./building.png" text1="80+" text2="服务企业数量" />
      <Item img="./grow.png" text1="200%+" text2="客户业绩增长" />
      <Item img="./people.png" text1="95%+" text2="咨询项目续单率" />
      <Item img="./group.png" text1="15+" text2="实战资深顾问" />
      <Item img="./people.png" text1="100+" text2="专家学者资源" />
      <Item img="./building.png" text1="20+" text2="常年顾问企业" />
    </div>
  </section>
);
