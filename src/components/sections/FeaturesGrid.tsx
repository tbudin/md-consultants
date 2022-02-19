import Globe from "../../assets/globe-icon.svg";

type Props = {
  heading: string;
  paragraph: string;
  features;
};

export function FeaturesGrid({ heading, paragraph, features }: Props) {
  return (
    <section className="site-section">
      <div className="site-container">
        <div className="heading-center">
          <h2>{ heading }</h2>
          {paragraph.length > 0 &&
            <p>{ paragraph }</p>
          }
        </div>
        <ul className="features-grid">
          {features.map((it, i) => (
            <li className="features-grid-item" key={i}>
              <img src={ it.image } width={64} height={64} alt={ heading } />
              <h3 className="features-grid-heading text-md">{ it.heading }</h3>
              <p className="features-grid-content text-sm opacity-70">{ it.paragraph }</p>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
        .features-grid {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3,minmax(0,1fr));
          gap: 1rem;
        }
        .features-grid-item {
          padding: 1.25rem;
          background-color: var(--text-color);
          color: var(--bg-color);
          grid-column: span 3;
        }
        @media (min-width: 769px) {
          .features-grid-item {
            grid-column: span 1;
          }
        }
        `}
      </style>
    </section>
  );
}