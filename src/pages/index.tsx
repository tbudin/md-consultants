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

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <Hero heading="We assist international organizations auditing global financial institutions." paragraph="Internationally recognized third-party for auditing financial institutions." href="/contact-us" text="Book a call" />
      <SubHero heading="Sub Hero Heading" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <FeaturesGrid heading="Features Grid Heading" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <Split />
      <FeaturesList heading={"Features List Heading"} paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <Faq heading="FAQ heading" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt porro in facere ratione, libero aliquam ad fugiat doloremque eum quos, distinctio illo veritatis esse possimus sunt accusamus id maiores nobis." />
      <Cta heading="CTA heading" href="/contact-us" text="Book a call" />
    </Layout>
  );
}
