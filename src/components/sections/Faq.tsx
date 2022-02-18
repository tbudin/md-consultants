import { FaqItem } from "./FaqItem";

type Props = {
  heading: string;
  paragraph: string;
  questions;
};

export function Faq({ heading, paragraph, questions }: Props) {
  return (
    <section className="site-section">
      <div className="site-container">
        <div className="heading-center">
          <h2>{ heading }</h2>
          <p>{ paragraph }</p>
        </div>
        <ul className="faq">
          {questions.map((it, i) => (
            <FaqItem question={ it.question } answer={ it.answer } key={i} />
          ))}
        </ul>
      </div>
      <style jsx>{`
        .faq {
          max-width: 720px;
          margin: 0 auto;
          list-style: none;
          padding: 0;
        }
      `}</style>
    </section>
  );
}