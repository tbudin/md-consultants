import ButtonLink from "../Button";
import Building from "../../../public/images/illustrations/buildings.svg"

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
          <Building width={500} height={501} alt={"Building illustration"} />
        </div>
      </div>
    </div>
    <style jsx>{`
      .hero {
        display: flex;
        justify-content: flex-start;
        align-content: center;
        text-align: center;
      }
      .hero .row-content {
        max-width: none;
      }
      @media (min-width: 769px) {
        .hero {
          padding-top: 4rem;
          padding-bottom: 4rem;
          text-align: left;
        }
      }
    `}</style>
  </section>
  )
}