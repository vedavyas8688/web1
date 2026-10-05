import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function SpotlightSection() {
  const copy = referenceContent.Portfolio.SpotlightSection;
  return (
    <section
      className={
        "rt-portfolio-main-card [box-sizing:border-box] [display:block] [padding-top:1.875rem] [padding-right:.9375rem] [padding-bottom:8.75rem] [padding-left:.9375rem] [background-color:#111111] max-[991px]:[padding-bottom:4.375rem]"
      }
    >
      <div className={"w-dyn-list [box-sizing:border-box]"}>
        <div className={"w-dyn-items [box-sizing:border-box]"} role={"list"}>
          <div
            className={"w-dyn-item [box-sizing:border-box]"}
            role={"listitem"}
          >
            <div
              className={
                "w-layout-vflex rt-card-large rt-radius-large rt-overflow-hidden [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [overflow:hidden] [border-radius:1.25rem] [width:100%] [max-width:93.75rem] [padding-top:8.75rem] [padding-right:.9375rem] [padding-bottom:8.75rem] [padding-left:.9375rem] [background-color:#111111] [justify-content:center] [margin-left:auto] [margin-right:auto] [position:relative] max-[991px]:[padding-bottom:4.375rem] max-[991px]:[padding-top:4.375rem]"
              }
            >
              <RouteLink
                className={
                  "rt-large-card-content rt-desktop-full-width rt-radius-small w-inline-block [box-sizing:border-box] [background-color:#0003] [color:white] [text-decoration:none] [max-width:51.6875rem] [display:flex] [width:100%] [border-radius:.9375rem] [z-index:1] [grid-column-gap:11.125rem] [grid-row-gap:11.125rem] [backdrop-filter:blur(.8125rem)] [flex-flow:column] [align-items:stretch] [padding-top:4.125rem] [padding-right:4.375rem] [padding-bottom:4.125rem] [padding-left:4.375rem] [position:relative] max-[991px]:[padding-bottom:1.25rem] max-[991px]:[grid-row-gap:7rem] max-[991px]:[padding-left:2.5rem] max-[991px]:[grid-column-gap:7rem] max-[991px]:[padding-right:2.5rem] max-[991px]:[padding-top:1.25rem] max-[768px]:[grid-row-gap:3rem] max-[768px]:[padding-left:1.875rem] max-[768px]:[grid-column-gap:3rem] max-[768px]:[padding-right:1.875rem]"
                }
                data-w-id={"d46b2e7b-796f-2813-b962-2fb4b029da41"}
                to={"/project/concrete-harmony"}
              >
                <div
                  className={
                    "w-layout-hflex rt-card-top-wrapper rt-mobile-text-center [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [justify-content:space-between] max-[768px]:[grid-row-gap:.45rem] max-[768px]:[flex-flow:column] max-[768px]:[grid-column-gap:.45rem] max-[479px]:[align-items:center] max-[479px]:[text-align:center]"
                  }
                >
                  <div
                    className={
                      "rt-text-style-h3 rt-text-color-white [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:white] [font-size:1.875rem] [line-height:120%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.7rem] max-[991px]:[font-size:1.625rem] max-[768px]:[font-size:1.375rem]"
                    }
                  >
                    {copy[0]}
                  </div>
                  <div
                    className={
                      "w-layout-vflex rt-large-card-description [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [border-bottom:.0625rem_solid_white] [flex:1] [max-width:20rem] [padding-bottom:1.875rem] max-[991px]:[padding-bottom:1.2rem] max-[768px]:[padding-bottom:.7rem] max-[768px]:[max-width:none]"
                    }
                  >
                    <div
                      className={
                        "rt-text-color-white [box-sizing:border-box] [color:white]"
                      }
                    >
                      {copy[1]}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "w-layout-hflex rt-card-bottom-wrapper rt-mobile-text-center [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [justify-content:space-between] max-[479px]:[grid-row-gap:.9rem] max-[479px]:[flex-flow:wrap] max-[479px]:[grid-column-gap:.9rem] max-[479px]:[justify-content:center] max-[479px]:[text-align:center]"
                  }
                >
                  <div
                    className={
                      "w-layout-vflex rt-bottom-left [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:1.5625rem] [grid-row-gap:1.5625rem] [max-width:26rem] max-[479px]:[align-items:center] max-[479px]:[grid-row-gap:1rem] max-[479px]:[grid-column-gap:1rem] max-[479px]:[justify-content:flex-start]"
                    }
                  >
                    <div
                      className={
                        "rt-offer rt-radius-large rt-text-color-black [box-sizing:border-box] [color:black] [border-radius:1.25rem] [background-color:#f4f4f4] [padding-left:.5625rem] [padding-right:.5625rem]"
                      }
                    >
                      {copy[2]}
                    </div>
                    <div
                      className={
                        "rt-text-style-h5 rt-text-color-white [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:white] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                      }
                    >
                      {copy[3]}
                    </div>
                  </div>
                  <div
                    className={
                      "w-layout-vflex rt-work-arrow rt-radius-xxl rt-work-arrow-v2 [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [border-radius:100%] [background-color:#f4f4f4] [flex:none] [justify-content:center] [width:5.125rem] [height:5.125rem] max-[991px]:[height:4rem] max-[991px]:[width:4rem]"
                    }
                  >
                    <div
                      className={
                        "w-layout-vflex rt-black-arrow-wrapper rt-overflow-hidden [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [overflow:hidden] [max-width:1.125rem] [position:relative] max-[479px]:[max-width:.67rem]"
                      }
                    >
                      <img
                        className={
                          "rt-black-arrow rt-one [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:auto]"
                        }
                        src={"/images/69ae652bac6548e7039928a1_Arrow-8--9-.svg"}
                        loading={"eager"}
                        alt={"arrow"}
                      />
                      <img
                        className={
                          "rt-black-arrow rt-two [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:auto] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                        }
                        src={"/images/69ae652bac6548e7039928a1_Arrow-8--9-.svg"}
                        loading={"eager"}
                        alt={"arrow"}
                      />
                    </div>
                  </div>
                </div>
              </RouteLink>
              <img
                className={
                  "rt-thumbnail-image-large [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                }
                src={
                  "/images/69c22009e1c355a68bbce795_large-thumbnail-image-one.webp"
                }
                loading={"lazy"}
                alt={"Portfolio card image"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
