type Props = {
  heading: string;
  paragraph: string;
  image: string;
};

export default function SubHero({ heading, paragraph, image }: Props) {
  return (
    <section className="site-section">
      <div className="site-container subHero">
        <h2 className="subHero-heading">{ heading }</h2>
        <div className="subHero-img image-wrap">
          <img
            src={ image }
            alt={ heading }
            className="imageCover"
          />
        </div>
        <p className="subHero-content">{ paragraph }</p>
      </div>
      <style jsx>{`
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
    </section>
  )
}