"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      {/* suscribe */}
      <div className="border border-b-1 border-primary-accent my-10"></div>
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-semibold">Get our stories delivered</p>
          <p className="text-sm text-[#7B8DAA]">
            From us to your inbox weekly.
          </p>
        </div>
        <div className="flex gap-5">
          <Input type="email" placeholder="Type your email" />
          <div>
            <Button className="rounded-none w-[150px]">Suscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
