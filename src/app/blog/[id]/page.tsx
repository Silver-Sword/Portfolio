import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "@/app/blog/blogPreviews";

const blogPosts = POSTS;

const text = {
  "1": {
    date: "November 5, 2024",
    content:
      "This is my first blog post as a new grad software engineer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};

// This function generates the static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

// This function gets the data for a specific blog post
async function getBlogPost(id: string) {
  return blogPosts.find((post) => post.id === id);
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose lg:prose-xl">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg"
        />
        <p>{post.content}</p>
      </div>
    </article>
  );
}
