import HeroSection from "../components/project-reference/HeroSection";
import GallerySection from "../components/project-reference/GallerySection";
import RelatedProjectsSection from "../components/project-reference/RelatedProjectsSection";
import ReferencePage from "../components/shared/ReferencePage";
export default function ProjectReferencePage() {
  return (
    <ReferencePage
      page="ProjectReference"
      sourcePage="69bfec30aa23c44c342bf3f1"
      className={
        "[box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [color:#525252] [background-color:#fff] [min-height:100%] [font-family:Inter,sans-serif] [font-size:1rem] [line-height:155%] [font-weight:400] [letter-spacing:-.02rem] max-[1280px]:[font-size:.9375rem]"
      }
    >
      <HeroSection />
      <GallerySection />
      <RelatedProjectsSection />
    </ReferencePage>
  );
}
