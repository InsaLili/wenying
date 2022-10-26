import React from "react";

import ServiceCircle from "./ServiceCircle";
import ServiceDiamond from "./ServiceDiamond";

export const Service = () => (
  <section className="flex w-full flex-col items-center justify-center overflow-hidden bg-[url('/img/bg-service.png')] bg-cover bg-top p-6 md:h-[450px]">
    <div className="text-md mb-8 text-center font-bold text-neutral-600 md:text-2xl">
      以常年顾问服务为核心，全方位赋能客户业绩增长能客户业绩增⻓
    </div>
    <div className="mb-10 ">
      <div className="hidden flex-col items-center justify-center gap-4 md:flex md:flex-row">
        <ServiceCircle text="常年陪跑" />
        <ServiceDiamond text="保姆式服务，实现客户业绩增⻓。" />
        <ServiceCircle text="业绩对赌" />
        <ServiceDiamond text="保障服务质量， 降低客户⻛险。" />
        <ServiceCircle text="按季支付" />
      </div>
      <div className="md:hidden">
        <div>常年陪跑</div>
        <div>保姆式服务，实现客户业绩增⻓。</div>
        <div>业绩对赌</div>
        <div>保障服务质量， 降低客户⻛险。</div>
        <div>按季支付</div>
      </div>
    </div>
    <div className="flex h-12 w-[1000px] items-center justify-center bg-[url('/img/trapezoid.png')] bg-contain bg-center bg-no-repeat font-bold text-white">
      企业常年顾问
    </div>
  </section>
);
