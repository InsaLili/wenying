import React, { useState } from "react";

import PeopleUnit from "./PeopleUnit";

const peopleList = [
  {
    photo: "/img/nizhen.png",
    name: "倪震",
    title: "问盈咨询创始人",
    description:
      "江西财经大学管理学硕士，近十多年企业战略管理、人力资源管理与数字化转型、品牌管理等领域实战专家，多家企业长期顾问，服务国内70多家大中型企业，辅导企业业绩均实现20+%增长",
  },
  {
    photo: "/img/lixiubin.png",
    name: "李秀斌",
    title: "问盈咨询联合创始人，总经理",
    description:
      "法国里昂大学留法博士，拥有多年世界500强企业战略投资、快消龙头品牌营销实战经验。专注于品牌战略定位、品牌管理体系、产品创意开发、品牌传播策划等。",
  },
  {
    photo: "/img/huangmingmin.png",
    name: "黄明敏",
    title: "问盈咨询联合创始人",
    description:
      "厦门大学MBA硕士，近八年企业战略管理、销售管理、运营管理等领域实战专家，服务国内40多家大中型企业；擅长0-1团队搭建与项目运营，辅导客户实现销售业绩快速突破。",
  },
  {
    photo: "/img/yuelin.png",
    name: "岳琳",
    title: "问盈咨询首席营销顾问",
    description:
      "上海交通大学MBA，服务国内多家化妆品及日化龙头企业，历任市场总监及事业部总经理等职位，拥有近30年品牌管理及市场营销经验，实战经验丰富。",
  },
  {
    photo: "/img/linan.png",
    name: "李楠",
    title: "问盈咨询合伙人",
    description:
      "双博士（新加坡国立大学、德国亚琛工业大学）拥有多年世界500强企业投资、运营从业经验及化工、环保龙头企业战略咨询和地产投资、运营实战经验，擅长企业全周期运营管理、危机管理、品牌营销渠道布局等。",
  },
  {
    photo: "/img/liangzhien.png",
    name: "梁志恩",
    title: "问盈咨询合伙人",
    description:
      "广东外语外贸大学MBA、本科就读于澳大利亚莫纳仕大学，营销管理专业。十年信息技术、科技创新、市场营销等领域项目管理经验。拥有世界500强企业市场拓展、渠道生态建设等实战经验。",
  },
  {
    photo: "/img/tiantian.png",
    name: "田甜",
    title: "问盈咨询合伙人",
    description:
      "北京理工大学工程学士、经济学硕士，美国休斯顿大学访问学者，MBA。拥有国内7年管理及咨询、美国4年创业经历。擅长战略、产业经济、人力资源、公共政策、创新创业生态等领域研究。",
  },
  {
    photo: "/img/liuyonghong.png",
    name: "刘永红",
    title: "问盈咨询智慧工厂专家",
    description:
      "华中科技大学计算机硕士，智能制造与智慧工厂技术专家，超过20年制造业信息化与智慧工厂规划、设计与实施经验，涉及10多个行业。",
  },
];

export const PeopleGallery = () => {
  const [current, setCurrent] = useState(0);
  const handleClick = (direction: string) => {
    const newPosition = direction === "left" ? current - 1 : current + 1;
    setCurrent(newPosition);
  };
  return (
    <section className="mb-8 flex w-full items-center justify-center">
      <div className="flex max-w-[1200px] items-center justify-center">
        <button onClick={() => handleClick("left")} className="w-28">
          <img src="/img/Arrow-Left-icon.png" alt="arrow left" />
        </button>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {peopleList.map((people, index) => (
            <PeopleUnit
              key={index}
              show={index < current + 4 && index >= current}
              photo={people.photo}
              name={people.name}
              title={people.title}
              description={people.description}
            />
          ))}
        </div>
        <button onClick={() => handleClick("right")} className="w-28">
          <img src="/img/Arrow-Right-icon.png" alt="arrow right" />
        </button>
      </div>
    </section>
  );
};
