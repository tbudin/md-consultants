import Globe from "../../assets/globe-icon.svg";
import Analytics from "../../assets/analytics-icon.svg";
import Buildings from "../../assets/buildings-icon.svg";

type Props = {
  heading: string;
  paragraph: string;
};

export function FeaturesGrid({ heading, paragraph }: Props) {
  return (
    <section className="site-section">
      <div className="site-container">
        <div className="heading-center">
          <h2>{ heading }</h2>
          <p>{ paragraph }</p>
        </div>
        <ul className="features-grid">
          <li className="features-grid-item">
            <Globe width={64} height={64} />
            <h3 className="features-grid-heading text-md">Feature heading 1</h3>
            <p className="features-grid-content text-sm opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed doloribus repudiandae itaque omnis ratione suscipit corrupti. Eius nesciunt velit tempora necessitatibus labore. Praesentium sequi neque vitae nulla! Atque, dolore!</p>
          </li>
          <li className="features-grid-item">
            <Analytics width={64} height={64} />
            <h3 className="features-grid-heading text-md">Feature heading 2</h3>
            <p className="features-grid-content text-sm opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non architecto, soluta voluptates culpa vitae, reprehenderit fugit optio exercitationem veritatis blanditiis corporis sunt! Quidem totam consectetur voluptate ad error minus.</p>
          </li>
          <li className="features-grid-item">
            <Buildings width={64} height={64} />
            <h3 className="features-grid-heading text-md">Feature heading 3</h3>
            <p className="features-grid-content text-sm opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem, earum libero perferendis magnam repudiandae nihil qui. Vel exercitationem dignissimos distinctio recusandae quos suscipit asperiores est, cupiditate voluptate molestiae alias!</p>
          </li>
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
        }
        .features-grid-heading {
        }
        .features-grid-content {
        }
        `}
      </style>
    </section>
  );
}