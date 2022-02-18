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
    <div className="heroInner">
      <h1 className="heroHeading">{ heading }</h1>
      <div className="heroContent">
        <p>{ paragraph }</p>
        <ButtonLink type="" href={ href } children={ text }></ButtonLink>
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
      }
    `}</style>
  </section>
  )
}