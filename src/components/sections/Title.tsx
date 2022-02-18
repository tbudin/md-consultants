type Props = {
  heading: string;
  paragraph: string;
};
export default function Title({ heading, paragraph }: Props) {
  return (
    <section className="site-section">
      <div className="site-container">
        <h1 className="text-xl">{ heading }</h1>
        <p>{ paragraph }</p>
      </div>
    </section>
  );
}