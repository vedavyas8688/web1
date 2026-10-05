import HeroSection from "../components/home-two/HeroSection";
import InsideFirmSection from "../components/home-two/InsideFirmSection";
import SelectedWorksSection from "../components/home-two/SelectedWorksSection";
import ServicesSliderSection from "../components/home-two/ServicesSliderSection";
import QuoteSection from "../components/home-two/QuoteSection";
import ProcessSection from "../components/home-two/ProcessSection";
import TestimonialsSection from "../components/home-two/TestimonialsSection";
import ArticlesSection from "../components/home-two/ArticlesSection";
import FooterSection from "../components/home-two/FooterSection";
import ReferencePage from "../components/shared/ReferencePage";
export default function HomeTwoPage() {
  return (
    <ReferencePage
      page="HomeTwo"
      sourcePage="6883a66d1ebb4685edc545b8"
      className={
        "[box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [color:#717171] [background-color:white] [min-height:100%] [font-family:'Inter_Tight',_sans-serif] [font-size:16px] [line-height:1.5em] [font-weight:400] [letter-spacing:-.03em] max-[768px]:[font-size:14px] pt-[78px]"
      }
    >
      <HeroSection />
      <InsideFirmSection />
      <SelectedWorksSection />
      <ServicesSliderSection />
      <QuoteSection />
      <ProcessSection />
      <TestimonialsSection />
      <ArticlesSection />
      <FooterSection />
    </ReferencePage>
  );
}
