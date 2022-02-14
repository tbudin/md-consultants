import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <section className="hero">
        <div className="heroInner">
          <img className="heroSVG" src="/images/illustrations/globe.svg" alt="globe wireframe"></img>
          <h1 className="heroHeading">
            We assist international organizations auditing global financial institutions.
          </h1>
          <div className="heroContent">
            <p>Internationally recognized third-party for auditing financial institutions.</p>
            <button>Book a 15-min call with us</button>
          </div>
        </div>
      </section>
      <style jsx>{`
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .hero {
          min-height: 100vh;
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
        .heroSVG {
          width: 30%;
          position: absolute;
          z-index: 0;
          bottom: 0;
          right: 0;
          transform: translateX(40%) translateY(80%);
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
          .heroInner {
            min-height: 50vh;
            margin: auto;
            max-width: 1120px;
            padding: 4rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            grid-auto-rows: minmax(120px, auto);
            align-items: center;
          }
          .heroHeading {
            grid-column: 1 / 3;
            grid-row: 1;
          }
          .heroContent {
            grid-column: 2 / 3;
            grid-row: 2;
            margin-left: auto;
            margin-right: 0;
          }
        }
      `}</style>
    </Layout>
  );
}
