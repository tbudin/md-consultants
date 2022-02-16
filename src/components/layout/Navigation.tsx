import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"nav-container " + (active ? "active" : "")}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a className={router.pathname === "/about-us" ? "active" : null}>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <a className={router.pathname === "/contact-us" ? "active" : null}>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
              >
                Our Blog
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .nav-container {
              width: 0;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100%;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: #faefd4;
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
              padding-right: 2rem;
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 3rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: var(--accent-color);
            }
            .active::after {
              position: absolute;
              transform: translateX(50%);
              content: url(./images/icons/square-dot.svg);
            }

            @media (min-width: 769px) {
              .nav-container {
                width: 7rem;
                display: block;
                height: 100%;
              }
              ul {
                opacity: 1;
                width: 7rem;
                top: 0;
                display: flex;
                justify-content: center;
                transform: translateY(0);
                background-color: transparent;
                position: sticky;
                max-height: 100vh;
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}