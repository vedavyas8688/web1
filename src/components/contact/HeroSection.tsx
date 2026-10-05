import { referenceContent } from "../../data/referenceContent";
export default function HeroSection() {
  const copy = referenceContent.Contact.HeroSection;
  return (
    <section
      className={
        "rt-hero-v3 rt-overflow-hidden [box-sizing:border-box] [display:block] [overflow:hidden] [background-color:#111111] [padding-top:17.375rem] [padding-bottom:14.125rem] [position:relative] max-[991px]:[padding-bottom:8.75rem] max-[991px]:[padding-top:14rem]"
      }
      data-wf--rt-hero-section--variant={"hero-v2"}
      data-w-id={"b2c4d93b-7bf7-e742-66a3-4e800adfba00"}
    >
      <div
        className={
          "w-layout-hflex rt-blue-overlay-wrapper [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex] [z-index:99] [pointer-events:none] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
        }
      >
        <div
          className={
            "rt-blue-curtain rt-blue-curtain-v1 [box-sizing:border-box] [background-color:#111111] [flex:1] [height:0%]"
          }
        ></div>
        <div
          className={
            "rt-blue-curtain rt-blue-curtain-v2 [box-sizing:border-box] [background-color:#111111] [flex:1] [height:0%]"
          }
        ></div>
        <div
          className={
            "rt-blue-curtain rt-blue-curtain-v3 [box-sizing:border-box] [background-color:#111111] [flex:1] [height:0%]"
          }
        ></div>
      </div>
      <div
        className={
          "rt-overlay-v4 [box-sizing:border-box] [z-index:1] [background-image:linear-gradient(#111111_8%,#11111100_82%)] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
        }
      ></div>
      <div
        className={
          "rt-hero-v3-image-v1 rt-hero-v3-image-v2 w-variant-595c8255-4338-d636-e40a-b9c9ce0451ca [box-sizing:border-box] [background-image:url('/images/69b115fbd7fe78c451dfe875_contact-hero-image-two.webp')] [background-position:50%] [background-repeat:no-repeat] [background-size:cover] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
        }
      ></div>
      <div
        className={
          "w-layout-hflex rt-line-wrapper [box-sizing:border-box] [flex-direction:row] [align-items:stretch] [display:flex] [z-index:2] [pointer-events:none] [width:100%] [height:100%] [position:absolute] [top:5.375rem] [right:0%] [bottom:auto] [left:0%] max-[991px]:[top:3.5rem]"
        }
      >
        <div
          className={
            "rt-line-bar [box-sizing:border-box] [border-right:.0625rem_solid_#fff3] [flex:1]"
          }
        ></div>
        <div
          className={
            "rt-line-bar [box-sizing:border-box] [border-right:.0625rem_solid_#fff3] [flex:1]"
          }
        ></div>
        <div
          className={
            "rt-line-bar [box-sizing:border-box] [border-right:.0625rem_solid_#fff3] [flex:1]"
          }
        ></div>
        <div
          className={
            "rt-line-bar rt-last-box [box-sizing:border-box] [border-right:.0625rem_solid_#fff3] [flex:1] [border-right-style:none]"
          }
        ></div>
      </div>
      <div
        className={
          "w-layout-blockcontainer rt-container w-container [box-sizing:border-box] [max-width:111.875rem] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:.9375rem] [padding-left:.9375rem]"
        }
      >
        <div
          className={
            "w-layout-vflex rt-hero-v3-main-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [z-index:1] [justify-content:center] [position:relative]"
          }
        >
          <div
            className={
              "rt-blog-details-main-title rt-desktop-text-center [box-sizing:border-box] [text-align:center] [max-width:58.8125rem] max-[1280px]:[max-width:46rem] max-[768px]:[max-width:36rem]"
            }
          >
            <h1
              className={
                "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [font-size:5rem] [font-weight:400] [line-height:104%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:0rem] max-[1280px]:[font-size:2.6rem] max-[991px]:[font-size:2.4rem] max-[768px]:[font-size:2.1875rem] max-[479px]:[font-size:1.875rem]"
              }
              main-text-reveal={"1"}
              data-w-id={"b2c4d93b-7bf7-e742-66a3-4e800adfba0f"}
            >
              {copy[0]}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
