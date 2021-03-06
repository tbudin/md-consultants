import React from "react";
import { PostContent } from "../../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <div className={"blog"}>
      <div className={"posts"}>
        <h3 className="text-lg">Our latest posts</h3>
        <ul className={"post-list"}>
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        />
      </div>
      <div className={"categories"}>
        <h3 className="text-lg">Categories</h3>
        <ul>
          {tags.map((it, i) => (
            <li key={i}>
              <TagLink tag={it} />
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .blog {
          display: flex;
          padding: 4rem 0 0;
        }
        .posts {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        .post-list {
          flex: 1 0 auto;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .posts li {
          margin-bottom: 1.5rem;
        }
        .categories {
          display: none;
          margin-bottom: 2rem;
        }
        .categories ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .categories li {
          margin-bottom: 0.75em;
        }

        @media (min-width: 769px) {
          .blog {
            flex-direction: column;
          }
          .posts {
            max-width: 65ch;
            margin-right: auto;
            padding-right: 2rem;
          }
          .categories {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
