import ButtonLink from "../Button";
import Building from "../../../public/images/illustrations/buildings.svg";
import Globe from "../../assets/globe-icon.svg";

type Props = {
  heading: string;
  paragraph: string;
  href: string;
  text: string;
};

export default function Hero({ heading, paragraph, href, text }: Props) {
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
          <Building alt={"Building illustration"} />
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