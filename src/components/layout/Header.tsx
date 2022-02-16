import React from "react";
import { Lockup } from "../Lockup";

export function Header() {
  return (
    <div className="headerInner">
      <Lockup fill={"blue"} />
      <style jsx>
      {`
        .headerInner {
          padding: 1.5rem 1rem;
          text-align: right;
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