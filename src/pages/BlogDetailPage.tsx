import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import NotFoundPage from "./NotFoundPage";
import HeroSection from "../components/blog-detail/HeroSection";
import ArticleSection from "../components/blog-detail/ArticleSection";
import RelatedArticlesSection from "../components/blog-detail/RelatedArticlesSection";
export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return <NotFoundPage />;
  return (
    <>
      <HeroSection blog={blog} />
      <ArticleSection blog={blog} />
      <RelatedArticlesSection blog={blog} />
    </>
  );
}
