import ButtonLink from "../Button";
import { Partners } from "./Partners"

type Props = {
  heading: string;
  paragraph: string;
  href: string;
  text: string;
  type: string;
  image: string;
  partners;
};

export default function Hero({ heading, paragraph, href, text, type, image, partners }: Props) {
  return (
  <section className="site-section">
    <div className="site-container hero">
      <div className="site-row">
        <div className="row-content">
          <h1 className="text-xl">{ heading }</h1>
          <div className="text-md mb-sm">
            <p>{ paragraph }</p>
            <ButtonLink color="" href={ href } children={ text } type={ type }></ButtonLink>
          </div>
        </div>
        <div className="row-illustration">
          <img src={ image} alt={ heading } className="hero-illustration" />
        </div>
      </div>
      <Partners partners={ partners } />
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
        margin-bottom: 2rem;
      }
      .hero-illustration {
        width: 100%;
        max-width: 320px;
      }
      @media (min-width: 769px) {
        .hero {
          text-align: left;
        }
        .hero-illustration {
          width: 100%;
          max-width: 440px;
        }
      }
      @media (min-width: 1025px) {
        .hero {
          padding-top: 2rem;
          padding-bottom: 0;
        }
      }
    `}</style>
  </section>
  )
}