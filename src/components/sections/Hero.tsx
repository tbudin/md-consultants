import ButtonLink from "../Button";

type Props = {
  heading: string;
  paragraph: string;
  href: string;
  text: string;
};

export default function Hero({ heading, paragraph, href, text }: Props) {
  return (
  <section className="hero">
    <div className="site-container">
      <div className="heroInner">
        <h1 className="heroHeading">{ heading }</h1>
        <div className="heroContent">
          <p>{ paragraph }</p>
          <ButtonLink type="" href={ href } children={ text }></ButtonLink>
        </div>
      </div>
    </div>
    <style jsx>{`
      .hero {
        display: flex;
        justify-content: center;
        align-content: center;
        min-height: 80vh;
      }
      .heroInner {
        position: relative;
        padding: 2rem 0;
        text-align: center;
        width: 100%;
      }
      .heroHeading {
        font-size: 3rem;
        z-index: 1;
      }
      .heroContent {
        font-size: 1.25rem;
        max-width: 65ch;
        margin-left: 0;
        margin-right: auto;
        z-index: 1;
      }
      @media (min-width: 769px) {
        .heroInner {
          padding: 4rem 0;
          text-align: left;
        }
      }
    `}</style>
  </section>
  )
}