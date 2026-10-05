import HeroSection from "../components/portfolio/HeroSection";
import FeaturedProjectsSection from "../components/portfolio/FeaturedProjectsSection";
import GallerySection from "../components/portfolio/GallerySection";
import SpotlightSection from "../components/portfolio/SpotlightSection";
import LatestProjectsSection from "../components/portfolio/LatestProjectsSection";
import ReferencePage from "../components/shared/ReferencePage";
export default function PortfolioPage() {
  return (
    <ReferencePage
      page="Portfolio"
      sourcePage="69954cb3cf579f46357d893f"
      className={
        "[box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [color:#525252] [background-color:#fff] [min-height:100%] [font-family:Inter,sans-serif] [font-size:1rem] [line-height:155%] [font-weight:400] [letter-spacing:-.02rem] max-[1280px]:[font-size:.9375rem]"
      }
    >
      <HeroSection />
      <FeaturedProjectsSection />
      <GallerySection />
      <SpotlightSection />
      <LatestProjectsSection />
    </ReferencePage>
  );
}
