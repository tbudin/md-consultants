type Props = {
  heading: string;
};
export default function Title({ heading }: Props) {
  return (
    <section className="site-section">
      <div className="site-container">
        <h1>{ heading }</h1>
      </div>
    </section>
  );
}