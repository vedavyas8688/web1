import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function ShowcaseSection() {
  const copy = referenceContent.HomeOne.ShowcaseSection;
  return (
    <section
      className={
        "rt-showcase-v1 rt-overflow-hidden [box-sizing:border-box] [display:block] [overflow:hidden] [padding-top:8.75rem] [padding-bottom:8.75rem] max-[991px]:[padding-bottom:4.375rem] max-[991px]:[padding-top:4.375rem]"
      }
      data-w-id={"4c2f872c-d5e9-0e1f-8d61-c603e4f9e00a"}
    >
      <div
        className={
          "w-layout-blockcontainer rt-container w-container [box-sizing:border-box] [max-width:111.875rem] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:.9375rem] [padding-left:.9375rem]"
        }
      >
        <div
          className={
            "w-layout-hflex rt-showcase-v1-main-wrapper [box-sizing:border-box] [flex-direction:row] [align-items:stretch] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [justify-content:space-between] max-[991px]:[grid-row-gap:1.25rem] max-[991px]:[grid-column-gap:1.25rem] max-[768px]:[grid-auto-columns:1fr] max-[768px]:[flex-flow:column] max-[768px]:[grid-template-columns:repeat(auto-fit,minmax(17.5rem,1fr))] max-[768px]:[grid-template-rows:auto_auto] max-[768px]:[display:grid]"
          }
        >
          <div
            className={
              "w-layout-vflex rt-showcase-col rt-showcase-col-1 rt-overflow-hidden [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [overflow:hidden] [flex:1] [z-index:50] [border-radius:1.25rem] [justify-content:center] [max-width:47.1875rem] [padding-top:16.25rem] [padding-bottom:16.25rem] [position:relative] max-[1280px]:[padding-bottom:6rem] max-[1280px]:[padding-top:6rem] max-[768px]:[padding-bottom:8rem] max-[768px]:[max-width:none] max-[768px]:[padding-top:8rem]"
            }
            data-w-id={"12040a25-458d-21f0-d7ea-6fd02abf4e80"}
          >
            <div
              className={
                "rt-background-video-v1 w-background-video w-background-video-atom [box-sizing:border-box] [color:#fff] [height:100%] [position:absolute] [overflow:hidden] [z-index:1] [filter:blur(.5rem)] [width:100%] [top:0%] [right:0%] [bottom:0%] [left:0%] max-[991px]:[display:none]"
              }
              data-autoplay={"true"}
              data-loop={"true"}
            >
              <video
                className={
                  " [box-sizing:border-box] [vertical-align:baseline] [display:inline-block] [object-fit:cover] [z-index:-100] [background-position:50%] [background-size:cover] [width:100%] [height:100%] [margin-top:auto] [margin-right:auto] [margin-bottom:auto] [margin-left:auto] [position:absolute] [top:-100%] [right:-100%] [bottom:-100%] [left:-100%] [background-image:url('/images/69954578728987997b665377-69970770740693b0dcb7ba1d_17224771-hd_1920_1080_30fps_poster.0000000.jpg')]"
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
                    "/images/69954578728987997b665377-69970770740693b0dcb7ba1d_17224771-hd_1920_1080_30fps_mp4.mp4"
                  }
                />
              </video>
            </div>
            <div
              className={
                "rt-background-video-v2 rt-radius-medium w-background-video w-background-video-atom [box-sizing:border-box] [color:#fff] [height:29rem] [position:absolute] [overflow:hidden] [border-radius:.9375rem] [z-index:2] [margin-left:1.875rem] [margin-right:1.875rem] [top:50%] [right:0%] [bottom:0%] [left:0%] [transform:translateY(-50%)] max-[1440px]:[height:27.25rem] max-[1280px]:[height:auto] max-[991px]:[margin-right:0] max-[991px]:[height:100%] max-[991px]:[margin-left:0]"
              }
              data-autoplay={"true"}
              data-loop={"true"}
            >
              <video
                className={
                  " [box-sizing:border-box] [vertical-align:baseline] [display:inline-block] [object-fit:cover] [z-index:-100] [background-position:50%] [background-size:cover] [width:100%] [height:100%] [margin-top:auto] [margin-right:auto] [margin-bottom:auto] [margin-left:auto] [position:absolute] [top:-100%] [right:-100%] [bottom:-100%] [left:-100%] [background-image:url('/images/69954578728987997b665377-69970770740693b0dcb7ba1d_17224771-hd_1920_1080_30fps_poster.0000000.jpg')]"
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
                    "/images/69954578728987997b665377-69970770740693b0dcb7ba1d_17224771-hd_1920_1080_30fps_mp4.mp4"
                  }
                />
              </video>
              <div className={" [box-sizing:border-box]"} aria-live={"polite"}>
                <button
                  className={
                    "w-backgroundvideo-backgroundvideoplaypausebutton rt-play-pause-button rt-radius-xxl w-background-video--control [box-sizing:border-box] [color:inherit] [font:inherit] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [overflow:visible] [text-transform:none] [cursor:pointer] [border:0] [background-color:#ffffff26] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [position:absolute] [bottom:1.875rem] [right:auto] [border-radius:100%] [backdrop-filter:blur(.5625rem)] [justify-content:center] [align-items:center] [width:5rem] [height:5rem] [display:flex] [top:auto] [left:1.875rem] max-[1920px]:[bottom:.9375rem] max-[1920px]:[left:.9375rem] max-[1440px]:[height:3rem] max-[1440px]:[width:3rem]"
                  }
                  type={"button"}
                  data-w-bg-video-control={"true"}
                  aria-controls={"b8a6eed9-e417-6273-14d1-a25e2c46584a-video"}
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
          </div>
          <div
            className={
              "w-layout-vflex rt-showcase-col rt-showcase-col-2 rt-radius-large rt-desktop-text-center [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [text-align:center] [border-radius:1.25rem] [flex:1] [z-index:10] [background-color:#111111] [justify-content:center] [max-width:29.5rem] [padding-top:1.875rem] [padding-right:2.5rem] [padding-bottom:1.875rem] [padding-left:2.5rem] [position:relative] max-[1280px]:[padding-left:1.875rem] max-[1280px]:[padding-right:1.875rem] max-[768px]:[max-width:none]"
            }
            data-w-id={"103c5009-cf08-e0da-1040-aa30527662ff"}
          >
            <h3
              className={
                "rt-text-style-h4 rt-text-color-white rt-gap-medium [box-sizing:border-box] [margin-bottom:.9375rem] [font-weight:500] [margin-top:1.25rem] [font-size:1.5625rem] [line-height:122%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.4rem] max-[991px]:[font-size:1.375rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[font-size:1.25rem] max-[768px]:[margin-bottom:.7rem]"
              }
              data-heading-title={"1"}
            >
              {copy[0]}
            </h3>
            <div
              className={
                "rt-text-color-white rt-gap-large [box-sizing:border-box] [color:white] [margin-bottom:1.5625rem] max-[991px]:[margin-bottom:.9rem] max-[768px]:[margin-bottom:.8rem]"
              }
              data-w-id={"0bd5e78d-11e9-3bf3-9bc1-1ac03b263bde"}
            >
              {copy[1]}
            </div>
            <div
              className={" [box-sizing:border-box]"}
              data-w-id={"37eb7302-e458-5e3e-8f92-1cf527035c55"}
            >
              <RouteLink
                className={
                  "rt-button-v1 rt-radius-xl rt-overflow-hidden w-inline-block [box-sizing:border-box] [background-color:white] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [z-index:2] [grid-column-gap:1.125rem] [grid-row-gap:1.125rem] [border:1px_solid_#fff0] [justify-content:space-between] [align-items:center] [padding-top:.75rem] [padding-right:1.0625rem] [padding-bottom:.75rem] [padding-left:1.0625rem] [position:relative] [border-radius:1.75rem] max-[991px]:[padding-left:.8rem] max-[991px]:[padding-right:.8rem]"
                }
                to={"/about"}
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
            </div>
          </div>
          <div
            className={
              "w-layout-vflex rt-showcase-col rt-showcase-col-3 rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [border-radius:1.25rem] [flex:1] [z-index:6] [grid-column-gap:2.25rem] [grid-row-gap:2.25rem] [background-color:#f8f8f8] [max-width:29.5rem] [padding-top:2.5rem] [padding-right:2.5rem] [padding-bottom:2.125rem] [padding-left:2.5rem] [position:relative] max-[1280px]:[padding-bottom:1.5rem] max-[1280px]:[padding-left:1.875rem] max-[1280px]:[padding-right:1.875rem] max-[1280px]:[padding-top:1.875rem] max-[768px]:[grid-row-gap:1.5rem] max-[768px]:[grid-column-gap:1.5rem] max-[768px]:[max-width:none]"
            }
            data-w-id={"fc522767-104a-a2ab-333d-b0cc3f9feab2"}
          >
            <div
              className={
                "rt-radius-large rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [border-radius:1.25rem]"
              }
            >
              <img
                className={
                  " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                }
                src={
                  "/images/6996ea4b4764765d06c81f5b_about-section-image.webp"
                }
                loading={"lazy"}
                alt={"about-section-image"}
              />
            </div>
            <h3
              className={
                "rt-text-style-h4 rt-mobile-text-center rt-gap-off [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:1.5625rem] [line-height:122%] [font-family:Nohemi,Arial,sans-serif] [color:#111] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:1.4rem] max-[991px]:[font-size:1.375rem] max-[768px]:[font-size:1.25rem] max-[479px]:[text-align:center]"
              }
              data-heading-title={"1"}
            >
              {copy[4]}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
