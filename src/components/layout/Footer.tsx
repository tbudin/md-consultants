import Link from "next/link";
import LinkedIn from "../../assets/linkedin-alt.svg";
import { Lockup } from "../Lockup";
import config from "../../lib/config";

export function Footer() {
  return (
    <div className="site-container">
      <div className="footer-container">
        <Lockup fill={"white"} />
        <a
          title="LinkedIn"
          href={`https://linkedin.com/${config.linkedin_account}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <LinkedIn width={24} height={24} fill={"white"} />
        </a>
      </div>
      <div className="footer-container">
        <p className="text-xs">© 2022 MD Consultants, all rights reserved <br/>- <a href="https://wiridis.com" rel="noopener" target="_blank">Designed & developed by Wiridis</a></p>
        <nav className="rc">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a>Our Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>
        {`
          .footer-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 0.75rem;
            color: var(--bg-color);
          }
          .footer-container:nth-child(2) {
            flex-direction: column-reverse;
          }
          .footer-container p {
            opacity: 0.70;
          }
          .rc {
            margin-right: -12px;
            margin-left: -12px;
            flex-shrink: 0;
          }
          .rc ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            margin-bottom: 0;
            padding: 1rem 0 2rem;
            list-style: none;
          }
          .rc a {
            padding: 12px;
          }
          @media (min-width: 769px) {
            .footer-container:nth-child(2) {
              flex-direction: row;
            }
          }
        `}
      </style>
    </div>
  );
}
