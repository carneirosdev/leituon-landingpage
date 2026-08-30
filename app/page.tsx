import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { PlanSection } from "@/components/plan-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-on-primary"
      >
        Saltar para o conteúdo
      </a>

      <SiteHeader />

      <main id="conteudo">
        <Hero />
        <Features />
        <HowItWorks />
        <PlanSection />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}
