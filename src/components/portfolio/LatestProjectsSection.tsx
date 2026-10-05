import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function LatestProjectsSection() {
  const copy = referenceContent.Portfolio.LatestProjectsSection;
  return (
    <section
      className={
        "rt-latest-cards [box-sizing:border-box] [display:block] [padding-top:8.75rem] [padding-bottom:8.75rem] max-[991px]:[padding-bottom:4.375rem] max-[991px]:[padding-top:4.375rem]"
      }
    >
      <div
        className={
          "w-layout-blockcontainer rt-container w-container [box-sizing:border-box] [max-width:111.875rem] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:.9375rem] [padding-left:.9375rem]"
        }
      >
        <div className={"w-dyn-list [box-sizing:border-box]"}>
          <div
            className={
              "rt-latest-cards-main-wrapper w-dyn-items [box-sizing:border-box] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [grid-template-rows:auto] [grid-template-columns:1fr_1fr] [grid-auto-columns:1fr] [display:grid] max-[768px]:[grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))]"
            }
            role={"list"}
          >
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <div
                className={
                  "w-layout-vflex rt-card-v5 [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [background-color:rgb(248,248,248)] [border-radius:1.25rem]"
                }
                data-w-id={"f58fe2ab-db51-90b1-b04e-4eb3af609a58"}
              >
                <RouteLink
                  className={
                    "rt-card-v5-top-wrapper rt-radius-large rt-overflow-hidden w-inline-block [box-sizing:border-box] [background-color:#111111] [color:white] [text-decoration:none] [max-width:100%] [display:inline-block] [overflow:hidden] [border-radius:1.25rem] [position:relative]"
                  }
                  to={"/project/contemporary-retreat"}
                >
                  <div
                    className={
                      "w-layout-vflex rt-overlay-v12 [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [z-index:1] [background-image:linear-gradient(#0a0a0dab_12%,#0a0a0d00_96%)] [padding-top:2.5rem] [padding-left:2.5rem] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] max-[991px]:[padding-left:1.25rem] max-[991px]:[padding-top:1.25rem]"
                    }
                  >
                    <div
                      className={
                        "w-layout-vflex rt-author [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:3px] [grid-row-gap:3px]"
                      }
                    >
                      <div
                        className={
                          "rt-sub-text [box-sizing:border-box] [font-size:.875rem] [line-height:185%] [font-weight:500] [letter-spacing:-.00875rem]"
                        }
                      >
                        {copy[0]}
                      </div>
                      <div
                        className={
                          "rt-text-style-h5 rt-text-color-white [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:white] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                        }
                      >
                        {copy[1]}
                      </div>
                    </div>
                  </div>
                  <img
                    className={
                      "rt-thumbnail-image rt-ratio-v2 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] [aspect-ratio:863/584]"
                    }
                    src={
                      "/images/69c21a8ea2dbf3b1a16724a0_thumbnail-image-twelve.webp"
                    }
                    loading={"lazy"}
                    alt={"Portfolio card image"}
                  />
                </RouteLink>
                <div
                  className={
                    "w-layout-hflex rt-card-details [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.5625rem] [grid-row-gap:1.5625rem] [justify-content:space-between] [padding-top:2rem] [padding-right:2.5rem] [padding-bottom:2rem] [padding-left:2.5rem] max-[1280px]:[padding-right:1.875rem] max-[1280px]:[padding-left:1.875rem] max-[991px]:[grid-row-gap:.9rem] max-[991px]:[grid-column-gap:.9rem] max-[768px]:[grid-row-gap:.8rem] max-[768px]:[grid-column-gap:.8rem] max-[768px]:[padding-right:.9375rem] max-[768px]:[padding-left:.9375rem] max-[479px]:[padding-bottom:1.875rem] max-[479px]:[flex-flow:column] max-[479px]:[padding-top:1.5625rem]"
                  }
                >
                  <div
                    className={
                      "w-layout-vflex rt-work-content rt-work-content-gap [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:.5rem] [grid-row-gap:.5rem] [flex:1] [max-width:28.4375rem] [margin-bottom:-.4375rem] max-[1440px]:[margin-bottom:-.1875rem] max-[768px]:[align-items:center] max-[768px]:[justify-content:flex-start]"
                    }
                  >
                    <div className={" [box-sizing:border-box]"}>{copy[2]}</div>
                    <RouteLink
                      className={
                        "rt-text-style-h5 [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                      }
                      to={"/project/contemporary-retreat"}
                    >
                      {copy[3]}
                    </RouteLink>
                  </div>
                  <div
                    className={
                      "rt-card-tag [box-sizing:border-box] [border:.0625rem_solid_black] [border-radius:3.125rem] [padding-top:.2rem] [padding-right:.75rem] [padding-bottom:.2rem] [padding-left:.75rem]"
                    }
                  >
                    <div
                      className={
                        "rt-text-style-button [box-sizing:border-box] [color:black] [font-size:1rem] [line-height:162.5%] [font-weight:500] [letter-spacing:-.01rem] [white-space:nowrap] max-[1280px]:[font-size:.9375rem] max-[991px]:[letter-spacing:.75px] max-[768px]:[letter-spacing:.7px]"
                      }
                    >
                      {copy[4]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <div
                className={
                  "w-layout-vflex rt-card-v5 [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [background-color:rgb(248,248,248)] [border-radius:1.25rem]"
                }
                data-w-id={"f58fe2ab-db51-90b1-b04e-4eb3af609a58"}
              >
                <RouteLink
                  className={
                    "rt-card-v5-top-wrapper rt-radius-large rt-overflow-hidden w-inline-block [box-sizing:border-box] [background-color:#111111] [color:white] [text-decoration:none] [max-width:100%] [display:inline-block] [overflow:hidden] [border-radius:1.25rem] [position:relative]"
                  }
                  to={"/project/modern-facade-study"}
                >
                  <div
                    className={
                      "w-layout-vflex rt-overlay-v12 [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [z-index:1] [background-image:linear-gradient(#0a0a0dab_12%,#0a0a0d00_96%)] [padding-top:2.5rem] [padding-left:2.5rem] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] max-[991px]:[padding-left:1.25rem] max-[991px]:[padding-top:1.25rem]"
                    }
                  >
                    <div
                      className={
                        "w-layout-vflex rt-author [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:3px] [grid-row-gap:3px]"
                      }
                    >
                      <div
                        className={
                          "rt-sub-text [box-sizing:border-box] [font-size:.875rem] [line-height:185%] [font-weight:500] [letter-spacing:-.00875rem]"
                        }
                      >
                        {copy[5]}
                      </div>
                      <div
                        className={
                          "rt-text-style-h5 rt-text-color-white [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:white] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                        }
                      >
                        {copy[6]}
                      </div>
                    </div>
                  </div>
                  <img
                    className={
                      "rt-thumbnail-image rt-ratio-v2 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] [aspect-ratio:863/584]"
                    }
                    src={
                      "/images/69c13f533eec6768deb57d79_thumbnail-image-eleven.webp"
                    }
                    loading={"lazy"}
                    alt={"Portfolio card image"}
                  />
                </RouteLink>
                <div
                  className={
                    "w-layout-hflex rt-card-details [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.5625rem] [grid-row-gap:1.5625rem] [justify-content:space-between] [padding-top:2rem] [padding-right:2.5rem] [padding-bottom:2rem] [padding-left:2.5rem] max-[1280px]:[padding-right:1.875rem] max-[1280px]:[padding-left:1.875rem] max-[991px]:[grid-row-gap:.9rem] max-[991px]:[grid-column-gap:.9rem] max-[768px]:[grid-row-gap:.8rem] max-[768px]:[grid-column-gap:.8rem] max-[768px]:[padding-right:.9375rem] max-[768px]:[padding-left:.9375rem] max-[479px]:[padding-bottom:1.875rem] max-[479px]:[flex-flow:column] max-[479px]:[padding-top:1.5625rem]"
                  }
                >
                  <div
                    className={
                      "w-layout-vflex rt-work-content rt-work-content-gap [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:.5rem] [grid-row-gap:.5rem] [flex:1] [max-width:28.4375rem] [margin-bottom:-.4375rem] max-[1440px]:[margin-bottom:-.1875rem] max-[768px]:[align-items:center] max-[768px]:[justify-content:flex-start]"
                    }
                  >
                    <div className={" [box-sizing:border-box]"}>{copy[7]}</div>
                    <RouteLink
                      className={
                        "rt-text-style-h5 [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                      }
                      to={"/project/modern-facade-study"}
                    >
                      {copy[8]}
                    </RouteLink>
                  </div>
                  <div
                    className={
                      "rt-card-tag [box-sizing:border-box] [border:.0625rem_solid_black] [border-radius:3.125rem] [padding-top:.2rem] [padding-right:.75rem] [padding-bottom:.2rem] [padding-left:.75rem]"
                    }
                  >
                    <div
                      className={
                        "rt-text-style-button [box-sizing:border-box] [color:black] [font-size:1rem] [line-height:162.5%] [font-weight:500] [letter-spacing:-.01rem] [white-space:nowrap] max-[1280px]:[font-size:.9375rem] max-[991px]:[letter-spacing:.75px] max-[768px]:[letter-spacing:.7px]"
                      }
                    >
                      {copy[9]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
