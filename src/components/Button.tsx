import Link from "next/link";
import { Children } from "react";

type Props = {
  href: string;
  children;
};
export default function ButtonLink({ href, children }: Props) {
  return (
    <div className="btn">
      <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg">
        <rect className="btn-shape" />
      </svg>
      <Link href={href} >
        <a className="btn-text">{children}</a>
      </Link>
    </div>
  );
}