import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function ServicesSliderSection() {
  const copy = referenceContent.HomeTwo.ServicesSliderSection;
  return (
    <section
      className={
        "section top-small overflow-hidden [box-sizing:border-box] [display:block] [z-index:100] [padding-top:80px] [padding-bottom:160px] [overflow:hidden] max-[991px]:[padding-bottom:120px] max-[991px]:[padding-top:60px] max-[768px]:[padding-bottom:100px] max-[768px]:[padding-top:50px] max-[479px]:[padding-bottom:80px] max-[479px]:[padding-top:40px]"
      }
    >
      <div
        className={
          "w-layout-blockcontainer container-default w-container [box-sizing:border-box] [max-width:1228px] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:24px] [padding-left:24px] [margin-bottom:0] max-[768px]:[padding-left:20px] max-[768px]:[padding-right:20px]"
        }
      >
        <div
          className={
            "position-relative [box-sizing:border-box] [position:relative]"
          }
        >
          <div
            className={
              "w-layout-grid grid-2-columns gap-col-2x-extra-large-row-medium _0-38fr-1fr [box-sizing:border-box] [grid-row-gap:40px] [grid-column-gap:64px] [grid-template-rows:auto] [grid-template-columns:.38fr_1fr] [grid-auto-columns:1fr] [display:grid] [align-items:start] max-[991px]:[grid-template-columns:1fr]"
            }
          >
            <div
              className={
                "card-slider-col-left [box-sizing:border-box] [height:100%] [position:relative] max-[991px]:[height:auto] max-[991px]:[width:100%] max-[991px]:[order:-9999]"
              }
            >
              <div
                className={
                  "fullscreen-left slider-fullscreen-v1 [box-sizing:border-box] [width:100vw] [height:100%] [position:absolute] [top:0%] [right:-16%] [bottom:0%] [left:auto] [z-index:2] [background-color:white] max-[991px]:[display:none]"
                }
              ></div>
              <div
                className={
                  "z-index-2 width-100 [box-sizing:border-box] [width:100%] [z-index:2] [position:relative]"
                }
                data-w-id={"8631c85a-b38b-5ff9-484f-8d706bf0daaa"}
              >
                <h2
                  className={
                    "display-8 mg-bottom-4x-extra-small [box-sizing:border-box] [margin-bottom:8px] [font-weight:500] [margin-top:0] [font-size:48px] [line-height:1.25em] [font-family:'Inter_Tight',_sans-serif] [color:#121212] [letter-spacing:-.03em] max-[991px]:[font-size:36px] max-[768px]:[font-size:32px] max-[479px]:[font-size:30px]"
                  }
                >
                  {copy[0]}
                </h2>
                <p
                  className={
                    "mg-bottom-small [box-sizing:border-box] [margin-top:0] [margin-bottom:24px] max-[768px]:[margin-bottom:16px]"
                  }
                >
                  {copy[1]}
                </p>
                <div
                  className={
                    "buttons-row left [box-sizing:border-box] [grid-column-gap:16px] [grid-row-gap:8px] [flex-flow:wrap] [justify-content:flex-start] [align-items:center] [display:flex] max-[479px]:[width:100%]"
                  }
                >
                  <RouteLink
                    className={
                      "secondary-button main w-inline-block [box-sizing:border-box] [background-color:#fff0] [color:#121212] [text-decoration:none] [transition:transform_.3s] [max-width:100%] [display:flex] [padding-top:12px] [padding-right:32px] [padding-bottom:12px] [padding-left:32px] [grid-column-gap:6px] [grid-row-gap:6px] [border:1px_solid_#121212] [border-radius:100px] [font-size:16px] [line-height:1.25em] [font-weight:500] [text-align:center] [transform-style:preserve-3d] [justify-content:center] [align-items:center] [box-shadow:inset_0_0_0_1px_#121212,_0_1px_4px_0_#1111111a] [border-top-style:none] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] [overflow:hidden] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[padding-left:20px] max-[768px]:[font-size:14px] max-[768px]:[padding-right:20px] max-[479px]:[padding-left:16px] max-[479px]:[padding-top:8px] max-[479px]:[padding-bottom:8px] max-[479px]:[padding-right:16px]"
                    }
                    data-wf--buttons-secondary---default--button---variant={
                      "light"
                    }
                    data-w-id={"aa6a184f-22ae-a653-5f49-4bbe48505a24"}
                    to={"/service"}
                  >
                    <div className={" [box-sizing:border-box]"}>{copy[2]}</div>
                    <div
                      className={
                        "button-text-absolute [box-sizing:border-box] [z-index:3] [opacity:0] [color:white] [justify-content:center] [align-items:center] [display:flex] [position:absolute] [top:0] [right:0] [bottom:0] [left:0]"
                      }
                    >
                      {copy[3]}
                    </div>
                    <div
                      className={
                        "button-text-bg _01 [box-sizing:border-box] [z-index:2] [background-color:#121212] [width:22%] [position:absolute] [top:0] [right:0] [bottom:0] [left:0] [transform:translate(0,_100%)]"
                      }
                    ></div>
                    <div
                      className={
                        "button-text-bg _02 [box-sizing:border-box] [z-index:2] [background-color:#121212] [width:22%] [position:absolute] [top:0] [right:0] [bottom:0] [left:20%] [transform:translate(0,_100%)]"
                      }
                    ></div>
                    <div
                      className={
                        "button-text-bg _03 [box-sizing:border-box] [z-index:2] [background-color:#121212] [width:22%] [position:absolute] [top:0] [right:0] [bottom:0] [left:40%] [transform:translate(0,_100%)]"
                      }
                    ></div>
                    <div
                      className={
                        "button-text-bg _04 [box-sizing:border-box] [z-index:2] [background-color:#121212] [width:22%] [position:absolute] [top:0] [right:0] [bottom:0] [left:60%] [transform:translate(0,_100%)]"
                      }
                    ></div>
                    <div
                      className={
                        "button-text-bg _05 [box-sizing:border-box] [z-index:2] [background-color:#121212] [width:22%] [position:absolute] [top:0] [right:0] [bottom:0] [left:80%] [transform:translate(0,_100%)]"
                      }
                    ></div>
                  </RouteLink>
                </div>
              </div>
            </div>
            <div
              className={
                "slider-wrapper service-slider w-slider [box-sizing:border-box] [text-align:center] [clear:both] [tap-highlight-color:#0000] [background-color:#fff0] [height:100%] [position:static] [width:100%] [padding-top:10px] [padding-bottom:10px] max-[991px]:[padding-bottom:80px] max-[991px]:[padding-top:0] max-[768px]:[overflow:hidden]"
              }
              data-delay={"4000"}
              data-animation={"slide"}
              data-autoplay={"false"}
              data-easing={"ease"}
              data-hide-arrows={"false"}
              data-disable-swipe={"false"}
              data-autoplay-limit={"0"}
              data-nav-spacing={"3"}
              data-duration={"500"}
              data-infinite={"true"}
            >
              <div
                className={
                  "slider-mask width-448px w-slider-mask [box-sizing:border-box] [z-index:1] [white-space:nowrap] [height:100%] [display:block] [position:relative] [left:0] [right:0] [overflow:visible] [max-width:448px] max-[768px]:[max-width:100%]"
                }
                data-w-id={"62622a09-6d24-f8d8-c62d-43a16d5f9c84"}
              >
                <div
                  className={
                    "mg-right-extra-small w-slide [box-sizing:border-box] [vertical-align:top] [white-space:normal] [text-align:left] [width:100%] [height:100%] [display:inline-block] [position:relative] [margin-right:20px]"
                  }
                >
                  <RouteLink
                    className={
                      "card service-card-v4 w-inline-block [box-sizing:border-box] [background-color:#f6f6f6] [color:#121212] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:flex] [border:1px_solid_white] [border-radius:32px] [position:relative] [overflow:hidden] [box-shadow:none] [border-top-style:none] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] [border-top-color:#fff0] [border-right-color:#fff0] [border-bottom-color:#fff0] [border-left-color:#fff0] [height:602px] [flex-flow:column] [justify-content:flex-end] [align-items:center] max-[768px]:[border-radius:24px] max-[479px]:[border-radius:16px]"
                    }
                    data-w-id={"96b7b911-9d88-856e-9ab2-d8ba17457e4c"}
                    to={"/service"}
                  >
                    <img
                      className={
                        "link-item-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [height:auto] [object-fit:cover] [width:100%]"
                      }
                      src={
                        "/images/688a9eec0d0ee3ae45ae0fee_exterior-design-default-archipro-webflow-template.png"
                      }
                      loading={"lazy"}
                      width={"672"}
                      height={"624"}
                      alt={
                        "Exterior Design Default Archipro Webflow Template | BRIX Template\n"
                      }
                    />
                    <div
                      className={
                        "content-inside-image service-card-content-vertical [box-sizing:border-box] [z-index:1] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] [padding-top:40px] [padding-right:40px] [padding-bottom:40px] [padding-left:40px] [grid-column-gap:24px] [grid-row-gap:24px] [flex-flow:column] [justify-content:space-between] [align-items:stretch] [display:flex] max-[768px]:[padding-left:32px] max-[768px]:[padding-right:32px] max-[479px]:[padding-left:24px] max-[479px]:[padding-right:24px]"
                      }
                    >
                      <div
                        className={
                          "w-layout-vflex flex-vertical gap-4x-extra-small [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [flex-flow:column] [justify-content:flex-start] [grid-column-gap:8px] [grid-row-gap:8px]"
                        }
                      >
                        <h3
                          className={
                            "display-6 [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:30px] [line-height:1.25em] [font-family:'Inter_Tight',_sans-serif] [color:#121212] [letter-spacing:-.03em] max-[991px]:[font-size:28px] max-[768px]:[font-size:26px] max-[479px]:[font-size:24px]"
                          }
                        >
                          {copy[4]}
                        </h3>
                        <div
                          className={
                            "inner-container _338px [box-sizing:border-box] [max-width:338px]"
                          }
                        >
                          <p
                            className={
                              " [box-sizing:border-box] [margin-top:0] [margin-bottom:0]"
                            }
                          >
                            {copy[5]}
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          "w-layout-hflex flex-horizontal justify-end [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [justify-content:flex-end]"
                        }
                      >
                        <div
                          className={
                            "circle-button [box-sizing:border-box] [z-index:1] [background-color:white] [cursor:pointer] [border-radius:50%] [justify-content:center] [align-self:flex-start] [align-items:center] [width:48px] [min-width:48px] [height:48px] [min-height:48px] [display:flex] [position:relative] [overflow:hidden] [box-shadow:0_1px_1px_#0e0e0e0f,_0_4px_4px_#d3d3d30f] max-[768px]:[min-width:40px] max-[768px]:[height:40px] max-[768px]:[width:40px] max-[768px]:[min-height:40px] max-[479px]:[min-width:32px] max-[479px]:[height:32px] max-[479px]:[width:32px] max-[479px]:[min-height:32px]"
                          }
                        >
                          <div
                            className={
                              "circle-button-line horizontal [box-sizing:border-box] [background-color:#121212] [border-radius:2px] [width:12px] [height:1.5px] [position:absolute]"
                            }
                          ></div>
                          <div
                            className={
                              "circle-button-line vertical [box-sizing:border-box] [background-color:#121212] [border-radius:2px] [width:12px] [height:1.5px] [position:absolute] [transform:rotate(90deg)]"
                            }
                          ></div>
                        </div>
                      </div>
                    </div>
                  </RouteLink>
                </div>
                <div
                  className={
                    "mg-right-extra-small w-slide [box-sizing:border-box] [vertical-align:top] [white-space:normal] [text-align:left] [width:100%] [height:100%] [display:inline-block] [position:relative] [margin-right:20px]"
                  }
                >
                  <RouteLink
                    className={
                      "card service-card-v4 w-inline-block [box-sizing:border-box] [background-color:#f6f6f6] [color:#121212] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:flex] [border:1px_solid_white] [border-radius:32px] [position:relative] [overflow:hidden] [box-shadow:none] [border-top-style:none] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] [border-top-color:#fff0] [border-right-color:#fff0] [border-bottom-color:#fff0] [border-left-color:#fff0] [height:602px] [flex-flow:column] [justify-content:flex-end] [align-items:center] max-[768px]:[border-radius:24px] max-[479px]:[border-radius:16px]"
                    }
                    data-w-id={"96b7b911-9d88-856e-9ab2-d8ba17457e4c"}
                    to={"/service"}
                  >
                    <img
                      className={
                        "link-item-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [height:auto] [object-fit:cover] [width:100%]"
                      }
                      src={
                        "/images/688a9eec7e977e290017bd94_decoration-default-archipro-webflow-template.png"
                      }
                      loading={"lazy"}
                      width={"672"}
                      height={"624"}
                      alt={
                        "Decoration Default Archipro Webflow Template | BRIX Template\n"
                      }
                    />
                    <div
                      className={
                        "content-inside-image service-card-content-vertical [box-sizing:border-box] [z-index:1] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] [padding-top:40px] [padding-right:40px] [padding-bottom:40px] [padding-left:40px] [grid-column-gap:24px] [grid-row-gap:24px] [flex-flow:column] [justify-content:space-between] [align-items:stretch] [display:flex] max-[768px]:[padding-left:32px] max-[768px]:[padding-right:32px] max-[479px]:[padding-left:24px] max-[479px]:[padding-right:24px]"
                      }
                    >
                      <div
                        className={
                          "w-layout-vflex flex-vertical gap-4x-extra-small [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [flex-flow:column] [justify-content:flex-start] [grid-column-gap:8px] [grid-row-gap:8px]"
                        }
                      >
                        <h3
                          className={
                            "display-6 [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:30px] [line-height:1.25em] [font-family:'Inter_Tight',_sans-serif] [color:#121212] [letter-spacing:-.03em] max-[991px]:[font-size:28px] max-[768px]:[font-size:26px] max-[479px]:[font-size:24px]"
                          }
                        >
                          {copy[6]}
                        </h3>
                        <div
                          className={
                            "inner-container _338px [box-sizing:border-box] [max-width:338px]"
                          }
                        >
                          <p
                            className={
                              " [box-sizing:border-box] [margin-top:0] [margin-bottom:0]"
                            }
                          >
                            {copy[7]}
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          "w-layout-hflex flex-horizontal justify-end [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [justify-content:flex-end]"
                        }
                      >
                        <div
                          className={
                            "circle-button [box-sizing:border-box] [z-index:1] [background-color:white] [cursor:pointer] [border-radius:50%] [justify-content:center] [align-self:flex-start] [align-items:center] [width:48px] [min-width:48px] [height:48px] [min-height:48px] [display:flex] [position:relative] [overflow:hidden] [box-shadow:0_1px_1px_#0e0e0e0f,_0_4px_4px_#d3d3d30f] max-[768px]:[min-width:40px] max-[768px]:[height:40px] max-[768px]:[width:40px] max-[768px]:[min-height:40px] max-[479px]:[min-width:32px] max-[479px]:[height:32px] max-[479px]:[width:32px] max-[479px]:[min-height:32px]"
                          }
                        >
                          <div
                            className={
                              "circle-button-line horizontal [box-sizing:border-box] [background-color:#121212] [border-radius:2px] [width:12px] [height:1.5px] [position:absolute]"
                            }
                          ></div>
                          <div
                            className={
                              "circle-button-line vertical [box-sizing:border-box] [background-color:#121212] [border-radius:2px] [width:12px] [height:1.5px] [position:absolute] [transform:rotate(90deg)]"
                            }
                          ></div>
                        </div>
                      </div>
                    </div>
                  </RouteLink>
                </div>
                <div
                  className={
                    "mg-right-extra-small w-slide [box-sizing:border-box] [vertical-align:top] [white-space:normal] [text-align:left] [width:100%] [height:100%] [display:inline-block] [position:relative] [margin-right:20px]"
                  }
                >
                  <RouteLink
                    className={
                      "card service-card-v4 w-inline-block [box-sizing:border-box] [background-color:#f6f6f6] [color:#121212] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:flex] [border:1px_solid_white] [border-radius:32px] [position:relative] [overflow:hidden] [box-shadow:none] [border-top-style:none] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] [border-top-color:#fff0] [border-right-color:#fff0] [border-bottom-color:#fff0] [border-left-color:#fff0] [height:602px] [flex-flow:column] [justify-content:flex-end] [align-items:center] max-[768px]:[border-radius:24px] max-[479px]:[border-radius:16px]"
                    }
                    data-w-id={"96b7b911-9d88-856e-9ab2-d8ba17457e4c"}
                    to={"/service"}
                  >
                    <img
                      className={
                        "link-item-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [height:auto] [object-fit:cover] [width:100%]"
                      }
                      src={
                        "/images/688a9eec66950241e75c1b2c_construction-default-archipro-webflow-template.png"
                      }
                      loading={"lazy"}
                      width={"672"}
                      height={"624"}
                      alt={
                        "Construction Default Archipro Webflow Template | BRIX Template\n"
                      }
                    />
                    <div
                      className={
                        "content-inside-image service-card-content-vertical [box-sizing:border-box] [z-index:1] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] [padding-top:40px] [padding-right:40px] [padding-bottom:40px] [padding-left:40px] [grid-column-gap:24px] [grid-row-gap:24px] [flex-flow:column] [justify-content:space-between] [align-items:stretch] [display:flex] max-[768px]:[padding-left:32px] max-[768px]:[padding-right:32px] max-[479px]:[padding-left:24px] max-[479px]:[padding-right:24px]"
                      }
                    >
                      <div
                        className={
                          "w-layout-vflex flex-vertical gap-4x-extra-small [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [flex-flow:column] [justify-content:flex-start] [grid-column-gap:8px] [grid-row-gap:8px]"
                        }
                      >
                        <h3
                          className={
                            "display-6 [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:30px] [line-height:1.25em] [font-family:'Inter_Tight',_sans-serif] [color:#121212] [letter-spacing:-.03em] max-[991px]:[font-size:28px] max-[768px]:[font-size:26px] max-[479px]:[font-size:24px]"
                          }
                        >
                          {copy[8]}
                        </h3>
                        <div
                          className={
                            "inner-container _338px [box-sizing:border-box] [max-width:338px]"
                          }
                        >
                          <p
                            className={
                              " [box-sizing:border-box] [margin-top:0] [margin-bottom:0]"
                            }
                          >
                            {copy[9]}
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          "w-layout-hflex flex-horizontal justify-end [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [justify-content:flex-end]"
                        }
                      >
                        <div
                          className={
                            "circle-button [box-sizing:border-box] [z-index:1] [background-color:white] [cursor:pointer] [border-radius:50%] [justify-content:center] [align-self:flex-start] [align-items:center] [width:48px] [min-width:48px] [height:48px] [min-height:48px] [display:flex] [position:relative] [overflow:hidden] [box-shadow:0_1px_1px_#0e0e0e0f,_0_4px_4px_#d3d3d30f] max-[768px]:[min-width:40px] max-[768px]:[height:40px] max-[768px]:[width:40px] max-[768px]:[min-height:40px] max-[479px]:[min-width:32px] max-[479px]:[height:32px] max-[479px]:[width:32px] max-[479px]:[min-height:32px]"
                          }
                        >
                          <div
                            className={
                              "circle-button-line horizontal [box-sizing:border-box] [background-color:#121212] [border-radius:2px] [width:12px] [height:1.5px] [position:absolute]"
                            }
                          ></div>
                          <div
                            className={
                              "circle-button-line vertical [box-sizing:border-box] [background-color:#121212] [border-radius:2px] [width:12px] [height:1.5px] [position:absolute] [transform:rotate(90deg)]"
                            }
                          ></div>
                        </div>
                      </div>
                    </div>
                  </RouteLink>
                </div>
                <div
                  className={
                    "mg-right-extra-small w-slide [box-sizing:border-box] [vertical-align:top] [white-space:normal] [text-align:left] [width:100%] [height:100%] [display:inline-block] [position:relative] [margin-right:20px]"
                  }
                >
                  <RouteLink
                    className={
                      "card service-card-v4 w-inline-block [box-sizing:border-box] [background-color:#f6f6f6] [color:#121212] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:flex] [border:1px_solid_white] [border-radius:32px] [position:relative] [overflow:hidden] [box-shadow:none] [border-top-style:none] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] [border-top-color:#fff0] [border-right-color:#fff0] [border-bottom-color:#fff0] [border-left-color:#fff0] [height:602px] [flex-flow:column] [justify-content:flex-end] [align-items:center] max-[768px]:[border-radius:24px] max-[479px]:[border-radius:16px]"
                    }
                    data-w-id={"96b7b911-9d88-856e-9ab2-d8ba17457e4c"}
                    to={"/service"}
                  >
                    <img
                      className={
                        "link-item-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [height:auto] [object-fit:cover] [width:100%]"
                      }
                      src={
                        "/images/688a9eec9cc56e22f468af13_interior-design-default-archipro-webflow-template.png"
                      }
                      loading={"lazy"}
                      width={"672"}
                      height={"624"}
                      alt={
                        "Interior Design Default Archipro Webflow Template | BRIX Template\n"
                      }
                    />
                    <div
                      className={
                        "content-inside-image service-card-content-vertical [box-sizing:border-box] [z-index:1] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%] [padding-top:40px] [padding-right:40px] [padding-bottom:40px] [padding-left:40px] [grid-column-gap:24px] [grid-row-gap:24px] [flex-flow:column] [justify-content:space-between] [align-items:stretch] [display:flex] max-[768px]:[padding-left:32px] max-[768px]:[padding-right:32px] max-[479px]:[padding-left:24px] max-[479px]:[padding-right:24px]"
                      }
                    >
                      <div
                        className={
                          "w-layout-vflex flex-vertical gap-4x-extra-small [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [flex-flow:column] [justify-content:flex-start] [grid-column-gap:8px] [grid-row-gap:8px]"
                        }
                      >
                        <h3
                          className={
                            "display-6 [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:30px] [line-height:1.25em] [font-family:'Inter_Tight',_sans-serif] [color:#121212] [letter-spacing:-.03em] max-[991px]:[font-size:28px] max-[768px]:[font-size:26px] max-[479px]:[font-size:24px]"
                          }
                        >
                          {copy[10]}
                        </h3>
                        <div
                          className={
                            "inner-container _338px [box-sizing:border-box] [max-width:338px]"
                          }
                        >
                          <p
                            className={
                              " [box-sizing:border-box] [margin-top:0] [margin-bottom:0]"
                            }
                          >
                            {copy[11]}
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          "w-layout-hflex flex-horizontal justify-end [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [justify-content:flex-end]"
                        }
                      >
                        <div
                          className={
                            "circle-button [box-sizing:border-box] [z-index:1] [background-color:white] [cursor:pointer] [border-radius:50%] [justify-content:center] [align-self:flex-start] [align-items:center] [width:48px] [min-width:48px] [height:48px] [min-height:48px] [display:flex] [position:relative] [overflow:hidden] [box-shadow:0_1px_1px_#0e0e0e0f,_0_4px_4px_#d3d3d30f] max-[768px]:[min-width:40px] max-[768px]:[height:40px] max-[768px]:[width:40px] max-[768px]:[min-height:40px] max-[479px]:[min-width:32px] max-[479px]:[height:32px] max-[479px]:[width:32px] max-[479px]:[min-height:32px]"
                          }
                        >
                          <div
                            className={
                              "circle-button-line horizontal [box-sizing:border-box] [background-color:#121212] [border-radius:2px] [width:12px] [height:1.5px] [position:absolute]"
                            }
                          ></div>
                          <div
                            className={
                              "circle-button-line vertical [box-sizing:border-box] [background-color:#121212] [border-radius:2px] [width:12px] [height:1.5px] [position:absolute] [transform:rotate(90deg)]"
                            }
                          ></div>
                        </div>
                      </div>
                    </div>
                  </RouteLink>
                </div>
              </div>
              <div
                className={
                  "slider-button-wrapper left-v1 w-slider-arrow-left [box-sizing:border-box] [cursor:pointer] [color:#fff] [tap-highlight-color:#0000] [user-select:none] [width:48px] [margin-top:auto] [margin-right:auto] [margin-bottom:auto] [margin-left:auto] [font-size:40px] [position:absolute] [top:auto] [right:auto] [bottom:0%] [left:0%] [overflow:hidden] [z-index:3] [min-width:48px] [height:48px] [min-height:48px] max-[991px]:[right:56px] max-[991px]:[left:0] max-[768px]:[min-width:40px] max-[768px]:[right:48px] max-[768px]:[height:40px] max-[768px]:[width:40px] max-[768px]:[min-height:40px]"
                }
                data-w-id={"62622a09-6d24-f8d8-c62d-43a16d5f9c87"}
              >
                <div
                  className={
                    "secondary-button-icon slider-button [box-sizing:border-box] [border:1px_solid_#121212] [border-radius:300px] [background-color:#6e6e6e] [width:48px] [min-width:48px] [height:48px] [min-height:48px] [color:white] [font-size:16px] [font-weight:500] [text-align:center] [transform-style:preserve-3d] [justify-content:center] [align-items:center] [text-decoration:none] [transition:transform_.3s] [display:flex] [box-shadow:0_1px_3px_#1111111a] [border-top-color:#6e6e6e] [border-right-color:#6e6e6e] [border-bottom-color:#6e6e6e] [border-left-color:#6e6e6e] max-[768px]:[min-width:40px] max-[768px]:[font-size:14px] max-[768px]:[height:40px] max-[768px]:[width:40px] max-[768px]:[min-height:40px]"
                  }
                >
                  <div
                    className={
                      "icon-font-rounded [box-sizing:border-box] [font-family:'Line_Rounded_Icon_Font_Brix',_Arial,_sans-serif]"
                    }
                  >
                    {copy[12]}
                  </div>
                </div>
              </div>
              <div
                className={
                  "slider-button-wrapper right-v1 w-slider-arrow-right [box-sizing:border-box] [cursor:pointer] [color:#fff] [tap-highlight-color:#0000] [user-select:none] [width:48px] [margin-top:auto] [margin-right:auto] [margin-bottom:auto] [margin-left:auto] [font-size:40px] [position:absolute] [top:auto] [right:auto] [bottom:0%] [left:64px] [overflow:hidden] [z-index:3] [min-width:48px] [height:48px] [min-height:48px] max-[991px]:[right:0] max-[991px]:[left:56px] max-[768px]:[min-width:40px] max-[768px]:[height:40px] max-[768px]:[width:40px] max-[768px]:[left:48px] max-[768px]:[min-height:40px]"
                }
                data-w-id={"62622a09-6d24-f8d8-c62d-43a16d5f9c89"}
              >
                <div
                  className={
                    "secondary-button-icon slider-button [box-sizing:border-box] [border:1px_solid_#121212] [border-radius:300px] [background-color:#6e6e6e] [width:48px] [min-width:48px] [height:48px] [min-height:48px] [color:white] [font-size:16px] [font-weight:500] [text-align:center] [transform-style:preserve-3d] [justify-content:center] [align-items:center] [text-decoration:none] [transition:transform_.3s] [display:flex] [box-shadow:0_1px_3px_#1111111a] [border-top-color:#6e6e6e] [border-right-color:#6e6e6e] [border-bottom-color:#6e6e6e] [border-left-color:#6e6e6e] max-[768px]:[min-width:40px] max-[768px]:[font-size:14px] max-[768px]:[height:40px] max-[768px]:[width:40px] max-[768px]:[min-height:40px]"
                  }
                >
                  <div
                    className={
                      "icon-font-rounded [box-sizing:border-box] [font-family:'Line_Rounded_Icon_Font_Brix',_Arial,_sans-serif]"
                    }
                  >
                    {copy[13]}
                  </div>
                </div>
              </div>
              <div
                className={
                  "hidden w-slider-nav w-round [box-sizing:border-box] [z-index:2] [text-align:center] [tap-highlight-color:#0000] [height:40px] [margin-top:auto] [margin-right:auto] [margin-bottom:auto] [margin-left:auto] [padding-top:10px] [position:absolute] [top:auto] [right:0] [bottom:0] [left:0] [display:none]"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
