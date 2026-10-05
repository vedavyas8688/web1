import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function CommercialSection() {
  const copy = referenceContent.Services.CommercialSection;
  return (
    <section
      className={
        "rt-service-v3 [box-sizing:border-box] [display:block] [background-color:#111111] [position:relative]"
      }
      data-wf--rt-service-v2--variant={"change-background-color"}
    >
      <div
        className={
          "w-layout-hflex rt-service-v3-main-wrapper [box-sizing:border-box] [flex-direction:row] [align-items:stretch] [display:flex] max-[768px]:[grid-template-rows:auto] max-[768px]:[display:grid] max-[768px]:[grid-auto-columns:1fr] max-[768px]:[grid-template-columns:repeat(auto-fit,minmax(17rem,1fr))]"
        }
      >
        <div
          className={
            "w-layout-vflex rt-service-v3-left-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [flex:1] [justify-content:center]"
          }
        >
          <div
            className={
              "w-layout-vflex rt-service-image-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [width:100%] [height:100%] [padding-top:8.3125rem] [padding-right:.9375rem] [padding-bottom:8.3125rem] [padding-left:.9375rem] [justify-content:center] [position:relative] max-[991px]:[padding-bottom:3.9375rem] max-[991px]:[padding-top:3.9375rem] max-[479px]:[min-height:auto]"
            }
          >
            <div
              className={
                "w-layout-hflex rt-service-image-wrap rt-overflow-hidden rt-radius-large [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [max-width:39.4375rem] max-[991px]:[position:static] max-[991px]:[height:100%]"
              }
              data-w-id={"c7588d41-03cf-6fb6-b7b6-1497ac7f2968"}
            >
              <img
                className={
                  "rt-service-v3-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] max-[991px]:[width:auto] max-[479px]:[width:100%]"
                }
                loading={"lazy"}
                src={"/images/69a563cb120b8417cd91727b_service-image.webp"}
                alt={"service-image"}
              />
            </div>
          </div>
        </div>
        <div
          className={
            "w-layout-vflex rt-service-v3-right-wrapper w-variant-03f8f8c7-c2ee-d0ce-98ec-79d93d5bda16 [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [background-color:#f4f4f4] [flex:1] [justify-content:space-between]"
          }
        >
          <div
            className={
              "w-layout-vflex rt-service-v3-main-content [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [padding-top:6rem] [padding-right:.9375rem6.25rem] [padding-bottom:6rem] [padding-left:.9375rem6.25rem] [margin-left:11.64%] max-[1280px]:[margin-left:initial] max-[991px]:[padding-bottom:4.375rem] max-[991px]:[padding-top:4.125rem]"
            }
          >
            <div
              className={
                "w-layout-vflex rt-service-v3-top-content [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [max-width:35.3125rem] [margin-bottom:6.25rem] max-[1280px]:[margin-bottom:2rem] max-[991px]:[margin-bottom:1rem] max-[768px]:[max-width:none]"
              }
            >
              <h2
                className={
                  "rt-gap-off rt-gap-medium [box-sizing:border-box] [margin-bottom:.9375rem] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:#111] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[font-size:1.5625rem] max-[768px]:[margin-bottom:.7rem]"
                }
                data-heading-title={"1"}
                data-w-id={"c7588d41-03cf-6fb6-b7b6-1497ac7f2971"}
              >
                {copy[0]}
              </h2>
              <p
                className={
                  "rt-gap-off rt-gap-large [box-sizing:border-box] [margin-top:0] [margin-bottom:1.5625rem] [margin-right:0] [margin-left:0] max-[991px]:[margin-bottom:.9rem] max-[768px]:[margin-bottom:.8rem]"
                }
                data-w-id={"c7588d41-03cf-6fb6-b7b6-1497ac7f2973"}
              >
                {copy[1]}
              </p>
              <div
                className={" [box-sizing:border-box]"}
                data-w-id={"c7588d41-03cf-6fb6-b7b6-1497ac7f2975"}
              >
                <RouteLink
                  className={
                    "rt-button-v1 rt-radius-xl rt-button-v2 rt-overflow-hidden w-inline-block w--current [box-sizing:border-box] [background-color:white] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [z-index:2] [grid-column-gap:1.125rem] [grid-row-gap:1.125rem] [border:1px_solid_#fff0] [justify-content:space-between] [align-items:center] [padding-top:.75rem] [padding-right:1.0625rem] [padding-bottom:.75rem] [padding-left:1.0625rem] [position:relative] [border-radius:1.75rem] [border-top-color:#111111] [border-right-color:#111111] [border-bottom-color:#111111] [border-left-color:#111111] max-[991px]:[padding-left:.8rem] max-[991px]:[padding-right:.8rem]"
                  }
                  to={"/service"}
                  data-w-id={"184bd1c4-c6ec-dd72-ad6c-8421558d1157"}
                  aria-current={"page"}
                >
                  <div
                    className={
                      "w-layout-vflex rt-button-text-wrapper rt-overflow-hidden [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [overflow:hidden] [position:relative]"
                    }
                  >
                    <div
                      className={
                        "rt-text-style-button rt-button-text-one rt-text-style-button-v2 [box-sizing:border-box] [color:white] [font-size:1rem] [line-height:162.5%] [font-weight:500] [letter-spacing:-.01rem] [white-space:nowrap] max-[1280px]:[font-size:.9375rem] max-[991px]:[letter-spacing:.75px] max-[768px]:[letter-spacing:.7px]"
                      }
                    >
                      {copy[2]}
                    </div>
                    <div
                      className={
                        "rt-text-style-button rt-button-text-two rt-text-style-button-v2 [box-sizing:border-box] [color:black] [font-size:1rem] [line-height:162.5%] [font-weight:500] [letter-spacing:-.01rem] [white-space:nowrap] [position:absolute] max-[1280px]:[font-size:.9375rem] max-[991px]:[letter-spacing:.75px] max-[768px]:[letter-spacing:.7px]"
                      }
                    >
                      {copy[3]}
                    </div>
                  </div>
                  <div
                    className={
                      "w-layout-hflex rt-button-v1-arrow-wrap rt-radius-xxl rt-button-v1-arrow-wrap-2 [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [background-color:#fff] [flex:none] [justify-content:center] [width:1.75rem] [height:1.75rem] [border-radius:100%]"
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
                          "/images/6996a06bdb876d95fee3c8ba_Group-2147226297--1-.svg"
                        }
                        loading={"eager"}
                      />
                      <img
                        className={
                          "rt-button-arrow-out [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] [position:absolute]"
                        }
                        alt={""}
                        src={
                          "/images/6996a06b75584db3f08fa728_Group-2147226297.svg"
                        }
                        loading={"eager"}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      "rt-button-overlay-1 rt-button-overlay-2 [box-sizing:border-box] [z-index:-1] [border:.0625rem_solid_#fff0] [background-color:#111111] [pointer-events:none] [border-radius:1.75rem] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                    }
                  ></div>
                </RouteLink>
              </div>
            </div>
            <div
              className={
                "w-layout-vflex rt-overview-v1-bottom-content rt-desktop-full-width rt-overview-v1-bottom-content-2 [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [width:100%] [align-self:flex-start] [max-width:25.8125rem] max-[1280px]:[align-self:stretch] max-[768px]:[max-width:none]"
              }
              data-w-id={"c7588d41-03cf-6fb6-b7b6-1497ac7f2977"}
            >
              <RouteLink
                className={
                  "rt-overview-main-item rt-item-1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [border-bottom:.0625rem_solid_#0000004d] [justify-content:space-between] [align-items:center] [padding-top:1.25rem] [padding-bottom:1.25rem] max-[768px]:[grid-row-gap:.9375rem] max-[768px]:[grid-column-gap:.9375rem]"
                }
                data-w-id={"c7588d41-03cf-6fb6-b7b6-1497ac7f2978"}
                to={"/about"}
              >
                <div
                  className={
                    "rt-overview-v1-item-text-wrapper rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [position:relative]"
                  }
                >
                  <div
                    className={
                      "rt-text-style-h5 rt-text-1 [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:#111] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                    }
                  >
                    {copy[4]}
                  </div>
                  <div
                    className={
                      "rt-text-style-h5 rt-text-2 [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:#111] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                    }
                  >
                    {copy[5]}
                  </div>
                </div>
                <div
                  className={
                    "w-layout-vflex rt-overview-v1-icon-wrap rt-overflow-hidden [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [overflow:hidden] [justify-content:center] [position:relative]"
                  }
                >
                  <img
                    className={
                      "rt-arrow-1 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                    }
                    loading={"eager"}
                    src={"/images/699bfb438317a32ea5edc245_Vector-1025.svg"}
                    alt={""}
                  />
                  <img
                    className={
                      "rt-arrow-2 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                    }
                    loading={"eager"}
                    src={"/images/699bfb438317a32ea5edc245_Vector-1025.svg"}
                    alt={""}
                  />
                </div>
              </RouteLink>
              <RouteLink
                className={
                  "rt-overview-main-item rt-item-2 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [border-bottom:.0625rem_solid_#0000004d] [justify-content:space-between] [align-items:center] [padding-top:1.25rem] [padding-bottom:1.25rem] max-[768px]:[grid-row-gap:.9375rem] max-[768px]:[grid-column-gap:.9375rem]"
                }
                data-w-id={"c7588d41-03cf-6fb6-b7b6-1497ac7f2981"}
                to={"/about"}
              >
                <div
                  className={
                    "rt-overview-v1-item-text-wrapper rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [position:relative]"
                  }
                >
                  <div
                    className={
                      "rt-text-style-h5 rt-text-1 [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:#111] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                    }
                  >
                    {copy[6]}
                  </div>
                  <div
                    className={
                      "rt-text-style-h5 rt-text-2 [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:#111] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                    }
                  >
                    {copy[7]}
                  </div>
                </div>
                <div
                  className={
                    "w-layout-vflex rt-overview-v1-icon-wrap rt-overflow-hidden [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [overflow:hidden] [justify-content:center] [position:relative]"
                  }
                >
                  <img
                    className={
                      "rt-arrow-1 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                    }
                    loading={"eager"}
                    src={"/images/699bfb438317a32ea5edc245_Vector-1025.svg"}
                    alt={""}
                  />
                  <img
                    className={
                      "rt-arrow-2 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                    }
                    loading={"eager"}
                    src={"/images/699bfb438317a32ea5edc245_Vector-1025.svg"}
                    alt={""}
                  />
                </div>
              </RouteLink>
              <RouteLink
                className={
                  "rt-overview-main-item rt-item-3 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [border-bottom:.0625rem_solid_#0000004d] [justify-content:space-between] [align-items:center] [padding-top:1.25rem] [padding-bottom:1.25rem] max-[768px]:[grid-row-gap:.9375rem] max-[768px]:[grid-column-gap:.9375rem]"
                }
                data-w-id={"c7588d41-03cf-6fb6-b7b6-1497ac7f298a"}
                to={"/about"}
              >
                <div
                  className={
                    "rt-overview-v1-item-text-wrapper rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [position:relative]"
                  }
                >
                  <div
                    className={
                      "rt-text-style-h5 rt-text-1 [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:#111] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                    }
                  >
                    {copy[8]}
                  </div>
                  <div
                    className={
                      "rt-text-style-h5 rt-text-2 [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:#111] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                    }
                  >
                    {copy[9]}
                  </div>
                </div>
                <div
                  className={
                    "w-layout-vflex rt-overview-v1-icon-wrap rt-overflow-hidden [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [overflow:hidden] [justify-content:center] [position:relative]"
                  }
                >
                  <img
                    className={
                      "rt-arrow-1 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                    }
                    loading={"eager"}
                    src={"/images/699bfb438317a32ea5edc245_Vector-1025.svg"}
                    alt={""}
                  />
                  <img
                    className={
                      "rt-arrow-2 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                    }
                    loading={"eager"}
                    src={"/images/699bfb438317a32ea5edc245_Vector-1025.svg"}
                    alt={""}
                  />
                </div>
              </RouteLink>
            </div>
          </div>
          <div
            className={
              "rt-landscape-display-none [box-sizing:border-box] max-[768px]:[display:none]"
            }
          >
            <div
              className={
                "rt-content-grid-box rt-desktop-full-width rt-image-v5 [box-sizing:border-box] [width:100%] [flex:1] [position:relative] [min-height:13.9375rem]"
              }
            >
              <div
                className={
                  "rt-while-scrolling-effect [box-sizing:border-box] [z-index:1] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                }
              >
                <div
                  className={
                    "w-layout-hflex rt-image-animation-trigger rt-desktop-full-width rt-overflow-hidden rt-radius-off [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [overflow:hidden] [width:100%] [z-index:10] [border-radius:0] [justify-content:center] [height:100%] [position:absolute]"
                  }
                >
                  <div
                    className={
                      "w-layout-vflex rt-parallax-animation [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [z-index:1] [justify-content:center] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                    }
                  >
                    <div
                      className={
                        "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:#f4f4f48f] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                      }
                    ></div>
                    <div
                      className={
                        "rt-animation-color-bg [box-sizing:border-box] [z-index:15] [background-color:black] [display:none] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                      }
                    ></div>
                    <div
                      className={
                        "rt-cover-image rt-parallax rt-image-v9 [box-sizing:border-box] [z-index:1] [background-image:url('/images/69a533a4252f3181e361f958_service-small-image.webp')] [background-position:50%] [background-repeat:no-repeat] [background-size:cover] [width:100%] [height:110%] [position:absolute] max-[991px]:[height:100%]"
                      }
                    ></div>
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
