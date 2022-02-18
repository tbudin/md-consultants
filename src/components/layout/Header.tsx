import React from "react";
import Link from "next/link";
import { Lockup } from "../Lockup";

export function Header() {
  return (
    <div className="header-inner">
      <Lockup fill={"blue"} />
      <nav className="header-nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about-us">
          <a>About</a>
        </Link>
        <Link href="/contact-us">
          <a>Contact</a>
        </Link>
        <Link href="/posts">
          <a>Blog</a>
        </Link>
      </nav>
      <style jsx>
      {`
        .header-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 1.5rem 1rem;
          text-align: right;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .header-nav {
          display: none;
        }
        @media (min-width: 1025px) {
          .header-inner {
            padding: 1rem 4rem;
            justify-content: space-between;
            border-bottom: 1px solid var(--text-color-lighter);
          }
          .header-nav {
            display: block;
            margin-left: -1rem;
            margin-right: -1rem;
          }
          .header-nav a {
            padding: 0 1rem;
          }
        }
      `}
      </style>
    </div>
  );
}