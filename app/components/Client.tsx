import React from "react";

export const Client = () => (
  <section className="flex w-full flex-col items-center p-8 text-neutral-500">
    <div className="flex max-w-[1200px] flex-col items-center">
      <div className="mb-8 border-b-4 border-wy-green text-lg sm:text-3xl">
        我们的客户
      </div>
      <div className="mb-8">
        累计服务企业超100+ / 覆盖10+行业领域 / 拥有一批⻓期战略合作伙伴 按月支付
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <img src="/img/clients.png" alt="clients" />
        <div className="flex flex-col items-center justify-center bg-slate-600 p-2 text-white md:p-8">
          <div className="mb-8 text-xl">客户评价</div>
          <img src="/img/review.png" alt="review" />
        </div>
      </div>
    </div>
  </section>
);
