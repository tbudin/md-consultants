type Props = {
  heading: string;
  paragraph: string;
  steps;
};

export function Timeline({ heading, paragraph, steps }: Props) {
  return (
    <section className="site-section">
      <div className="site-container">
        <div className="heading-center">
          <h2>{ heading }</h2>
          {paragraph.length > 0 &&
            <p>{ paragraph }</p>
          }
        </div>
        <ul className="timeline">
          {steps.map((it, i) => (
            <li className="timeline-item" key={i}>
              <div className="no">
                <h3 className="nu text-md mt-0">{ it.heading }</h3>
                <div className="text-sm">{ it.paragraph }</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .timeline {
          list-style: none;
          padding: 0;
        }
        .timeline-item {
          position: relative;
          padding-top: 24px;
          padding-bottom: 24px;
        }
        .timeline-item:not(:last-of-type)::before {
          content: '';
          display: block;
          position: absolute;
          top: 44px;
          left: 4px;
          width: 2px;
          height: calc(100% - 10px - 8px);
          background: var(--accent-color-light);
        }
        .no {
          margin-left: 34px;
        }
        .nu {
          position: relative;
        }
        .nu::before {
          content: '';
          display: block;
          position: absolute;
          top: 6px;
          left: -34px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--text-color);
        }
        @media (min-width: 769px) {
          .timeline-item {
            padding-top: 32px;
            padding-bottom: 32px;
            width: 50%;
          }
          .timeline-item:nth-child(odd) {
            left: 50%;
          }
          .timeline-item:nth-child(even) {
            text-align: right;
          }
          .timeline-item:not(:last-of-type)::before {
            top: 52px;
            left: -1px;
          }
          .timeline-item:nth-child(even):not(:last-of-type)::before {
            left: auto;
            right: -1px;
          }
          .timeline-item:nth-child(even) .no {
            margin-left: 0;
            margin-right: 34px;
          }
          .timeline-item:nth-child(odd) .nu::before {
            left: -39px;
          }
          .timeline-item:nth-child(even) .nu::before {
            left: auto;
            right: -39px;
          }
        }
      `}</style>
    </section>
  );
}