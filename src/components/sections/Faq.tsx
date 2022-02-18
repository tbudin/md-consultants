import { FaqItem } from "./FaqItem";

export function Faq({}) {
  return (
    <ul className="faq">
      <FaqItem heading="Question 1" content={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sint architecto possimus vel hic quaerat illo ipsum autem quae sunt, est delectus beatae, quam laborum optio culpa nulla esse ab?</p>} />
      <FaqItem heading="Question 2" content={<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique asperiores totam ipsa ad excepturi autem accusamus harum cum sapiente delectus hic ipsum illo vel quasi officia explicabo cumque, dolorem enim.</p>} />
      <FaqItem heading="Question 3" content={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam ipsam et ullam eveniet repellat numquam at asperiores, recusandae quod sapiente veniam perspiciatis molestiae sit illum itaque nihil necessitatibus culpa?</p>} />
      <style jsx>{`
        .faq {
          max-width: 720px;
          margin: 0 auto;
          list-style: none;
          padding: 0;
        }
      `}</style>
    </ul>
  );
}