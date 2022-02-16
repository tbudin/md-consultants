import Link from "next/link";
import Logo from "../assets/logo-icon.svg";

type Props = {
  fill: string;
};

export function Lockup({ fill }: Props) {
  return (
    <Link href="/">
      <a
        title="Home"
        className={`logo-lockup ${fill}`}
      >
        <Logo className="inline" width={50} height={31} alt={"MD Consultant logo"} />
        <p className="text-md inline mt-0 pl-sm"><span className="logo-md">MD</span><br/>Consultants</p>
      </a>
    </Link>
  )
}