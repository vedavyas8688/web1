import HeroSection from "../components/home-one/HeroSection";
import IntroductionSection from "../components/home-one/IntroductionSection";
import ShowcaseSection from "../components/home-one/ShowcaseSection";
import PlanningSection from "../components/home-one/PlanningSection";
import ScrollScenesSection from "../components/home-one/ScrollScenesSection";
import CapabilitiesSection from "../components/home-one/CapabilitiesSection";
import ClosingSection from "../components/home-one/ClosingSection";
import ReferencePage from "../components/shared/ReferencePage";
export default function HomeOnePage() {
  return (
    <ReferencePage
      page="HomeOne"
      sourcePage="6995457a728987997b665394"
      className={
        "[box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [color:#525252] [background-color:#fff] [min-height:100%] [font-family:Inter,sans-serif] [font-size:1rem] [line-height:155%] [font-weight:400] [letter-spacing:-.02rem] max-[1280px]:[font-size:.9375rem]"
      }
    >
      <HeroSection />
      <IntroductionSection />
      <ShowcaseSection />
      <PlanningSection />
      <ScrollScenesSection />
      <CapabilitiesSection />
      <ClosingSection />
    </ReferencePage>
  );
}
