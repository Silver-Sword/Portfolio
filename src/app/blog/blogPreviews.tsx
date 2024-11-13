import { BlogProperties } from "./BlogProperties";

export const POSTS: BlogProperties[] = [
  {
    id: "0_hello_world",
    title: "Hello, world!",
    date_written: "November 11, 2024",
    description: "My very first blog post",
    image: "/blog-images/hello_world.png",
    alt: "First blog post",
    skills: [],
    isFeatured: true,
    src: "/blog-posts/helloWorld.md",
  },
];

export function getFeaturedPosts() {
  return POSTS.filter((post) => post.isFeatured);
}
