import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function FooterSection() {
  const copy = referenceContent.HomeTwo.FooterSection;
  return (
    <footer
      className={
        "footer-wrapper [box-sizing:border-box] [display:block] [padding-right:20px] [padding-bottom:20px] [padding-left:20px] [overflow:hidden] max-[768px]:[padding-bottom:12px] max-[768px]:[padding-right:12px] max-[768px]:[padding-left:12px]"
      }
    >
      <div
        className={
          "footer pd-top-bottom-medium [box-sizing:border-box] [border-radius:32px] [background-color:#121212] [color:#e7e7e7] [position:relative] [padding-top:120px] [padding-bottom:120px] max-[991px]:[padding-bottom:60px] max-[991px]:[padding-top:60px] max-[768px]:[padding-bottom:50px] max-[768px]:[border-radius:20px] max-[768px]:[padding-top:50px] max-[479px]:[padding-bottom:40px] max-[479px]:[border-radius:16px] max-[479px]:[padding-top:40px]"
        }
      >
        <div
          className={
            "w-layout-blockcontainer container-default w-container [box-sizing:border-box] [max-width:1228px] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:24px] [padding-left:24px] [margin-bottom:0] max-[768px]:[padding-left:20px] max-[768px]:[padding-right:20px]"
          }
        >
          <div
            className={
              "section-header mg-bottom-large [box-sizing:border-box] [margin-bottom:48px] [grid-column-gap:40px] [grid-row-gap:16px] [flex-flow:wrap] [justify-content:space-between] [align-items:center] [display:flex] max-[479px]:[flex-flow:column] max-[479px]:[text-align:center]"
            }
            data-w-id={"5c94b3e9-5cf7-dd04-b93b-a518d088a7cc"}
          >
            <div
              className={
                "inner-container _426px _100-tablet [box-sizing:border-box] [max-width:426px] max-[991px]:[max-width:100%]"
              }
            >
              <h2
                className={
                  "display-7 text-light mg-bottom-4x-extra-small [box-sizing:border-box] [margin-bottom:8px] [font-weight:500] [margin-top:0] [font-size:36px] [line-height:1.25em] [font-family:'Inter_Tight',_sans-serif] [color:#fff] [letter-spacing:-.03em] max-[991px]:[font-size:30px] max-[768px]:[font-size:28px] max-[479px]:[font-size:26px]"
                }
              >
                {copy[0]}
              </h2>
              <p
                className={
                  " [box-sizing:border-box] [margin-top:0] [margin-bottom:0]"
                }
              >
                {copy[1]}
              </p>
            </div>
            <div
              className={
                "form-wrapper _402px w-form [box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [width:100%] [max-width:402px]"
              }
            >
              <form
                className={" [box-sizing:border-box]"}
                data-preview-form="true"
                name={"wf-form-Footer-Form"}
                data-wf-page-id={"6883a66d1ebb4685edc545b8"}
              >
                <div
                  className={
                    "input-wrapper [box-sizing:border-box] [margin-bottom:0] [position:relative]"
                  }
                >
                  <input
                    className={
                      "input w-input [box-sizing:border-box] [color:#121212] [font:inherit] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [line-height:1.25em] [vertical-align:middle] [background-color:white] [border:1px_solid_#e7e7e7] [width:100%] [height:62px] [padding-top:20px] [padding-right:24px] [padding-bottom:20px] [padding-left:24px] [font-size:16px] [display:block] [border-radius:300px] [font-weight:400] [transition:border-color_.3s] max-[479px]:[padding-left:16px] max-[479px]:[height:52px] max-[479px]:[padding-right:16px]"
                    }
                    maxLength={256}
                    name={"Email"}
                    placeholder={"Enter your email "}
                    type={"email"}
                    id={"Email"}
                    required={true}
                  />
                  <div
                    className={
                      "button-inside-input [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [display:flex] [position:absolute] [top:6px] [right:6px] [bottom:6px] [left:auto] max-[479px]:[position:static] max-[479px]:[margin-top:12px]"
                    }
                  >
                    <input
                      className={
                        "primary-button w-button [box-sizing:border-box] [color:white] [font:inherit] [margin-top:0] [margin-right:0] [margin-bottom:0] [margin-left:0] [line-height:1.25em] [cursor:pointer] [background-color:#6e6e6e] [border:1px_solid_#6e6e6e] [border-radius:100px] [padding-top:12px] [padding-right:32px] [padding-bottom:12px] [padding-left:32px] [text-decoration:none] [display:flex] [grid-column-gap:6px] [grid-row-gap:6px] [font-size:16px] [font-weight:500] [text-align:center] [transform-style:preserve-3d] [justify-content:center] [align-items:center] [transition:transform_.3s] [box-shadow:0_4px_8px_#6e6e6e1a] max-[768px]:[padding-left:20px] max-[768px]:[font-size:14px] max-[768px]:[padding-right:20px] max-[479px]:[padding-bottom:8px] max-[479px]:[padding-left:16px] max-[479px]:[padding-right:16px] max-[479px]:[padding-top:8px]"
                      }
                      type={"submit"}
                      defaultValue="Preview enquiry"
                    />
                  </div>
                </div>
              </form>
              <div
                className={
                  "success-message-wrapper w-form-done [box-sizing:border-box] [text-align:center] [background-color:#0000] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:none] [width:100%]"
                }
              >
                <div
                  className={
                    "card thank-you---dark small [box-sizing:border-box] [border:1px_solid_white] [border-radius:300px] [background-color:#424242] [text-decoration:none] [position:relative] [overflow:hidden] [box-shadow:0_1px_1px_#6e6e6e0f,_0_4px_4px_#f4f4f40f] [border-top-color:#6e6e6e] [border-right-color:#6e6e6e] [border-bottom-color:#6e6e6e] [border-left-color:#6e6e6e] [color:white] [grid-column-gap:6px] [grid-row-gap:6px] [justify-content:center] [align-items:center] [height:62px] [display:flex]"
                  }
                >
                  <div
                    className={
                      "icon-font-rounded [box-sizing:border-box] [font-family:'Line_Rounded_Icon_Font_Brix',_Arial,_sans-serif]"
                    }
                  >
                    {copy[2]}
                  </div>
                  <div
                    className={
                      "text-titles [box-sizing:border-box] [color:#121212]"
                    }
                  >
                    <div
                      className={
                        "display-1 text-light [box-sizing:border-box] [color:#fff] [font-size:14px] [line-height:1.25em] [font-weight:500] [letter-spacing:-.03em]"
                      }
                    >
                      {copy[3]}
                      <br className={" [box-sizing:border-box]"} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  "error-message-wrapper w-form-fail [box-sizing:border-box] [background-color:#f4f4f4] [margin-top:24px] [padding-top:16px] [padding-right:16px] [padding-bottom:16px] [padding-left:16px] [display:none] [color:#6e6e6e] [text-align:center] [border-radius:16px] [margin-right:24px] [margin-bottom:24px] [margin-left:24px]"
                }
              >
                <div className={" [box-sizing:border-box]"}>{copy[4]}</div>
              </div>
            </div>
          </div>
          <div
            className={
              "w-layout-grid nav-menu-grid-4-columns mg-bottom-10px [box-sizing:border-box] [grid-row-gap:10px] [grid-column-gap:32px] [grid-template-rows:auto] [grid-template-columns:1fr_1fr_1fr_1fr] [grid-auto-columns:1fr] [display:grid] [align-items:start] [margin-bottom:10px] max-[768px]:[grid-template-columns:1fr_1fr] max-[479px]:[grid-template-columns:1fr]"
            }
            data-w-id={"5c94b3e9-5cf7-dd04-b93b-a518d088a7ec"}
          >
            <div
              className={
                "w-layout-grid nav-menu-grid-1-column [box-sizing:border-box] [grid-row-gap:10px] [grid-column-gap:32px] [grid-template-rows:auto] [grid-template-columns:1fr] [grid-auto-columns:1fr] [display:grid] [align-items:start]"
              }
            >
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/home-two"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[5]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[6]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/about"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[7]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[8]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/service"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[9]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[10]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/service"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[11]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[12]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light with-border-mbl [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:0] [border-bottom-style:none] max-[768px]:[padding-bottom:10px] max-[768px]:[border-bottom-style:solid]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/portfolio-three"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[13]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[14]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
            </div>
            <div
              className={
                "w-layout-grid nav-menu-grid-1-column [box-sizing:border-box] [grid-row-gap:10px] [grid-column-gap:32px] [grid-template-rows:auto] [grid-template-columns:1fr] [grid-auto-columns:1fr] [display:grid] [align-items:start]"
              }
            >
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/project/contemporary-retreat"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[15]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[16]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/blog-one"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[17]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[18]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/blog-one"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[19]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[20]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/about"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[21]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[22]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light with-border-mbp [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:0] [border-bottom-style:none] max-[479px]:[padding-bottom:10px] max-[479px]:[border-bottom-style:solid]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/about"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[23]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[24]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
            </div>
            <div
              className={
                "w-layout-grid nav-menu-grid-1-column [box-sizing:border-box] [grid-row-gap:10px] [grid-column-gap:32px] [grid-template-rows:auto] [grid-template-columns:1fr] [grid-auto-columns:1fr] [display:grid] [align-items:start]"
              }
            >
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/contact-three"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[25]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[26]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/contact-three"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[27]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[28]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/contact-three"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[29]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[30]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light with-border-mbp [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:0] [border-bottom-style:none] max-[479px]:[padding-bottom:10px] max-[479px]:[border-bottom-style:solid]"
                }
              >
                <a
                  className={
                    "link light-v2 mid w-inline-block [box-sizing:border-box] [background-color:#0000] [color:#f6f6f6] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [font-weight:500] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] max-[768px]:[font-size:14px]"
                  }
                  data-w-id={"5c94b3e9-5cf7-dd04-b93b-a518d088a825"}
                  href={"https://www.brixtemplates.com/more-webflow-templates"}
                  target={"_blank"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div
                        className={
                          "social-media-icon-wrapper dark [box-sizing:border-box] [background-color:white] [width:28px] [min-width:28px] [height:28px] [min-height:28px] [color:#121212] [font-size:18px] [border-radius:4px] [justify-content:center] [align-items:center] [text-decoration:none] [transition:transform_.3s] [display:flex]"
                        }
                      >
                        <div
                          className={
                            "icon-font-social-media [box-sizing:border-box] [font-family:'Social_Media_Icon_Font_Brix',_Arial,_sans-serif]"
                          }
                        >
                          {copy[31]}
                        </div>
                      </div>
                      <div className={" [box-sizing:border-box]"}>
                        {copy[32]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div
                        className={
                          "social-media-icon-wrapper dark [box-sizing:border-box] [background-color:white] [width:28px] [min-width:28px] [height:28px] [min-height:28px] [color:#121212] [font-size:18px] [border-radius:4px] [justify-content:center] [align-items:center] [text-decoration:none] [transition:transform_.3s] [display:flex]"
                        }
                      >
                        <div
                          className={
                            "icon-font-social-media [box-sizing:border-box] [font-family:'Social_Media_Icon_Font_Brix',_Arial,_sans-serif]"
                          }
                        >
                          {copy[33]}
                        </div>
                      </div>
                      <div className={" [box-sizing:border-box]"}>
                        {copy[34]}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              className={
                "w-layout-grid nav-menu-grid-1-column [box-sizing:border-box] [grid-row-gap:10px] [grid-column-gap:32px] [grid-template-rows:auto] [grid-template-columns:1fr] [grid-auto-columns:1fr] [display:grid] [align-items:start]"
              }
            >
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/home-one"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[35]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[36]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/home-two"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[37]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[38]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/home-one"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[39]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[40]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/contact-three"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[41]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[42]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:10px]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/blog-one"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[43]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[44]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
              <div
                className={
                  "link-wrapper-light without-border [box-sizing:border-box] [border-bottom:1px_solid_#fff3] [padding-bottom:0] [border-bottom-style:none]"
                }
              >
                <RouteLink
                  className={
                    "link light-v1 w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [max-width:100%] [display:inline-block] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[font-size:14px]"
                  }
                  data-wf--links-link---dark--link---variant={"default"}
                  data-w-id={"6f41b3aa-9abe-8acd-6005-fcb8b291f3ad"}
                  to={"/blog-one"}
                >
                  <div
                    className={
                      "link-rows-wrapper [box-sizing:border-box] [flex-flow:column] [justify-content:center] [align-items:flex-start] [padding-top:0] [padding-right:0] [padding-bottom:0] [padding-left:0] [display:flex] [position:relative] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "link-content-flex [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[45]}
                      </div>
                    </div>
                    <div
                      className={
                        "link-content-flex is-absolute [box-sizing:border-box] [grid-column-gap:8px] [grid-row-gap:8px] [justify-content:flex-start] [align-items:center] [display:flex] [opacity:0] [position:absolute]"
                      }
                    >
                      <div className={" [box-sizing:border-box]"}>
                        {copy[46]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
            </div>
          </div>
          <div
            className={
              "footer-bottom [box-sizing:border-box] [grid-column-gap:24px] [grid-row-gap:24px] [justify-content:space-between] [align-items:center] [display:flex] max-[991px]:[flex-flow:column] max-[991px]:[justify-content:center] max-[991px]:[text-align:center] max-[768px]:[margin-top:48px]"
            }
            data-w-id={"5c94b3e9-5cf7-dd04-b93b-a518d088a84c"}
          >
            <div
              className={
                "inner-container _260px _100-tablet [box-sizing:border-box] [max-width:260px] max-[991px]:[max-width:100%]"
              }
            >
              <RouteLink
                className={
                  "logo-link w-inline-block [box-sizing:border-box] [background-color:#0000] [color:#111111] [text-decoration:underline] [transition:transform_.3s] [max-width:100%] [display:inline-block]"
                }
                to={"/home-two"}
                data-wf--logos-full---dark--logo---variant={"226px"}
              >
                <img
                  className={
                    "image w-variant-919e0f32-8809-615c-4931-64c29d60bc85 [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [height:auto] [width:226px] max-[768px]:[width:160px]"
                  }
                  width={"226"}
                  height={"50"}
                  alt={
                    "Logo Dark Mode Archipro Webflow Template | BRIX Template\n"
                  }
                  loading={"eager"}
                  src={
                    "/images/6883ab334526ed5482887a99_logo-dark-mode-archipro-webflow-template.svg"
                  }
                />
              </RouteLink>
              <p
                className={
                  "mg-top-small-tablet mg-top-extra-large [box-sizing:border-box] [margin-top:56px] [margin-bottom:0] max-[991px]:[margin-top:24px]"
                }
              >
                {copy[47]}
                <a
                  className={
                    "link light-v1 mid [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [font-weight:500] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] max-[768px]:[font-size:14px]"
                  }
                  href={"https://brixtemplates.com/"}
                  target={"_blank"}
                >
                  {copy[48]}
                </a>
                {copy[49]}
                <a
                  className={
                    "link light-v1 mid [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [transition:color_.3s] [font-weight:500] [grid-column-gap:8px] [grid-row-gap:8px] [font-size:16px] [line-height:1.25em] max-[768px]:[font-size:14px]"
                  }
                  href={"https://www.webflow.com/"}
                  target={"_blank"}
                >
                  {copy[50]}
                </a>
              </p>
            </div>
            <div
              className={
                "width-100-tablet align-self-bottom [box-sizing:border-box] [align-self:flex-end] max-[991px]:[width:100%]"
              }
            >
              <div
                className={
                  "social-media-flex center [box-sizing:border-box] [grid-column-gap:16px] [grid-row-gap:16px] [justify-content:center] [align-items:center] [display:flex]"
                }
              >
                <a
                  className={
                    "social-media-icon-wrapper w-variant-b0fc059d-865f-3854-3c7b-61fbed0a8481 w-inline-block [box-sizing:border-box] [background-color:#fff0] [color:white] [text-decoration:none] [transition:transform_.3s] [max-width:100%] [display:flex] [width:auto] [min-width:auto] [height:auto] [min-height:auto] [font-size:18px] [border-radius:0] [justify-content:center] [align-items:center]"
                  }
                  data-wf--social-media-link--social-media---variant={
                    "without-bg-dark"
                  }
                  href={"https://www.facebook.com/"}
                  target={"_blank"}
                >
                  <div
                    className={
                      "icon-font-social-media [box-sizing:border-box] [font-family:'Social_Media_Icon_Font_Brix',_Arial,_sans-serif]"
                    }
                  >
                    {copy[51]}
                  </div>
                </a>
                <a
                  className={
                    "social-media-icon-wrapper w-variant-b0fc059d-865f-3854-3c7b-61fbed0a8481 w-inline-block [box-sizing:border-box] [background-color:#fff0] [color:white] [text-decoration:none] [transition:transform_.3s] [max-width:100%] [display:flex] [width:auto] [min-width:auto] [height:auto] [min-height:auto] [font-size:18px] [border-radius:0] [justify-content:center] [align-items:center]"
                  }
                  data-wf--social-media-link--social-media---variant={
                    "without-bg-dark"
                  }
                  href={"https://instagram.com/"}
                  target={"_blank"}
                >
                  <div
                    className={
                      "icon-font-social-media [box-sizing:border-box] [font-family:'Social_Media_Icon_Font_Brix',_Arial,_sans-serif]"
                    }
                  >
                    {copy[52]}
                  </div>
                </a>
                <a
                  className={
                    "social-media-icon-wrapper w-variant-b0fc059d-865f-3854-3c7b-61fbed0a8481 w-inline-block [box-sizing:border-box] [background-color:#fff0] [color:white] [text-decoration:none] [transition:transform_.3s] [max-width:100%] [display:flex] [width:auto] [min-width:auto] [height:auto] [min-height:auto] [font-size:18px] [border-radius:0] [justify-content:center] [align-items:center]"
                  }
                  data-wf--social-media-link--social-media---variant={
                    "without-bg-dark"
                  }
                  href={"https://linkedin.com/"}
                  target={"_blank"}
                >
                  <div
                    className={
                      "icon-font-social-media [box-sizing:border-box] [font-family:'Social_Media_Icon_Font_Brix',_Arial,_sans-serif]"
                    }
                  >
                    {copy[53]}
                  </div>
                </a>
                <a
                  className={
                    "social-media-icon-wrapper w-variant-b0fc059d-865f-3854-3c7b-61fbed0a8481 w-inline-block [box-sizing:border-box] [background-color:#fff0] [color:white] [text-decoration:none] [transition:transform_.3s] [max-width:100%] [display:flex] [width:auto] [min-width:auto] [height:auto] [min-height:auto] [font-size:18px] [border-radius:0] [justify-content:center] [align-items:center]"
                  }
                  data-wf--social-media-link--social-media---variant={
                    "without-bg-dark"
                  }
                  href={"https://www.pinterest.com/"}
                  target={"_blank"}
                >
                  <div
                    className={
                      "icon-font-social-media [box-sizing:border-box] [font-family:'Social_Media_Icon_Font_Brix',_Arial,_sans-serif]"
                    }
                  >
                    {copy[54]}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
