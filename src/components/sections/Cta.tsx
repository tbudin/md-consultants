import ButtonLink from "../Button";

type Props = {
  heading: string;
  href: string;
  text: string;
};

export default function Cta({ heading, href, text }: Props) {
  return (
  <section className="site-section">
    <div className="site-container">
      <div className="site-row items-center site-cta">
        <h2 className="row-content">{ heading }</h2>
        <div className="row-illustration">
          <ButtonLink type="white" href={ href } children={ text }></ButtonLink>
        </div>
      </div>
    </div>
  </section>
  )
}