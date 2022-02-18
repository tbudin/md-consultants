export function Timeline({}) {
  return (
    <ul className="timeline">
      <li className="timeline-item">
        <div className="no">
          <h3 className="nu text-md mt-0">Date 1</h3>
          <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo, dolorum culpa nemo atque tempora perferendis ut dolores mollitia rerum voluptatem, iste expedita omnis natus voluptate distinctio vitae, maiores quisquam.</div>
        </div>
      </li>
      <li className="timeline-item">
        <div className="no">
          <h3 className="nu text-md mt-0">Date 2</h3>
          <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel velit ad impedit perspiciatis, quae quas ipsam id repellat. Fugiat tempore dicta, voluptate aspernatur expedita hic sequi sint quod ea quo!</div>
        </div>
      </li>
      <li className="timeline-item">
        <div className="no">
          <h3 className="nu text-md mt-0">Date 3</h3>
          <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo, dolorum culpa nemo atque tempora perferendis ut dolores mollitia rerum voluptatem, iste expedita omnis natus voluptate distinctio vitae, maiores quisquam.</div>
        </div>
      </li>
      <li className="timeline-item">
        <div className="no">
          <h3 className="nu text-md mt-0">Date 4</h3>
          <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel velit ad impedit perspiciatis, quae quas ipsam id repellat. Fugiat tempore dicta, voluptate aspernatur expedita hic sequi sint quod ea quo!</div>
        </div>
      </li>
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
    </ul>
  );
}