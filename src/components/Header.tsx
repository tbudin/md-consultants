import React from "react";

export function Header() {
  return (
    <div className="headerInner">
      <a
        title="Home"
        href="/"
        className="headerLogo"
      >
        <img className="headerSVG" src="./images/logos/logo-icon.svg" alt="MD Consultant logo"></img>
        MD Consultants
      </a>
      <style jsx>
      {`
        .headerInner {
          padding: 1.5rem 1rem;
          text-align: right;
        }
        .headerLogo {
          font-family: 'Marcellus', Georgia, 'Times New Roman', Times, serif;
          font-size: 1.5rem;
        }
        .headerSVG {
          width: 1.875rem;
          height: auto;
          margin-right: 1rem;
        }
        @media (min-width: 769px) {
          .headerInner {
            padding: 1rem 4rem;
            text-align: center;
          }
        }
      `}
      </style>
    </div>
  );
}