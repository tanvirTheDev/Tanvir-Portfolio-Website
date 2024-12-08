import { BlogPost } from "@/data/blogPosts";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
