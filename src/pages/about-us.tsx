import Layout from "../components/layout/Layout";
// Meta
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
// Sections
import Title from "../components/sections/Title";
import { Split } from "../components/sections/Split";
import { Timeline } from "../components/sections/Timeline";
// Data
import about from "../lib/about";

export default function Index() {
  const url = "/about-us";
  const title = "About us";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <Title heading={ about.title.heading } paragraph={ about.title.paragraph } />
      <Split sections={ about.split } />
      <Timeline heading={ about.timeline.heading } paragraph={ about.timeline.paragraph } steps={ about.timeline.steps } />
    </Layout>
  );
}