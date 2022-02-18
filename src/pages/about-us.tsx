import Layout from "../components/layout/Layout";
// Meta
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
// Sections
import Title from "../components/sections/Title";
import { Split } from "../components/sections/Split";
import { Timeline } from "../components/sections/Timeline";

export default function Index() {
  const url = "/about-us";
  const title = "About us";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <Title heading="About us" />
      <Split />
      <Timeline heading="Timeline Heading" paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis voluptate et nemo, repudiandae ea explicabo odio, reprehenderit suscipit optio aperiam eaque possimus culpa a delectus tempora placeat inventore porro." />
    </Layout>
  );
}