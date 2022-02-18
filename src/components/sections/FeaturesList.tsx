type Props = {
  heading: string;
  paragraph: string;
  features;
};
export function FeaturesList({ heading, paragraph, features }: Props) {
  return (
    <section className="site-section">
    <div className="site-container">
      <div className="site-row items-start">
      <div className="row-content">
          <h2>{ heading }</h2>
          <p>{ paragraph }</p>
        </div>
        <div className="row-illustration">
        <ul className="features-list">
          {features.map((it, i) => (
            <li className="features-list-item" key={i}>
              <h3 className="features-list-heading text-md">{ it.heading }</h3>
              <p className="features-list-content text-sm opacity-70">{ it.paragraph }</p>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
    <style jsx>
      {`
      .features-list {
        max-width: 720px;
        margin: 4rem auto 0;
        list-style: none;
        padding: 0;
      }
      .features-list-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 1rem 0 3rem 0;
        border-top: 1px solid var(--text-color);
        text-align: left;
      }
      .features-list-item:last-of-type {
        padding-bottom: 0;
      }
      @media (min-width: 769px) {
        .features-list {
          margin: 0 auto;
        }
      }
      @media (min-width: 1025px) {
        .features-grid-item {
          flex-direction: row;
        }
        .features-list-heading {
          width: 40%;
          padding-right: 1rem;
        }
        .features-list-content {
          width: 60%;
        }
      }
      `}
    </style>
    </section>
  );
}