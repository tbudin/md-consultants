import Layout from "../components/layout/Layout";
// Meta
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
// Sections
import Hero from "../components/sections/Hero";
import SubHero from "../components/sections/SubHero";
import { FeaturesGrid } from "../components/sections/FeaturesGrid";
import { Split } from "../components/sections/Split";
import { FeaturesList } from "../components/sections/FeaturesList";
import { Faq } from "../components/sections/Faq";
import Cta from "../components/sections/Cta";
// Data
import home from "../lib/home";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <Hero heading={ home.hero.heading } paragraph={ home.hero.paragraph } href={ home.hero.path } text={ home.hero.text } />
      <SubHero heading={ home.subhero.heading } paragraph={ home.subhero.paragraph } />
      <FeaturesGrid heading={ home.featuresgrid.heading } paragraph={ home.featuresgrid.paragraph } features={ home.featuresgrid.features } />
      <Split sections={ home.split } />
      <FeaturesList heading={ home.featureslist.heading } paragraph={ home.featureslist.paragraph } features={ home.featureslist.features } />
      <Faq heading={ home.faq.heading } paragraph={ home.faq.paragraph } questions={ home.faq.questions } />
      <Cta heading={ home.cta.heading } href={ home.cta.path } text={ home.cta.text } />
    </Layout>
  );
}
