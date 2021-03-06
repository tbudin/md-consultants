type Props = {
  active: boolean;
  onClick: () => void;
};
export default function Burger({ active, onClick }: Props) {
  return (
    <div className={"burger " + (active ? "active" : "")} onClick={onClick}>
      <div className={"meat meat-1"} />
      <div className={"meat meat-2"} />
      <div className={"meat meat-3"} />
      <style jsx>
        {`
          .burger {
            position: fixed;
            width: 38px;
            height: 38px;
            cursor: pointer;
            top: 1.5rem;
            left: 1.25rem;
            z-index: 200;
          }
          .meat {
            position: absolute;
            width: 28px;
            height: 4px;
            background: var(--text-color);
            top: calc(50% - 4px / 2);
            left: calc(50% - 28px / 2);
            transition: all 150ms ease-in;
          }
          .meat-1 {
            transform: translateY(-10px);
          }
          .meat-2 {
            width: calc(28px - 6px);
          }
          .meat-3 {
            transform: translateY(10px);
          }
          .active .meat-1 {
            transform: rotate(45deg);
          }
          .active .meat-2 {
            opacity: 0;
          }
          .active .meat-3 {
            transform: rotate(-45deg);
          }

          @media (min-width: 1025px) {
            .burger {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}
