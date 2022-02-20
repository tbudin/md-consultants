import { PostContent } from "../../lib/posts";
import Date from "../Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  const isArchive = post.archive;
  if (!isArchive) {
    return (
      <Link href={"/posts/" + post.slug}>
        <a>
          <Date date={parseISO(post.date)} />
          <h2 className="text-lg">{post.title}</h2>
          <style jsx>
            {`
              a {
                display: inline-block;
              }
              h2 {
                margin: 0;
                font-weight: 500;
              }
            `}
          </style>
        </a>
      </Link>
    );
  }
  return (
    <></>
  );
}
