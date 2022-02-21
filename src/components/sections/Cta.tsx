import ButtonLink from "../Button";
import Envelop from "../../assets/envelop-icon.svg"

type Props = {
  heading: string;
  href: string;
  text: string;
};

export default function Cta({ heading, href, text }: Props) {
  return (
  <section className="site-section">
    <div className="site-container cta">
      <div className="site-row items-center cta-inner">
        <h2 className="row-content">{ heading }</h2>
        <div className="row-illustration">
          <ButtonLink type="white" href={ href } children={ text }></ButtonLink>
        </div>
      </div>
      <div className="cta-icon">
        <Envelop />
      </div>
    </div>
    <style jsx>{`
    .cta {
      padding: 4rem 3rem;
      background-color: var(--text-color);
      color: var(--bg-color);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cta-inner {
      max-width: 720px;
      margin: 0 auto;
    }
    .cta-icon {
      position: absolute;
      z-index: 1;
      left: 0;
      bottom: 0;
      transform: rotateZ(45deg) translateY(40%) translateX(-25%);
      opacity: 50%;
      width: 320px;
    }
    .cta .row-content,
    .cta .row-illustration {
      z-index: 1;
    }
    @media (min-width: 769px) {
      .cta {
        text-align: left;
      }
    }
    `}</style>
  </section>
  )
}