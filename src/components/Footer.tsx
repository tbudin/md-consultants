import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import config from "../lib/config";

export function Footer() {
  return (
    <div className="footerInner">
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>
        {`
        .footerInner {
          background-color: var(--text-color);
          color: var(--bg-color);
          padding: 4rem 0;
        }
        `}
      </style>
    </div>
  );
}
