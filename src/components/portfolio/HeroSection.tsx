import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function HeroSection() {
  const copy = referenceContent.Portfolio.HeroSection;
  return (
    <section
      className={
        "rt-hero-v8 rt-overflow-hidden [box-sizing:border-box] [display:block] [overflow:hidden] [background-color:#111111] [position:relative]"
      }
    >
      <div
        className={
          "rt-overlay-v10 [box-sizing:border-box] [z-index:1] [pointer-events:none] [background-image:linear-gradient(#0a0a0d00_34%,#0a0a0d8c_68%),linear-gradient(#0a0a0da1,#0a0a0d00_57%)] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
        }
      ></div>
      <img
        className={
          "rt-hero-v8-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
        }
        src={"/images/69c0d54821f34a3778b8e3ab_portfolio-main-image.webp"}
        alt={"portfolio-hero-image"}
        data-w-id={"d7652052-6d76-bc53-8f8b-3ca3ef5f7c84"}
        loading={"lazy"}
      />
      <div
        className={
          "w-layout-blockcontainer rt-container w-container [box-sizing:border-box] [max-width:111.875rem] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:.9375rem] [padding-left:.9375rem]"
        }
      >
        <div
          className={
            "rt-hero-v8-main-wrapper [box-sizing:border-box] [z-index:2] [padding-top:21.25rem] [padding-bottom:8.3125rem] [position:relative] max-[991px]:[padding-bottom:3.9375rem] max-[768px]:[padding-top:15rem]"
          }
        >
          <div
            className={
              "w-layout-vflex rt-hero-v1-left-wrapper rt-hero-v1-left-wrapper-v2 [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [flex:1] [max-width:54rem] [margin-bottom:-.25rem] max-[1280px]:[max-width:50rem]"
            }
          >
            <div
              className={
                "rt-sub-text rt-text-color-white rt-gap-medium [box-sizing:border-box] [font-size:.875rem] [line-height:185%] [font-weight:500] [letter-spacing:-.00875rem] [color:white] [margin-bottom:.9375rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[margin-bottom:.7rem]"
              }
              data-w-id={"8bb7ecdc-fcb7-bbc7-4f42-e7bd83e755e7"}
            >
              {copy[0]}
            </div>
            <h1
              className={
                "rt-gap-off rt-text-color-white rt-gap-medium [box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:.9375rem] [margin-left:0] [font-size:5rem] [font-weight:400] [line-height:104%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:0rem] max-[1280px]:[font-size:2.6rem] max-[991px]:[font-size:2.4rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[font-size:2.1875rem] max-[768px]:[margin-bottom:.7rem] max-[479px]:[font-size:1.875rem]"
              }
              text-reveal-on-load={"1"}
              data-w-id={"8bb7ecdc-fcb7-bbc7-4f42-e7bd83e755e9"}
            >
              {copy[1]}
            </h1>
            <div
              className={
                "w-layout-hflex rt-hero-v1-bottom-wrap rt-desktop-full-width [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [width:100%] [grid-column-gap:1.5625rem] [grid-row-gap:1.5625rem] [flex-flow:wrap] [justify-content:space-between] max-[991px]:[grid-row-gap:.9rem] max-[991px]:[grid-column-gap:.9rem] max-[768px]:[grid-row-gap:.8rem] max-[768px]:[grid-column-gap:.8rem]"
              }
              data-w-id={"8bb7ecdc-fcb7-bbc7-4f42-e7bd83e755eb"}
            >
              <RouteLink
                className={
                  "rt-button-v1 rt-radius-xl rt-overflow-hidden w-inline-block [box-sizing:border-box] [background-color:white] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [z-index:2] [grid-column-gap:1.125rem] [grid-row-gap:1.125rem] [border:1px_solid_#fff0] [justify-content:space-between] [align-items:center] [padding-top:.75rem] [padding-right:1.0625rem] [padding-bottom:.75rem] [padding-left:1.0625rem] [position:relative] [border-radius:1.75rem] max-[991px]:[padding-left:.8rem] max-[991px]:[padding-right:.8rem]"
                }
                to={"/contact-three"}
                data-w-id={"66952769-aaac-544f-4ec5-95f1a5ca6239"}
              >
                <div
                  className={
                    "w-layout-vflex rt-button-text-wrapper rt-overflow-hidden [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [overflow:hidden] [position:relative]"
                  }
                >
                  <div
                    className={
                      "rt-text-style-button rt-button-text-one [box-sizing:border-box] [color:black] [font-size:1rem] [line-height:162.5%] [font-weight:500] [letter-spacing:-.01rem] [white-space:nowrap] max-[1280px]:[font-size:.9375rem] max-[991px]:[letter-spacing:.75px] max-[768px]:[letter-spacing:.7px]"
                    }
                  >
                    {copy[2]}
                  </div>
                  <div
                    className={
                      "rt-text-style-button rt-button-text-two [box-sizing:border-box] [color:white] [font-size:1rem] [line-height:162.5%] [font-weight:500] [letter-spacing:-.01rem] [white-space:nowrap] [position:absolute] max-[1280px]:[font-size:.9375rem] max-[991px]:[letter-spacing:.75px] max-[768px]:[letter-spacing:.7px]"
                    }
                  >
                    {copy[3]}
                  </div>
                </div>
                <div
                  className={
                    "w-layout-hflex rt-button-v1-arrow-wrap rt-radius-xxl [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [background-color:black] [flex:none] [justify-content:center] [width:1.75rem] [height:1.75rem] [border-radius:100%]"
                  }
                >
                  <div
                    className={
                      "w-layout-vflex rt-button-icon-wrap rt-overflow-hidden [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [overflow:hidden] [position:relative]"
                    }
                  >
                    <img
                      className={
                        "rt-button-arrow-in [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                      }
                      alt={""}
                      src={
                        "/images/6996a06b75584db3f08fa728_Group-2147226297.svg"
                      }
                      loading={"eager"}
                    />
                    <img
                      className={
                        "rt-button-arrow-out [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] [position:absolute]"
                      }
                      alt={""}
                      src={
                        "/images/6996a06bdb876d95fee3c8ba_Group-2147226297--1-.svg"
                      }
                      loading={"eager"}
                    />
                  </div>
                </div>
                <div
                  className={
                    "rt-button-overlay-1 [box-sizing:border-box] [z-index:-1] [border:.0625rem_solid_#fff0] [background-color:white] [pointer-events:none] [border-radius:1.75rem] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                  }
                ></div>
              </RouteLink>
              <div
                className={
                  "rt-hero-v1-desscription [box-sizing:border-box] [max-width:33.3125rem]"
                }
              >
                <p
                  className={
                    "rt-text-color-very-light-gray rt-gap-off [box-sizing:border-box] [margin-top:0] [margin-bottom:0] [margin-right:0] [margin-left:0] [color:#e6e6e6]"
                  }
                >
                  {copy[4]}
                </p>
              </div>
            </div>
          </div>
          <div
            className={
              "rt-hero-v8-text-wrap rt-tab-display-none [box-sizing:border-box] [position:absolute] [top:auto] [right:0%] [bottom:-2.6rem] [left:auto] max-[1280px]:[bottom:-1rem] max-[991px]:[display:none]"
            }
            data-w-id={"13501cb1-c868-77a2-67ed-5a2e29412e13"}
          >
            <div
              className={
                "rt-big-text-v6 [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [font-size:9.375rem] [line-height:106%] [font-weight:600] [letter-spacing:-.03125rem] [text-transform:uppercase] [-webkit-text-fill-color:transparent] [background-image:linear-gradient(#fff,#fff0_74%)] [background-clip:text] max-[1280px]:[font-size:7rem] max-[991px]:[font-size:5rem] max-[768px]:[font-size:3rem] max-[479px]:[font-size:2.4rem]"
              }
            >
              {copy[5]}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "w-layout-hflex rt-line-wrapper rt-tab-display-none [box-sizing:border-box] [flex-direction:row] [align-items:stretch] [display:flex] [z-index:2] [pointer-events:none] [width:100%] [height:100%] [position:absolute] [top:5.375rem] [right:0%] [bottom:auto] [left:0%] max-[991px]:[display:none] max-[991px]:[top:3.5rem]"
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
    </section>
  );
}
