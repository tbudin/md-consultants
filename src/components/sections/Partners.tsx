type Props = {
  partners;
};

export function Partners({ partners }: Props) {
  return (
    <ul className="partners">
      {partners.map((it, i) => (
        <li key={i}><img src={ it.image } width={175} height={64} /></li>
      ))}
      <style jsx>{`
      .partners {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 2rem 0;
        list-style: none;
      }
      .partners li {
        margin: 0.5rem;
      }
      @media (min-width: 1025px) {
        .partners li {
          margin: 0.5rem 1.5rem;
        }
      }
      `}</style>
    </ul>
  );
}