import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function HeroSection() {
  const copy = referenceContent.About.HeroSection;
  return (
    <div
      className={
        "rt-hero-v9-outer-wrapper [box-sizing:border-box] [height:300vh] [position:relative] max-[991px]:[height:auto]"
      }
      data-w-id={"e7284810-8e73-f6a8-f324-0489d356b863"}
    >
      <section
        className={
          "rt-hero-v9 rt-overflow-hidden [box-sizing:border-box] [display:block] [overflow:hidden] [background-color:#111111] [height:100vh] [position:sticky] [top:0] max-[991px]:[height:auto] max-[991px]:[position:static]"
        }
      >
        <div
          className={
            "w-layout-vflex rt-curtain-horizontal rt-overflow-hidden rt-tab-display-none [box-sizing:border-box] [flex-direction:column] [align-items:flex-end] [display:flex] [overflow:hidden] [z-index:999] [pointer-events:none] [justify-content:flex-start] [width:100%] [height:100%] [position:absolute] [top:0%] [right:auto] [bottom:0%] [left:0%] max-[991px]:[display:none]"
          }
        >
          <div
            className={
              "rt-curtain-box rt-curtain-box-1 [box-sizing:border-box] [background-color:#111111] [flex:1] [width:100%]"
            }
            data-w-id={"7c805fbd-8eb0-f40e-c610-2f6379d5c84c"}
          ></div>
          <div
            className={
              "rt-curtain-box rt-curtain-box-2 [box-sizing:border-box] [background-color:#111111] [flex:1] [width:100%]"
            }
            data-w-id={"242acc64-6c0d-9265-bbdf-0e5c9d66b90b"}
          ></div>
          <div
            className={
              "rt-curtain-box rt-curtain-box-3 [box-sizing:border-box] [background-color:#111111] [flex:1] [width:100%]"
            }
            data-w-id={"d1ecc556-bc15-6edd-c080-58da9c73a045"}
          ></div>
        </div>
        <div
          className={
            "rt-overlay-v13 [box-sizing:border-box] [z-index:1] [background-image:linear-gradient(#11111100_25%,#111111e0_81%),linear-gradient(#111111de_7%,#11111100_24%)] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] max-[991px]:[background-image:linear-gradient(#11111100_6%,#111111e0_69%),linear-gradient(#111111c4,#11111100_14%)] max-[991px]:[height:100vh] max-[768px]:[height:70vh]"
          }
        ></div>
        <div
          className={
            "rt-hero-v9-main-image-wrapper [box-sizing:border-box] [transform-origin:100%] [width:79%] [height:100vh] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:auto] max-[991px]:[overflow:hidden] max-[991px]:[height:102vh] max-[991px]:[width:100%] max-[768px]:[height:70vh]"
          }
          data-w-id={"0c9f029c-de8a-1abf-f7af-b5926e85a794"}
        >
          <div
            className={
              "w-layout-vflex rt-slider-image-wrapper rt-overflow-hidden rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [overflow:hidden] [border-radius:1.25rem] [z-index:3] [width:35rem] [height:34.4375rem] [position:absolute] [top:50%] [left:-20.1rem] [transform:translate(-.25rem,-50%)] max-[1920px]:[height:23rem] max-[1920px]:[width:23rem] max-[1920px]:[left:-17.9rem] max-[1440px]:[left:-9.3rem] max-[991px]:[transform:translateY(-75%)] max-[991px]:[height:15rem] max-[991px]:[width:15rem] max-[991px]:[left:.9375rem] max-[768px]:[display:none]"
            }
            data-w-id={"0291228f-ea89-f7ce-c313-d0ac2a67e307"}
          >
            <div
              className={
                "rt-slider-image-1 rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [width:100%] [height:100%]"
              }
              data-w-id={"7ab6c845-19b9-6274-9855-c40b32ee408d"}
            >
              <img
                className={
                  "rt-slider-main-image-1 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                }
                src={
                  "/images/69c254b76332d5673a1d9742_slider-small-image-two.webp"
                }
                loading={"lazy"}
                alt={"slider-small-image-two"}
              />
            </div>
            <div
              className={
                "rt-slider-image-2 rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] [transform:translateY(-100%)]"
              }
              data-w-id={"b466551b-5a37-3e5d-25b3-d368e195a0e5"}
            >
              <img
                className={
                  "rt-slider-main-image-2 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                }
                src={
                  "/images/69c254be278bb308cd9df823_slider-small-image-one.webp"
                }
                loading={"lazy"}
                alt={"hero-image-one"}
              />
            </div>
          </div>
          <div
            className={
              "rt-hero-big-image-v1 [box-sizing:border-box] [background-image:url('/images/69c254b8a33c262e0377516a_slider-large-image-one.webp')] [background-position:50%] [background-repeat:no-repeat] [background-size:cover] [width:100vw] [height:100%]"
            }
            data-w-id={"8b96c7b4-1bc0-0234-98a2-144dce23262e"}
          ></div>
          <div
            className={
              "rt-hero-big-image-v2 [box-sizing:border-box] [background-image:url('/images/69c254b8c54fcfe3f7a7e1d7_slider-large-image-two.webp')] [background-position:50%] [background-repeat:no-repeat] [background-size:cover] [width:100vw] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] [transform:translateY(-100%)]"
            }
            data-w-id={"e6920002-c749-b668-9443-a28ad93e3a02"}
          ></div>
        </div>
        <div
          className={
            "w-layout-blockcontainer rt-container rt-desktop-full-height w-container [box-sizing:border-box] [max-width:111.875rem] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:.9375rem] [padding-left:.9375rem] [height:100%]"
          }
        >
          <div
            className={
              "w-layout-vflex rt-hero-v9-main-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:flex-end] [display:flex] [z-index:4] [justify-content:flex-end] [height:100%] [padding-top:20rem] [padding-bottom:6.875rem] [position:relative] max-[1920px]:[padding-bottom:3rem] max-[991px]:[padding-bottom:4.25rem] max-[991px]:[height:100vh] max-[991px]:[padding-top:35rem] max-[768px]:[padding-bottom:4.15rem] max-[768px]:[height:70vh] max-[768px]:[padding-top:10rem] max-[479px]:[padding-top:8rem]"
            }
          >
            <div
              className={
                "w-layout-vflex rt-herp-v9-content rt-mobile-text-center [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [max-width:51.4375rem] max-[991px]:[max-width:none] max-[479px]:[justify-content:flex-start] max-[479px]:[align-items:center] max-[479px]:[text-align:center]"
              }
            >
              <h1
                className={
                  "rt-gap-off rt-text-color-white rt-gap-medium [box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:.9375rem] [margin-left:0] [font-size:5rem] [font-weight:400] [line-height:104%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:0rem] max-[1280px]:[font-size:2.6rem] max-[991px]:[font-size:2.4rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[font-size:2.1875rem] max-[768px]:[margin-bottom:.7rem] max-[479px]:[font-size:1.875rem]"
                }
                data-w-id={"51270745-a818-0138-bae3-cebdca1f68e8"}
              >
                {copy[0]}
              </h1>
              <div
                className={
                  "w-layout-hflex rt-hero-v1-bottom-wrap rt-desktop-full-width rt-responsive-align-center [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [width:100%] [grid-column-gap:1.5625rem] [grid-row-gap:1.5625rem] [flex-flow:wrap] [justify-content:space-between] max-[991px]:[grid-row-gap:.9rem] max-[991px]:[grid-column-gap:.9rem] max-[768px]:[grid-row-gap:.8rem] max-[768px]:[grid-column-gap:.8rem] max-[479px]:[justify-content:center]"
                }
                data-w-id={"51270745-a818-0138-bae3-cebdca1f68ea"}
              >
                <RouteLink
                  className={
                    "rt-button-v1 rt-radius-xl rt-overflow-hidden w-inline-block [box-sizing:border-box] [background-color:white] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [z-index:2] [grid-column-gap:1.125rem] [grid-row-gap:1.125rem] [border:1px_solid_#fff0] [justify-content:space-between] [align-items:center] [padding-top:.75rem] [padding-right:1.0625rem] [padding-bottom:.75rem] [padding-left:1.0625rem] [position:relative] [border-radius:1.75rem] max-[991px]:[padding-left:.8rem] max-[991px]:[padding-right:.8rem]"
                  }
                  to={"/service"}
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
                      {copy[1]}
                    </div>
                    <div
                      className={
                        "rt-text-style-button rt-button-text-two [box-sizing:border-box] [color:white] [font-size:1rem] [line-height:162.5%] [font-weight:500] [letter-spacing:-.01rem] [white-space:nowrap] [position:absolute] max-[1280px]:[font-size:.9375rem] max-[991px]:[letter-spacing:.75px] max-[768px]:[letter-spacing:.7px]"
                      }
                    >
                      {copy[2]}
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
                    {copy[3]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "w-layout-hflex rt-about-v4 [box-sizing:border-box] [flex-direction:row] [align-items:stretch] [display:flex] [z-index:5] [background-color:white] [height:100vh] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] max-[991px]:[bottom:auto] max-[991px]:[position:relative] max-[991px]:[right:auto] max-[991px]:[height:auto] max-[991px]:[left:auto] max-[991px]:[padding-top:4.375rem] max-[991px]:[top:auto] max-[768px]:[padding-top:4.1875rem]"
          }
        >
          <div
            className={
              "rt-animated-box [box-sizing:border-box] [width:18.5rem] [height:100%] max-[991px]:[display:none]"
            }
          ></div>
          <div
            className={
              "rt-about-main-content [box-sizing:border-box] [flex:1] max-[479px]:[width:100%] max-[479px]:[flex:0_auto]"
            }
          >
            <div
              className={
                "w-layout-blockcontainer rt-container rt-desktop-full-height w-container [box-sizing:border-box] [max-width:111.875rem] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:.9375rem] [padding-left:.9375rem] [height:100%]"
              }
            >
              <div
                className={
                  "w-layout-vflex rt-outer-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [justify-content:center] [height:100%]"
                }
              >
                <div
                  className={
                    "w-layout-hflex rt-about-v4-main-wrapper [box-sizing:border-box] [flex-direction:row] [align-items:stretch] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [justify-content:space-between] max-[991px]:[padding-bottom:0] max-[991px]:[padding-top:0] max-[768px]:[grid-auto-columns:1fr] max-[768px]:[grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))] max-[768px]:[grid-template-rows:auto] max-[768px]:[display:grid] max-[479px]:[grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))]"
                  }
                >
                  <div
                    className={
                      "w-layout-vflex rt-about-v4-left-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [grid-column-gap:1.2rem] [grid-row-gap:1.2rem] [flex:1] [justify-content:space-between] [max-width:66.875rem] [margin-top:-.25rem] max-[768px]:[margin-top:0] max-[479px]:[grid-row-gap:1.5rem] max-[479px]:[grid-column-gap:1.5rem]"
                    }
                  >
                    <div className={" [box-sizing:border-box]"}>
                      <div
                        className={
                          "w-layout-vflex rt-about-top-content rt-mobile-text-center [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [max-width:48.5625rem] [margin-bottom:1.875rem] max-[768px]:[margin-bottom:1rem] max-[479px]:[text-align:center]"
                        }
                      >
                        <h2
                          className={
                            "rt-gap-off rt-gap-medium [box-sizing:border-box] [margin-bottom:.9375rem] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:#111] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[font-size:1.5625rem] max-[768px]:[margin-bottom:.7rem]"
                          }
                          data-w-id={"78b8b02d-70cd-4eda-225e-ec8e1804e6a9"}
                        >
                          {copy[4]}
                        </h2>
                        <p
                          className={
                            "rt-gap-off rt-about-v4-description [box-sizing:border-box] [margin-top:0] [margin-bottom:0] [margin-right:0] [margin-left:0] [max-width:38rem] max-[1920px]:[max-width:43.125rem]"
                          }
                          data-w-id={"9237a154-75c3-da25-bdaa-74ee8e947bc0"}
                        >
                          {copy[5]}
                        </p>
                      </div>
                      <div
                        className={
                          "w-layout-hflex rt-about-bottom-content [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex] [grid-column-gap:1.5625rem] [grid-row-gap:1.5625rem] [justify-content:space-between] max-[991px]:[flex-flow:column] max-[479px]:[align-items:center] max-[479px]:[justify-content:center] max-[479px]:[width:100%]"
                        }
                      >
                        <div
                          className={" [box-sizing:border-box]"}
                          data-w-id={"c8bce90e-72e9-8a51-72eb-c396f28a5537"}
                        >
                          <RouteLink
                            className={
                              "rt-button-v1 rt-radius-xl rt-button-v2 rt-overflow-hidden w-inline-block [box-sizing:border-box] [background-color:white] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [z-index:2] [grid-column-gap:1.125rem] [grid-row-gap:1.125rem] [border:1px_solid_#fff0] [justify-content:space-between] [align-items:center] [padding-top:.75rem] [padding-right:1.0625rem] [padding-bottom:.75rem] [padding-left:1.0625rem] [position:relative] [border-radius:1.75rem] [border-top-color:#111111] [border-right-color:#111111] [border-bottom-color:#111111] [border-left-color:#111111] max-[991px]:[padding-left:.8rem] max-[991px]:[padding-right:.8rem]"
                            }
                            to={"/contact-three"}
                            data-w-id={"184bd1c4-c6ec-dd72-ad6c-8421558d1157"}
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
                                {copy[6]}
                              </div>
                              <div
                                className={
                                  "rt-text-style-button rt-button-text-two rt-text-style-button-v2 [box-sizing:border-box] [color:black] [font-size:1rem] [line-height:162.5%] [font-weight:500] [letter-spacing:-.01rem] [white-space:nowrap] [position:absolute] max-[1280px]:[font-size:.9375rem] max-[991px]:[letter-spacing:.75px] max-[768px]:[letter-spacing:.7px]"
                                }
                              >
                                {copy[7]}
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
                        <div
                          className={
                            "w-layout-hflex rt-project-list rt-landscape-text-center [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex] [flex:1] [max-width:41.25rem] max-[768px]:[text-align:center] max-[479px]:[grid-row-gap:1rem] max-[479px]:[grid-auto-columns:1fr] max-[479px]:[grid-template-columns:repeat(auto-fit,minmax(10rem,1fr))] max-[479px]:[place-items:start_center] max-[479px]:[grid-column-gap:0px] max-[479px]:[width:100%] max-[479px]:[grid-template-rows:auto_auto] max-[479px]:[max-width:none] max-[479px]:[display:grid]"
                          }
                        >
                          <div
                            className={
                              "w-layout-vflex rt-project-item rt-first-item [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:1.25rem] [grid-row-gap:1.25rem] [border-right:.0625rem_solid_#0003] [padding-left:1.875rem] [padding-right:.9375rem] max-[1440px]:[padding-left:.9375rem] max-[768px]:[align-items:center] max-[768px]:[grid-row-gap:.5rem] max-[768px]:[grid-column-gap:.5rem] max-[768px]:[padding-left:0] max-[768px]:[justify-content:flex-start] max-[479px]:[padding-right:.5rem] max-[479px]:[border-right-style:none]"
                            }
                            data-w-id={"2710dced-8a5b-170d-d74c-0352de9b5c81"}
                          >
                            <div
                              className={
                                "rt-text-style-h2 [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:#111] [font-size:2.8125rem] [line-height:115%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                              }
                            >
                              {copy[8]}
                            </div>
                            <p
                              className={
                                "rt-gap-off [box-sizing:border-box] [margin-top:0] [margin-bottom:0] [margin-right:0] [margin-left:0]"
                              }
                            >
                              {copy[9]}
                            </p>
                          </div>
                          <div
                            className={
                              "w-layout-vflex rt-project-item rt-middle-item [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:1.25rem] [grid-row-gap:1.25rem] [border-right:.0625rem_solid_#0003] [padding-left:1.875rem] [padding-right:.9375rem] max-[1440px]:[padding-left:.9375rem] max-[768px]:[align-items:center] max-[768px]:[grid-row-gap:.5rem] max-[768px]:[grid-column-gap:.5rem] max-[768px]:[justify-content:flex-start] max-[479px]:[border-right-style:none]"
                            }
                            data-w-id={"b7ae96e1-c72c-8307-98d9-10dd4f7f2385"}
                          >
                            <div
                              className={
                                "rt-text-style-h2 [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:#111] [font-size:2.8125rem] [line-height:115%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                              }
                            >
                              {copy[10]}
                            </div>
                            <p
                              className={
                                "rt-gap-off [box-sizing:border-box] [margin-top:0] [margin-bottom:0] [margin-right:0] [margin-left:0]"
                              }
                            >
                              {copy[11]}
                            </p>
                          </div>
                          <div
                            className={
                              "w-layout-vflex rt-project-item rt-last-item [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:1.25rem] [grid-row-gap:1.25rem] [border-right:.0625rem_solid_#0003] [padding-left:1.875rem] [padding-right:.9375rem] [border-right-style:none] max-[1440px]:[padding-left:.9375rem] max-[768px]:[align-items:center] max-[768px]:[grid-row-gap:.5rem] max-[768px]:[grid-column-gap:.5rem] max-[768px]:[justify-content:flex-start]"
                            }
                            data-w-id={"02e7d448-2dec-d4d2-07a2-8aee1b0e89c9"}
                          >
                            <div
                              className={
                                "rt-text-style-h2 [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:#111] [font-size:2.8125rem] [line-height:115%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[768px]:[font-size:1.5625rem]"
                              }
                            >
                              {copy[12]}
                            </div>
                            <p
                              className={
                                "rt-gap-off [box-sizing:border-box] [margin-top:0] [margin-bottom:0] [margin-right:0] [margin-left:0]"
                              }
                            >
                              {copy[13]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        "rt-video-v1 rt-overflow-hidden rt-radius-large [box-sizing:border-box] [overflow:hidden] [border-radius:1.25rem] [height:14.5rem] [position:relative]"
                      }
                      data-w-id={"82ef59de-3934-3084-cf6e-5ff59e67488e"}
                    >
                      <div
                        className={
                          "rt-background-video-v4 w-background-video w-background-video-atom [box-sizing:border-box] [color:#fff] [height:auto] [position:absolute] [overflow:hidden] [width:100%] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                        }
                        data-autoplay={"true"}
                        data-loop={"true"}
                      >
                        <video
                          className={
                            " [box-sizing:border-box] [vertical-align:baseline] [display:inline-block] [object-fit:cover] [z-index:-100] [background-position:50%] [background-size:cover] [width:100%] [height:100%] [margin-top:auto] [margin-right:auto] [margin-bottom:auto] [margin-left:auto] [position:absolute] [top:-100%] [right:-100%] [bottom:-100%] [left:-100%] [background-image:url('/images/69954578728987997b665377-69a52591b9cd6b5f70e99a94_17224771-hd_1920_1080_30fps--2-_poster.0000000.jpg')]"
                          }
                          autoPlay={true}
                          loop={true}
                          muted={true}
                          playsInline={true}
                          data-object-fit={"cover"}
                          preload="metadata"
                        >
                          <source
                            className={" [box-sizing:border-box]"}
                            src={
                              "/images/69a52591b9cd6b5f70e99a94_17224771-hd_1920_1080_30fps--2-_mp4.mp4"
                            }
                          />
                        </video>
                        <div
                          className={" [box-sizing:border-box]"}
                          aria-live={"polite"}
                        >
                          <button
                            className={
                              "w-backgroundvideo-backgroundvideoplaypausebutton rt-play-pause-button rt-radius-xxl w-background-video--control [box-sizing:border-box] [color:inherit] [font:inherit] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [overflow:visible] [text-transform:none] [cursor:pointer] [border:0] [background-color:#ffffff26] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [position:absolute] [bottom:1.875rem] [right:auto] [border-radius:100%] [backdrop-filter:blur(.5625rem)] [justify-content:center] [align-items:center] [width:5rem] [height:5rem] [display:flex] [top:auto] [left:1.875rem] max-[1920px]:[bottom:.9375rem] max-[1920px]:[left:.9375rem] max-[1440px]:[height:3rem] max-[1440px]:[width:3rem]"
                            }
                            type={"button"}
                            data-w-bg-video-control={"true"}
                            aria-controls={
                              "3c03e9ef-b0d0-e21a-5a57-14f64bbac9f3-video"
                            }
                          >
                            <span
                              className={
                                "rt-play-state [box-sizing:border-box] [justify-content:center] [align-items:center] [width:1.125rem] [display:flex] max-[1440px]:[width:.8rem]"
                              }
                            >
                              <img
                                className={
                                  " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                                }
                                src={
                                  "/images/699ecb5e4072136d8f101d18_Group-2147226904.svg"
                                }
                                loading={"eager"}
                                alt={"Pause video"}
                              />
                            </span>
                            <span
                              className={
                                "rt-play-state rt-pause [box-sizing:border-box] [display:none] [justify-content:center] [align-items:center] [width:1.125rem] [margin-left:.1875rem] max-[1440px]:[width:.8rem]"
                              }
                              hidden={true}
                            >
                              <img
                                className={
                                  " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                                }
                                loading={"eager"}
                                alt={"Play video"}
                                src={
                                  "/images/699c327494dde53f0c53d461_Vector---2026-02-23T162618.382.svg"
                                }
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                      <div
                        className={
                          "rt-white-overlay [box-sizing:border-box] [background-color:white] [pointer-events:none] [width:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:auto] [z-index:3] max-[1920px]:[z-index:initial]"
                        }
                      ></div>
                    </div>
                  </div>
                  <div
                    className={
                      "w-layout-vflex rt-about-v4-right-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [flex:1] [max-width:33.5rem] max-[768px]:[max-width:none]"
                    }
                  >
                    <div
                      className={
                        "rt-content-grid-box rt-desktop-full-width rt-image-v4 [box-sizing:border-box] [width:100%] [flex:1] [position:relative] [min-height:44.1875rem] max-[1920px]:[min-height:20rem] max-[991px]:[min-height:28rem]"
                      }
                    >
                      <div
                        className={
                          "rt-while-scrolling-effect [box-sizing:border-box] [z-index:1] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                        }
                      >
                        <div
                          className={
                            "w-layout-hflex rt-image-animation-trigger rt-desktop-full-width rt-overflow-hidden [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [overflow:hidden] [width:100%] [z-index:10] [border-radius:1.25rem] [justify-content:center] [height:100%] [position:absolute]"
                          }
                          data-w-id={"a9790fe1-0b1d-d199-b26f-bb729e4b08c8"}
                        >
                          <div
                            className={
                              "w-layout-vflex rt-parallax-animation [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [z-index:1] [justify-content:center] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                            }
                            data-w-id={"a9790fe1-0b1d-d199-b26f-bb729e4b08c9"}
                          >
                            <div
                              className={
                                "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:rgba(252,242,232,0.54)] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                              }
                            ></div>
                            <div
                              className={
                                "rt-animation-color-bg [box-sizing:border-box] [z-index:15] [background-color:black] [display:block] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                              }
                            ></div>
                            <div
                              className={
                                "rt-cover-image rt-parallax rt-image-v8 [box-sizing:border-box] [z-index:1] [background-image:url('/images/69a5343ff770ec5d47776732_overview-image--2-.webp')] [background-position:50%] [background-repeat:no-repeat] [background-size:cover] [width:100%] [height:110%] [position:absolute] max-[991px]:[height:100%]"
                              }
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
