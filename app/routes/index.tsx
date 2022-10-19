import React from "react";

import { Description } from "~/components/Description";
import { Header } from "~/components/Header";

export default function Index() {
  return (
    <main className="relative min-h-screen flex-col bg-white sm:flex">
      <Header />
      <Description />
    </main>
  );
}
