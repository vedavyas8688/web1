import HeroSection from "../components/contact/HeroSection";
import ContactFormSection from "../components/contact/ContactFormSection";
import ReferencePage from "../components/shared/ReferencePage";
export default function ContactPage() {
  return (
    <ReferencePage
      page="Contact"
      sourcePage="69954f67728987997b67e24b"
      className={
        "[box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [color:#525252] [background-color:#fff] [min-height:100%] [font-family:Inter,sans-serif] [font-size:1rem] [line-height:155%] [font-weight:400] [letter-spacing:-.02rem] max-[1280px]:[font-size:.9375rem]"
      }
    >
      <HeroSection />
      <ContactFormSection />
    </ReferencePage>
  );
}
