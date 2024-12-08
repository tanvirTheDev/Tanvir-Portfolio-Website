"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { blogPosts } from "../../../data/blogPosts";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === Number(id));

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <Link href="/blog">
        <Button variant="outline" className="mb-4">
          &larr; Back to all posts
        </Button>
      </Link>
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-primary-accent text-4xl my-3">{post.title}</h1>
        <p className="text-gray-500">Category: {post.category}</p>
        <p>{post.excerpt}</p>
        {/* In a real application, you would have full content here */}
        <div className="mt-8 space-y-6">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
