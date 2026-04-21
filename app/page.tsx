
import { HomeFaq } from "@/components/home/home-faq";
import { HomeContribute } from "@/components/home/home-contribute";
import { HomeGuidedPath } from "@/components/home/home-guided-path";
import { HomeHero } from "@/components/home/home-hero";
import { HomeHowItWorks } from "@/components/home/home-how-it-works";
import { HomeStats } from "@/components/home/home-stats";
import { Separator } from "@/components/ui/separator";
import { getAllCollections } from "@/lib/data";
import { getHomePageStats } from "@/lib/site-stats";

export default function HomePage() {
  const collections = getAllCollections();
  const stats = getHomePageStats();

  const guidedPath = [
    "starter-kit-beginner",
    "starter-kit-intermediate",
    "starter-kit-advanced",
  ]
    .map((id) => collections.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <HomeHero />

      <main className="mx-auto max-w-6xl space-y-20 px-4 py-14 sm:px-6 sm:py-20">
        <HomeGuidedPath collections={guidedPath} />

        <Separator />

        <HomeHowItWorks />

        <Separator />

        <section id="stats" className="scroll-mt-24">
          <HomeStats stats={stats} />
        </section>

        <Separator />

        <HomeContribute />

        <section id="faq" className="scroll-mt-24">
          <HomeFaq />
        </section>
      </main>
    </>
  );
}
