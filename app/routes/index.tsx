import React from "react";

import { json, LoaderArgs } from "@remix-run/node";
import UAParser from "ua-parser-js";

import { Advantages } from "~/components/Advantages";
import { Business } from "~/components/Business";
import { Cases } from "~/components/Cases";
import { Client } from "~/components/Client";
import { Description } from "~/components/Description";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { PeopleGallery } from "~/components/PeopleGallery";
import { Service } from "~/components/Service";

export async function loader({ request }: LoaderArgs) {
  let userAgent;
  if (request) {
    userAgent = request.headers.get("user-agent");
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent || "");
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";

  return json({
    deviceType,
  });
}

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
      <Cases />
      <Footer />
    </main>
  );
}
