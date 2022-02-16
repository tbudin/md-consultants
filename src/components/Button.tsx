import Link from "next/link";

type Props = {
  href: string;
  type: string;
  children;
};
export default function ButtonLink({ href, type, children }: Props) {
  return (
    <div className={`btn ${type}`}>
      <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg">
        <rect className="btn-shape" />
      </svg>
      <Link href={href} >
        <a className="btn-text">{children}</a>
      </Link>
    </div>
  );
}