"use client";
import { POSTS } from "./blogPreviews";
import { BlogCard } from "@/components/BlogCard";

const posts = POSTS;
export default function BlogPosts() {
  return (
    <div>
      <title>Blog - Chris Gittings</title>
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
