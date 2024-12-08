"use client";
import BlogPostCard from "@/components/BlogPostCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogPosts } from "@/data/blogPosts";
import { useState } from "react";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Blog</h1>

      {/* Search blog by title */}
      <div className="flex justify-center mb-8">
        <Input
          placeholder="Search"
          type="text"
          className="w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <Tabs
        value={selectedCategory}
        onValueChange={setSelectedCategory}
        className="mb-8"
      >
        <TabsList className="flex flex-wrap xl:flex-nowrap gap-12">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="webDevelopment">Web Development</TabsTrigger>
          <TabsTrigger value="machineLearning">Machine Learning</TabsTrigger>
          <TabsTrigger value="gitAndGithub">Git and Github</TabsTrigger>
          <TabsTrigger value="programming">Programming</TabsTrigger>
          <TabsTrigger value="nextjs">Next.js</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
