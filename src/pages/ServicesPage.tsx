import CurtainSection from "../components/services/CurtainSection";
import HeroSection from "../components/services/HeroSection";
import PartnersSection from "../components/services/PartnersSection";
import IntroductionSection from "../components/services/IntroductionSection";
import SpaceSection from "../components/services/SpaceSection";
import ProjectsSection from "../components/services/ProjectsSection";
import SolutionsSection from "../components/services/SolutionsSection";
import CommercialSection from "../components/services/CommercialSection";
import DocumentationSection from "../components/services/DocumentationSection";
import ReferencePage from "../components/shared/ReferencePage";
export default function ServicesPage() {
  return (
    <ReferencePage
      page="Services"
      sourcePage="69954bef74dda286efc3e769"
      className={
        "[box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [color:#525252] [background-color:#fff] [min-height:100%] [font-family:Inter,sans-serif] [font-size:1rem] [line-height:155%] [font-weight:400] [letter-spacing:-.02rem] max-[1280px]:[font-size:.9375rem]"
      }
    >
      <CurtainSection />
      <HeroSection />
      <PartnersSection />
      <IntroductionSection />
      <SpaceSection />
      <ProjectsSection />
      <SolutionsSection />
      <CommercialSection />
      <DocumentationSection />
    </ReferencePage>
  );
}
