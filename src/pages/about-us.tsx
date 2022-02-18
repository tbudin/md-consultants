import Layout from "../components/layout/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { Timeline } from "../components/sections/Timeline";

export default function Index() {
  const url = "/about-us";
  const title = "About us";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <h1>About Us</h1>
      <section className="site-section">
        <div className="site-container">
          <div className="site-row items-start">
            <div className="row-content">
              <h2>Section heading</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi omnis voluptate itaque, est aperiam alias dolorem laboriosam. Quos odit rem molestias et inventore dolorum repudiandae, vel rerum. Dolores, perspiciatis.</p>
            </div>
            <div className="row-illustration">
              <div className="image-wrap">
                <img
                  src="/images/financial-institutions.jpg"
                  alt="Financial institution building over a blue sky"
                  className="imageCover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container">
          <div className="heading-center">
            <h2>Section heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt porro in facere ratione, libero aliquam ad fugiat doloremque eum quos, distinctio illo veritatis esse possimus sunt accusamus id maiores nobis.</p>
          </div>
          <Timeline />
        </div>
      </section>
    </Layout>
  );
}