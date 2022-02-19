import ButtonLink from "../Button";
import Globe from "../../assets/globe-icon.svg";

type Props = {
  heading: string;
  paragraph: string;
  href: string;
  text: string;
  image: string;
};

export default function Hero({ heading, paragraph, href, text, image }: Props) {
  return (
  <section className="site-section">
    <div className="site-container hero">
      <div className="site-row">
        <div className="row-content">
          <h1 className="text-xl">{ heading }</h1>
          <div className="text-md">
            <p>{ paragraph }</p>
            <ButtonLink type="" href={ href } children={ text }></ButtonLink>
          </div>
        </div>
        <div className="row-illustration">
          <img src={ image} alt={ heading } className="hero-illustration" />
        </div>
      </div>
      <ul className="partners">
        <li><Globe width={64} height={64} /></li>
        <li><Globe width={64} height={64} /></li>
        <li><Globe width={64} height={64} /></li>
        <li><Globe width={64} height={64} /></li>
      </ul>
    </div>
    <style jsx>{`
      .hero {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        text-align: center;
      }
      .hero .row-content {
        max-width: none;
      }
      .hero-illustration {
        width: 100%;
        max-width: 320px;
      }
      .partners {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 1rem 0;
        list-style: none;
      }
      .partners li {
        margin: 0.5rem;
      }
      @media (min-width: 769px) {
        .hero {
          padding-top: 2rem;
          padding-bottom: 2rem;
          text-align: left;
        }
        .hero-illustration {
          width: 100%;
          max-width: 440px;
        }
      }
      @media (min-width: 1025px) {
        .hero {
          padding-top: 4rem;
          padding-bottom: 0;
        }
      }
    `}</style>
  </section>
  )
}