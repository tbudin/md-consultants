import Link from "next/link";

type Props = {
  href: string;
  color: string;
  type: string;
  children;
};
export default function ButtonLink({ href, color, type, children }: Props) {
  if (type = "external") {
    return (
      <div className={`btn ${color}`}>
        <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg">
          <rect className="btn-shape" />
        </svg>
        <a className="btn-text" href={href} rel="noopener noreferrer">{children}</a>
      </div>
    );
  }
  return (
    <div className={`btn ${color}`}>
      <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg">
        <rect className="btn-shape" />
      </svg>
      <Link href={href} >
        <a className="btn-text">{children}</a>
      </Link>
    </div>
  );
}