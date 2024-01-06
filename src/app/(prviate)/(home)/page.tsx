import { PageLayout } from "@/components/layouts/page_layout";
import { HeroSection } from "./components/hero_section";
import { QualitySection } from "./components/quality_section";

export default function Home() {
  return (
    <PageLayout className="text-black-500">
      <HeroSection />
      <QualitySection />
    </PageLayout>
  );
}
