"use client";

import Branding from "./branding/page";
import Hero from "./hero/page";
import HeroTransition from "../components/heroTransition";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroTransition>
        <Hero />
      </HeroTransition>
      <Branding />
    </main>
  );
}
