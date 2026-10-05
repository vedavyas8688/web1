import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function FeaturedProjectsSection() {
  const copy = referenceContent.Portfolio.FeaturedProjectsSection;
  return (
    <section
      className={
        "rt-card-v4 rt-top-gap [box-sizing:border-box] [display:block] [padding-bottom:8.3125rem] [background-color:#f4f4f4] [padding-top:8.75rem] max-[991px]:[padding-bottom:3.9375rem] max-[991px]:[padding-top:4.375rem]"
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
              "rt-card-v2-main-wrapper w-dyn-items [box-sizing:border-box] [grid-column-gap:2.5rem] [grid-row-gap:2.5rem] [grid-template-rows:auto] [grid-template-columns:1fr_1fr_1fr] [grid-auto-columns:1fr] [display:grid] max-[1440px]:[grid-row-gap:1.875rem] max-[1440px]:[grid-column-gap:1.875rem] max-[768px]:[grid-row-gap:1.25rem] max-[768px]:[grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] max-[479px]:[grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]"
            }
            role={"list"}
          >
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <div
                className={
                  "w-layout-vflex rt-portfolio-card [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex]"
                }
                data-w-id={"640f1145-bc92-537b-8b6b-bb2ed4c45e5f"}
              >
                <RouteLink
                  className={
                    "rt-thumbnail-image-wrapper rt-radius-large rt-overflow-hidden w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
                  }
                  to={"/project/minimal-space-design"}
                >
                  <img
                    className={
                      "rt-thumbnail-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                    }
                    src={
                      "/images/69c218ed01e8fcd274379bf7_thumbnail-image-nine--2-.webp"
                    }
                    loading={"lazy"}
                    alt={"Portfolio card image"}
                  />
                  <div
                    className={
                      "rt-overlay-v8 [box-sizing:border-box] [pointer-events:none] [background-color:#0000004d] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                    }
                  ></div>
                  <div
                    className={
                      "w-layout-hflex rt-portfolio-marquee [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [justify-content:flex-start] [width:100%] [position:absolute]"
                    }
                    data-w-id={"640f1145-bc92-537b-8b6b-bb2ed4c45e63"}
                  >
                    <div
                      className={
                        "w-layout-hflex rt-portfolio-marquee-train [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [flex:none] [justify-content:flex-start] [padding-left:.9375rem] [padding-right:.9375rem]"
                      }
                    >
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[0]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[1]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[2]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[3]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                    </div>
                    <div
                      className={
                        "w-layout-hflex rt-portfolio-marquee-train [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [flex:none] [justify-content:flex-start] [padding-left:.9375rem] [padding-right:.9375rem]"
                      }
                    >
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[4]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[5]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[6]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[7]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                    </div>
                    <div
                      className={
                        "w-layout-hflex rt-portfolio-marquee-train [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [flex:none] [justify-content:flex-start] [padding-left:.9375rem] [padding-right:.9375rem]"
                      }
                    >
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[8]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[9]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[10]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[11]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                    </div>
                  </div>
                </RouteLink>
                <div
                  className={
                    "w-layout-vflex rt-portfolio-card-content [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:.5rem] [grid-row-gap:.5rem] [padding-top:1.875rem] max-[768px]:[padding-top:1.25rem] max-[479px]:[grid-row-gap:.2rem] max-[479px]:[padding-top:1.1rem] max-[479px]:[grid-column-gap:.2rem]"
                  }
                >
                  <div className={" [box-sizing:border-box]"}>{copy[12]}</div>
                  <RouteLink
                    className={
                      "rt-text-style-h5 [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                    }
                    to={"/project/minimal-space-design"}
                  >
                    {copy[13]}
                  </RouteLink>
                </div>
              </div>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <div
                className={
                  "w-layout-vflex rt-portfolio-card [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex]"
                }
                data-w-id={"640f1145-bc92-537b-8b6b-bb2ed4c45e5f"}
              >
                <RouteLink
                  className={
                    "rt-thumbnail-image-wrapper rt-radius-large rt-overflow-hidden w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
                  }
                  to={"/project/concrete-harmony"}
                >
                  <img
                    className={
                      "rt-thumbnail-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                    }
                    src={
                      "/images/69c218af66904c3a0ef7b5ae_thumbnail-image-eight--3-.webp"
                    }
                    loading={"lazy"}
                    alt={"Portfolio card image"}
                  />
                  <div
                    className={
                      "rt-overlay-v8 [box-sizing:border-box] [pointer-events:none] [background-color:#0000004d] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                    }
                  ></div>
                  <div
                    className={
                      "w-layout-hflex rt-portfolio-marquee [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [justify-content:flex-start] [width:100%] [position:absolute]"
                    }
                    data-w-id={"640f1145-bc92-537b-8b6b-bb2ed4c45e63"}
                  >
                    <div
                      className={
                        "w-layout-hflex rt-portfolio-marquee-train [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [flex:none] [justify-content:flex-start] [padding-left:.9375rem] [padding-right:.9375rem]"
                      }
                    >
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[14]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[15]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[16]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[17]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                    </div>
                    <div
                      className={
                        "w-layout-hflex rt-portfolio-marquee-train [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [flex:none] [justify-content:flex-start] [padding-left:.9375rem] [padding-right:.9375rem]"
                      }
                    >
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[18]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[19]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[20]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[21]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                    </div>
                    <div
                      className={
                        "w-layout-hflex rt-portfolio-marquee-train [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [flex:none] [justify-content:flex-start] [padding-left:.9375rem] [padding-right:.9375rem]"
                      }
                    >
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[22]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[23]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[24]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[25]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                    </div>
                  </div>
                </RouteLink>
                <div
                  className={
                    "w-layout-vflex rt-portfolio-card-content [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:.5rem] [grid-row-gap:.5rem] [padding-top:1.875rem] max-[768px]:[padding-top:1.25rem] max-[479px]:[grid-row-gap:.2rem] max-[479px]:[padding-top:1.1rem] max-[479px]:[grid-column-gap:.2rem]"
                  }
                >
                  <div className={" [box-sizing:border-box]"}>{copy[26]}</div>
                  <RouteLink
                    className={
                      "rt-text-style-h5 [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                    }
                    to={"/project/concrete-harmony"}
                  >
                    {copy[27]}
                  </RouteLink>
                </div>
              </div>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <div
                className={
                  "w-layout-vflex rt-portfolio-card [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex]"
                }
                data-w-id={"640f1145-bc92-537b-8b6b-bb2ed4c45e5f"}
              >
                <RouteLink
                  className={
                    "rt-thumbnail-image-wrapper rt-radius-large rt-overflow-hidden w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
                  }
                  to={"/project/spatial-innovation"}
                >
                  <img
                    className={
                      "rt-thumbnail-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                    }
                    src={
                      "/images/69c217ac52b9e12c9a3894c9_thumbnail-image-seven--4-.webp"
                    }
                    loading={"lazy"}
                    alt={"Portfolio card image"}
                  />
                  <div
                    className={
                      "rt-overlay-v8 [box-sizing:border-box] [pointer-events:none] [background-color:#0000004d] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                    }
                  ></div>
                  <div
                    className={
                      "w-layout-hflex rt-portfolio-marquee [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [justify-content:flex-start] [width:100%] [position:absolute]"
                    }
                    data-w-id={"640f1145-bc92-537b-8b6b-bb2ed4c45e63"}
                  >
                    <div
                      className={
                        "w-layout-hflex rt-portfolio-marquee-train [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [flex:none] [justify-content:flex-start] [padding-left:.9375rem] [padding-right:.9375rem]"
                      }
                    >
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[28]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[29]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[30]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[31]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                    </div>
                    <div
                      className={
                        "w-layout-hflex rt-portfolio-marquee-train [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [flex:none] [justify-content:flex-start] [padding-left:.9375rem] [padding-right:.9375rem]"
                      }
                    >
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[32]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[33]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[34]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[35]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                    </div>
                    <div
                      className={
                        "w-layout-hflex rt-portfolio-marquee-train [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [flex:none] [justify-content:flex-start] [padding-left:.9375rem] [padding-right:.9375rem]"
                      }
                    >
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[36]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[37]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[38]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                      <h2
                        className={
                          "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                        }
                      >
                        {copy[39]}
                      </h2>
                      <div
                        className={
                          "rt-separator [box-sizing:border-box] [background-color:white] [width:.125rem] [height:2.5rem]"
                        }
                      ></div>
                    </div>
                  </div>
                </RouteLink>
                <div
                  className={
                    "w-layout-vflex rt-portfolio-card-content [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:.5rem] [grid-row-gap:.5rem] [padding-top:1.875rem] max-[768px]:[padding-top:1.25rem] max-[479px]:[grid-row-gap:.2rem] max-[479px]:[padding-top:1.1rem] max-[479px]:[grid-column-gap:.2rem]"
                  }
                >
                  <div className={" [box-sizing:border-box]"}>{copy[40]}</div>
                  <RouteLink
                    className={
                      "rt-text-style-h5 [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                    }
                    to={"/project/spatial-innovation"}
                  >
                    {copy[41]}
                  </RouteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
