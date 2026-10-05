import HeroSection from "../components/blog-reference/HeroSection";
import ArticleSection from "../components/blog-reference/ArticleSection";
import DividerSection from "../components/blog-reference/DividerSection";
import RelatedArticlesSection from "../components/blog-reference/RelatedArticlesSection";
import ReferencePage from "../components/shared/ReferencePage";
export default function BlogReferencePage() {
  return (
    <ReferencePage
      page="BlogReference"
      sourcePage="699855d63cfa7b9fa788d052"
      className={
        "[box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [color:#525252] [background-color:#fff] [min-height:100%] [font-family:Inter,sans-serif] [font-size:1rem] [line-height:155%] [font-weight:400] [letter-spacing:-.02rem] max-[1280px]:[font-size:.9375rem]"
      }
    >
      <HeroSection />
      <ArticleSection />
      <DividerSection />
      <RelatedArticlesSection />
    </ReferencePage>
  );
}
