import ArticlesSection from "../components/blog/ArticlesSection";
import ReferencePage from "../components/shared/ReferencePage";
export default function BlogPage() {
  return (
    <ReferencePage
      page="Blog"
      sourcePage="69954c1535669cb3fbc01c3b"
      className={
        "[box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [color:#525252] [min-height:100%] [font-family:Inter,sans-serif] [font-size:1rem] [line-height:155%] [font-weight:400] [letter-spacing:-.02rem] max-[1280px]:[font-size:.9375rem] [box-sizing:border-box] [display:block] [padding-top:14rem] [padding-bottom:8.75rem] [background-color:#111111] max-[991px]:[padding-bottom:4.375rem] max-[991px]:[padding-top:8rem]"
      }
    >
      <ArticlesSection />
    </ReferencePage>
  );
}
