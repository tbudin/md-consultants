import { useState } from "react";

type Props = {
  heading: string;
  content;
};

export function FaqItem({ heading, content }: Props) {
  const [active, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!active)
  };
  return (
    <li className={`faq-item ${active ? "faq-active" : null }`} onClick={toggleClass}>
      <div className="faq-title">
        <h3 className="text-md">{ heading }</h3>
        <div className="faq-cross"></div>
      </div>
      <div className="faq-content opacity-70">{ content }</div>
    <style jsx>{`
      .faq-item {
        margin: 0;
        position: relative;
      }
      .faq-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: block;
        height: 1px;
        background: var(--text-color-lighter);
      }
      .faq-item:last-of-type::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: block;
        height: 1px;
        background: var(--text-color-lighter);
      }
      .faq-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 24px;
        padding-bottom: 24px;
        cursor: pointer;
      }
      .faq-title h3 {
        width: calc(100% - (16px * 2));
        margin: 0;
      }
      .faq-cross {
        position: relative;
        width: 16px;
        height: 16px;
        cursor: pointer;
      }
      .faq-cross::before, .faq-cross::after {
        content: '';
        position: absolute;
        background: var(--text-color);
        transition: transform .25s ease-out;
      }
      .faq-cross::before {
        top: 0;
        left: 50%;
        width: 2px;
        height: 100%;
        margin-left: -1px;
      }
      .faq-cross::after {
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        margin-top: -1px;
      }
      .faq-content {
        height: 0;
        opacity: 0;
        overflow: hidden;
        transition: max-height .15s ease-in-out, opacity .15s;
      }
      .faq-content p {
        margin-bottom: 1.75rem;
      }
      .faq-active .faq-content {
        height: auto;
        opacity: 1;
      }
      .faq-active .faq-cross::before {
        transform: rotate(90deg);
      }
      .faq-active .faq-cross::after {
        transform: rotate(180deg);
      }
    `}</style>
    </li>
  );
}