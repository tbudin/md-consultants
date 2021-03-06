import Link from "next/link";
import { TagContent } from "../../lib/tags";

type Props = {
  tag: TagContent;
};
export default function TagButton({ tag }: Props) {
  return (
    <>
      <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
        <a>{tag.name}</a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          background-color: var(--accent-color-lighter);
          color: var(--accent-color);
          transition: background-color 0.3s ease;
          padding: 0.25em 0.5em;
        }
        a:active,
        a:hover {
          background-color: var(--accent-color-light);
        }
      `}</style>
    </>
  );
}
