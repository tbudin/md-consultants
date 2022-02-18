import Layout from "../components/layout/Layout";
// Meta
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
// Sections
import Title from "../components/sections/Title";
import ContactForm from "../components/sections/ContactForm";
// Data
import contact from "../lib/contact";

export default function Index() {
  const url = "/contact-us";
  const title = "Contact us";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <Title heading={ contact.title.heading } paragraph={ contact.title.paragraph } />
      <ContactForm heading="Fill in the form" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi omnis voluptate itaque, est aperiam alias dolorem laboriosam. Quos odit rem molestias et inventore dolorum repudiandae, vel rerum. Dolores, perspiciatis." />
    </Layout>
  );
}