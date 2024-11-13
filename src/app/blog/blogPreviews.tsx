import { BlogProperties } from "./BlogProperties";

export const POSTS: BlogProperties[] = [
  {
    id: "1",
    title: "Hello, world!",
    description: "My very first blog post",
    image: "/placeholder.svg?height=200&width=300",
    alt: "First blog post",
    skills: [],
    isFeatured: true,
  },
];

export function getFeaturedPosts() {
  return POSTS.filter((post) => post.isFeatured);
}
