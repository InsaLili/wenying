import React from "react";

import { Advantages } from "~/components/Advantages";
import { Business } from "~/components/Business";
import { Client } from "~/components/Client";
import { Description } from "~/components/Description";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { PeopleGallery } from "~/components/PeopleGallery";
import { Service } from "~/components/Service";

export default function Index() {
  return (
    <main className="relative min-h-screen flex-col bg-white sm:flex">
      <Header />
      <Description />
      <Business />
      <Advantages />
      <PeopleGallery />
      <Service />
      <Client />
      <Footer />
    </main>
  );
}
