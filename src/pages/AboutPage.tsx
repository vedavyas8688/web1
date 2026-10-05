import HeroSection from "../components/about/HeroSection";
import SpatialExcellenceSection from "../components/about/SpatialExcellenceSection";
import StatementSection from "../components/about/StatementSection";
import ApproachSection from "../components/about/ApproachSection";
import IdentitySection from "../components/about/IdentitySection";
import ExperienceSection from "../components/about/ExperienceSection";
import PlanningSection from "../components/about/PlanningSection";
import ReferencePage from "../components/shared/ReferencePage";
export default function AboutPage() {
  return (
    <ReferencePage
      page="About"
      sourcePage="69954be118e9d34a6a3ad967"
      className={
        "[box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [color:#525252] [background-color:#fff] [min-height:100%] [font-family:Inter,sans-serif] [font-size:1rem] [line-height:155%] [font-weight:400] [letter-spacing:-.02rem] max-[1280px]:[font-size:.9375rem]"
      }
    >
      <HeroSection />
      <SpatialExcellenceSection />
      <StatementSection />
      <ApproachSection />
      <IdentitySection />
      <ExperienceSection />
      <PlanningSection />
    </ReferencePage>
  );
}
