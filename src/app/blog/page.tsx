import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Writing",
  description: "Notes on building software.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  posts.sort((a, b) => (a.metadata.publishedAt < b.metadata.publishedAt ? 1 : -1));

  return (
    <>
      <p className="mb-8 text-sm">
        <Link href="/">← Home</Link>
      </p>
      <header className="masthead">
        <h1>Writing</h1>
        <p className="standfirst">Notes on building software.</p>
      </header>
      <section className="section">
        <ul className="ledger">
          {posts.map((post) => (
            <li key={post.slug} className="row">
              <Link className="row-name" href={`/blog/${post.slug}`}>
                <span>{post.metadata.title}</span>
              </Link>
              <span className="leader" aria-hidden="true" />
              <span className="row-figure">{post.metadata.publishedAt}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
