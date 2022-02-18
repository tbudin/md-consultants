type Props = {
  heading: string;
  paragraph: string;
};
export function FeaturesList({ heading, paragraph }: Props) {
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
          <li className="features-list-item">
            <h3 className="features-list-heading text-md">Feature heading 1</h3>
            <p className="features-list-content text-sm opacity-70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed doloribus repudiandae itaque omnis ratione suscipit corrupti. Eius nesciunt velit tempora necessitatibus labore. Praesentium sequi neque vitae nulla! Atque, dolore!</p>
          </li>
          <li className="features-list-item">
            <h3 className="features-list-heading text-md">Feature heading 2</h3>
            <p className="features-list-content text-sm opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non architecto, soluta voluptates culpa vitae, reprehenderit fugit optio exercitationem veritatis blanditiis corporis sunt! Quidem totam consectetur voluptate ad error minus.</p>
          </li>
          <li className="features-list-item">
            <h3 className="features-list-heading text-md">Feature heading 3</h3>
            <p className="features-list-content text-sm opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem, earum libero perferendis magnam repudiandae nihil qui. Vel exercitationem dignissimos distinctio recusandae quos suscipit asperiores est, cupiditate voluptate molestiae alias!</p>
          </li>
        </ul>
        </div>
      </div>
    </div>
    <style jsx>
      {`
      .features-list {
        max-width: 720px;
        margin: 0 auto;
        list-style: none;
        padding: 0;
      }
      .features-list-item {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 1rem 0 3rem 0;
        border-top: 1px solid var(--text-color);
      }
      .features-list-item:last-of-type {
        padding-bottom: 0;
      }
      .features-list-heading {
        width: 40%;
        padding-right: 1rem;
      }
      .features-list-content {
        width: 60%;
      }
      `}
    </style>
    </section>
  );
}