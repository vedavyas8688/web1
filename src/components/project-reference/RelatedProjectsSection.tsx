import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function RelatedProjectsSection() {
  const copy = referenceContent.ProjectReference.RelatedProjectsSection;
  return (
    <section
      className={
        "rt-latest-projects [box-sizing:border-box] [display:block] [padding-bottom:8.3125rem] max-[991px]:[padding-bottom:3.9375rem]"
      }
    >
      <div
        className={
          "w-layout-blockcontainer rt-container-tiny w-container [box-sizing:border-box] [max-width:82.5rem] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:.9375rem] [padding-left:.9375rem]"
        }
      >
        <div
          className={
            "w-layout-vflex rt-projects-main-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] max-[479px]:[align-items:center] max-[479px]:[justify-content:flex-start]"
          }
        >
          <div
            className={
              "rt-text-style-h3 rt-gap-extra-large [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:#111] [font-size:1.875rem] [line-height:120%] [font-weight:500] [letter-spacing:.0625rem] [margin-bottom:2.875rem] max-[1280px]:[font-size:1.7rem] max-[991px]:[font-size:1.625rem] max-[991px]:[margin-bottom:1.6875rem] max-[768px]:[font-size:1.375rem] max-[768px]:[margin-bottom:1.4rem] max-[479px]:[margin-bottom:1rem]"
            }
            data-w-id={"1ed9a9a0-293b-b1fa-a33c-78b02788cf17"}
          >
            {copy[0]}
          </div>
          <div className={"w-dyn-list [box-sizing:border-box]"}>
            <div
              className={
                "rt-card-v2-main-wrapper rt-card-v2-main-wrapper-v2 w-dyn-items [box-sizing:border-box] [grid-column-gap:2.5rem] [grid-row-gap:2.5rem] [grid-template-rows:auto] [grid-template-columns:1fr_1fr] [grid-auto-columns:1fr] [display:grid] max-[1440px]:[grid-row-gap:1.875rem] max-[1440px]:[grid-column-gap:1.875rem] max-[768px]:[grid-row-gap:1.25rem] max-[479px]:[grid-template-columns:1fr]"
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
                  data-w-id={"eb15f8af-d9fc-788e-fae0-b09d467871f6"}
                >
                  <RouteLink
                    className={
                      "rt-thumbnail-image-wrapper rt-radius-large rt-overflow-hidden w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
                    }
                    to={"/project/timeless-structure"}
                  >
                    <img
                      className={
                        "rt-thumbnail-image rt-ratio-v1 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] [aspect-ratio:830/700]"
                      }
                      src={
                        "/images/69c140e5c31221225eb26e3f_thumbnail-image-five--4-.webp"
                      }
                      loading={"lazy"}
                      alt={"Card thumbnail image"}
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
                      data-w-id={"eb15f8af-d9fc-788e-fae0-b09d467871fa"}
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
                        <h2
                          className={
                            "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                          }
                        >
                          {copy[12]}
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
                    <RouteLink
                      className={
                        "rt-text-style-h5 [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                      }
                      to={"/project/timeless-structure"}
                    >
                      {copy[13]}
                    </RouteLink>
                    <div className={" [box-sizing:border-box]"}>{copy[14]}</div>
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
                  data-w-id={"eb15f8af-d9fc-788e-fae0-b09d467871f6"}
                >
                  <RouteLink
                    className={
                      "rt-thumbnail-image-wrapper rt-radius-large rt-overflow-hidden w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
                    }
                    to={"/project/refined-living"}
                  >
                    <img
                      className={
                        "rt-thumbnail-image rt-ratio-v1 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] [aspect-ratio:830/700]"
                      }
                      src={
                        "/images/69c1407c7e6fef06d3fe8b10_thumbnail-image-four--5-.webp"
                      }
                      loading={"lazy"}
                      alt={"Card thumbnail image"}
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
                      data-w-id={"eb15f8af-d9fc-788e-fae0-b09d467871fa"}
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
                        <h2
                          className={
                            "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                          }
                        >
                          {copy[26]}
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
                    <RouteLink
                      className={
                        "rt-text-style-h5 [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                      }
                      to={"/project/refined-living"}
                    >
                      {copy[27]}
                    </RouteLink>
                    <div className={" [box-sizing:border-box]"}>{copy[28]}</div>
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
