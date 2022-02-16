import Layout from "../components/layout/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import ButtonLink from "../components/Button";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <section className="hero">
        <div className="heroInner">
          <h1 className="heroHeading">
            We assist international organizations auditing global financial institutions.
          </h1>
          <div className="heroContent">
            <p>Internationally recognized third-party for auditing financial institutions.</p>
            <ButtonLink type="" href="/" children={"Book a 15-min call"}></ButtonLink>
          </div>
        </div>
      </section>
      <section className="site-section subHero">
        <div className="subHero-img image-wrap">
          <img
            src="/images/financial-institutions.jpg"
            alt="Financial institution building over a blue sky"
            className="imageCover"
          />
        </div>
        <h2 className="subHero-heading">Section heading</h2>
        <p className="subHero-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere officia hic perspiciatis fugiat asperiores dolorem, velit eaque optio temporibus totam mollitia cum consequatur delectus voluptatem necessitatibus, accusamus accusantium vero quasi.</p>
      </section>
      <section className="site-section">
        <div className="site-container">
          <div className="site-row">
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
          <div className="site-row">
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
          <div className="site-row site-cta">
            <h2 className="row-content">SectionHeading</h2>
            <div className="row-illustration">
              <ButtonLink type="white" href="/" children={"Book a 15-min call"}></ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .hero {
          display: flex;
          justify-content: center;
          align-content: center;
        }
        .heroInner {
          position: relative;
          padding: 2rem;
          margin: 2rem;
        }
        .heroHeading {
          font-size: 3rem;
          z-index: 1;
          text-align: center;
        }
        .heroContent {
          font-size: 1.25rem;
          max-width: 65ch;
          margin-left: 0;
          margin-right: auto;
          z-index: 1;
        }

        @media (min-width: 1025px) {
          .heroInner {
            min-height: 80vh;
            margin: auto;
            max-width: 1120px;
            padding: 4rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            grid-auto-rows: minmax(120px, auto);
            align-items: center;
          }
          .heroHeading {
            grid-column: 1 / 4;
            grid-row: 1;
          }
          .heroContent {
            grid-column: 2 / 4;
            grid-row: 2;
            margin-left: auto;
            margin-right: 0;
          }
          .subHero {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 1rem;
            grid-auto-rows: minmax(120px, auto);
          }
          .subHero-heading {
            grid-column: 1 / 4;
            grid-row: 1;
          }
          .subHero-img {
            grid-column: 3 / 5;
            grid-row: 1 / 4;
          }
          .subHero-content {
            grid-column: 5 / 7;
            grid-row: 3;
          }
        }
      `}</style>
    </Layout>
  );
}
