type Props = {
  sections;
};

export function Split({ sections }: Props) {
  return (
    <section className="site-section">
      <div className="site-container">
        {sections.map((it, i) => (
            <div className="site-row items-center pt-md pb-md" key={i}>
              <div className="row-content">
                <h2>{ it.heading }</h2>
                {it.paragraph.length > 0 &&
                  <p>{ it.paragraph }</p>
                }
              </div>
              <div className="row-illustration">
                <div className="image-wrap">
                  <img
                    src="/assets/images/financial-institutions.jpg"
                    alt="Financial institution building over a blue sky"
                    className="imageCover"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}