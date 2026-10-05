import { referenceContent } from "../../data/referenceContent";
export default function ArticleSection() {
  const copy = referenceContent.BlogReference.ArticleSection;
  return (
    <section
      className={
        "rt-blog-details [box-sizing:border-box] [display:block] [padding-top:8.75rem] [padding-bottom:8.3125rem] [background-color:white] max-[991px]:[padding-bottom:3.9375rem] max-[991px]:[padding-top:4.375rem]"
      }
    >
      <div
        className={
          "w-layout-blockcontainer rt-container w-container [box-sizing:border-box] [max-width:111.875rem] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:.9375rem] [padding-left:.9375rem]"
        }
      >
        <div
          className={
            "w-layout-hflex rt-blog-details-main-wrapper [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex] [grid-column-gap:1.5625rem] [grid-row-gap:1.5625rem] [justify-content:space-between] max-[991px]:[grid-row-gap:.9rem] max-[991px]:[grid-column-gap:.9rem] max-[768px]:[grid-row-gap:1.875rem] max-[768px]:[flex-flow:column] max-[768px]:[grid-column-gap:1.875rem] max-[479px]:[align-items:stretch]"
          }
        >
          <div
            className={
              "w-layout-hflex rt-blog-details-left-content rt-radius-large [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [border-radius:1.25rem] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [background-color:#f4f4f4] [flex:1] [justify-content:flex-start] [max-width:26.625rem] [padding-top:.625rem] [padding-right:.625rem] [padding-bottom:.625rem] [padding-left:.625rem] [position:sticky] [top:1.875rem] max-[991px]:[top:4.375rem] max-[768px]:[position:static] max-[479px]:[max-width:none]"
            }
            data-w-id={"3b8f7bb0-ff7d-172f-d77f-0c8d325550c9"}
          >
            <div
              className={
                "rt-profile rt-radius-medium rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [border-radius:.9375rem] [max-width:8.5625rem]"
              }
            >
              <img
                className={
                  " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                }
                src={"/images/69afe3c28a06af268b1c7321_profile-image-nine.webp"}
                loading={"lazy"}
                alt={"Author image"}
              />
            </div>
            <div
              className={
                "w-layout-vflex rt-author-details [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [grid-column-gap:.3125rem] [grid-row-gap:.3125rem]"
              }
            >
              <div className={" [box-sizing:border-box]"}>{copy[0]}</div>
              <div
                className={
                  "rt-text-style-h5 [box-sizing:border-box] [font-family:Nohemi,Arial,sans-serif] [color:#111] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                }
              >
                {copy[1]}
              </div>
              <div className={" [box-sizing:border-box]"}>{copy[2]}</div>
              <div
                className={
                  "w-layout-hflex rt-social-links [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:.375rem] [grid-row-gap:.375rem] [justify-content:flex-start] [margin-top:.3rem]"
                }
              >
                <a
                  className={
                    "rt-social-link rt-radius-xxl w-inline-block [box-sizing:border-box] [background-color:black] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [border-radius:100%] [justify-content:center] [align-items:center] [width:1.875rem] [height:1.875rem]"
                  }
                  href={"https://www.facebook.com"}
                >
                  <div
                    className={
                      "w-layout-hflex rt-social-icon [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex] [max-width:.75rem]"
                    }
                  >
                    <img
                      className={
                        "rt-image-height-auto [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:auto]"
                      }
                      src={
                        "/images/69afbf431f8c715b96c5bc78_Mask-group--6-.svg"
                      }
                      loading={"eager"}
                      alt={"icon"}
                    />
                  </div>
                </a>
                <a
                  className={
                    "rt-social-link rt-radius-xxl w-inline-block [box-sizing:border-box] [background-color:black] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [border-radius:100%] [justify-content:center] [align-items:center] [width:1.875rem] [height:1.875rem]"
                  }
                  href={"https://www.linkedin.com"}
                >
                  <div
                    className={
                      "w-layout-hflex rt-social-icon [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex] [max-width:.75rem]"
                    }
                  >
                    <img
                      className={
                        "rt-image-height-auto [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:auto]"
                      }
                      src={
                        "/images/69afbf43c283f8a29d2ec859_Mask-group--7-.svg"
                      }
                      loading={"eager"}
                      alt={"icon"}
                    />
                  </div>
                </a>
                <a
                  className={
                    "rt-social-link rt-radius-xxl w-inline-block [box-sizing:border-box] [background-color:black] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [border-radius:100%] [justify-content:center] [align-items:center] [width:1.875rem] [height:1.875rem]"
                  }
                  href={"https://x.com"}
                >
                  <div
                    className={
                      "w-layout-hflex rt-social-icon [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex] [max-width:.75rem]"
                    }
                  >
                    <img
                      className={
                        "rt-image-height-auto [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:auto]"
                      }
                      src={
                        "/images/69afbf432710b2a13b783202_Mask-group--8-.svg"
                      }
                      loading={"eager"}
                      alt={"icon"}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              "w-layout-vflex rt-blog-details-right-content [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [flex:1] [max-width:67.875rem] [margin-top:-1.5rem] max-[768px]:[margin-top:0]"
            }
          >
            <div
              className={
                "rt-blog-details-wrapper-v1 w-richtext [box-sizing:border-box] [max-width:59.0625rem] [margin-bottom:2.8125rem] max-[991px]:[margin-bottom:1rem]"
              }
              data-w-id={"3b12d184-2adc-038c-2e5b-a306369d43b1"}
            >
              <h3
                className={
                  " [box-sizing:border-box] [margin-bottom:.625rem] [font-weight:500] [margin-top:1.25rem] [font-size:1.875rem] [line-height:120%] [font-family:Nohemi,Arial,sans-serif] [color:black] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.7rem] max-[991px]:[font-size:1.625rem] max-[768px]:[font-size:1.375rem]"
                }
              >
                {copy[3]}
              </h3>
              <p
                className={
                  " [box-sizing:border-box] [margin-top:0] [margin-bottom:.625rem]"
                }
              >
                {copy[4]}
              </p>
              <ol
                className={
                  " [box-sizing:border-box] [margin-top:0] [margin-bottom:.625rem] [padding-left:1.25rem] [overflow:hidden]"
                }
                role={"list"}
              >
                <li className={" [box-sizing:border-box]"}>{copy[5]}</li>
                <li className={" [box-sizing:border-box]"}>{copy[6]}</li>
                <li className={" [box-sizing:border-box]"}>{copy[7]}</li>
              </ol>
              <p
                className={
                  " [box-sizing:border-box] [margin-top:0] [margin-bottom:.625rem]"
                }
              >
                {copy[8]}
              </p>
              <h5
                className={
                  " [box-sizing:border-box] [margin-bottom:.625rem] [font-weight:500] [margin-top:.625rem] [font-size:1.25rem] [line-height:140%] [font-family:Nohemi,Arial,sans-serif] [color:#111] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                }
              >
                {copy[9]}
              </h5>
              <p
                className={
                  " [box-sizing:border-box] [margin-top:0] [margin-bottom:.625rem]"
                }
              >
                {copy[10]}
              </p>
              <p
                className={
                  " [box-sizing:border-box] [margin-top:0] [margin-bottom:.625rem]"
                }
              >
                {copy[11]}
              </p>
            </div>
            <div
              className={
                "w-layout-hflex rt-blog-featured-image-wrapper [box-sizing:border-box] [flex-direction:row] [align-items:stretch] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [justify-content:space-between] [margin-bottom:2.8125rem] max-[991px]:[margin-bottom:1rem]"
              }
            >
              <div
                className={
                  "rt-feature-image-v1 [box-sizing:border-box] [flex:1] [max-width:27.5rem]"
                }
                data-w-id={"0cda7ea2-dfb3-0aaa-0bd8-cd5e9d6fbeb5"}
              >
                <div
                  className={
                    "rt-content-grid-box rt-desktop-full-width rt-image-v10 [box-sizing:border-box] [width:100%] [flex:1] [position:relative] [min-height:20.625rem] max-[768px]:[min-height:15rem]"
                  }
                >
                  <div
                    className={
                      "rt-while-scrolling-effect [box-sizing:border-box] [z-index:1] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                    }
                  >
                    <div
                      className={
                        "w-layout-hflex [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex]"
                      }
                    >
                      <div
                        className={
                          "w-layout-vflex rt-parallax-animation rt-overflow-hidden rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [overflow:hidden] [border-radius:1.25rem] [z-index:1] [justify-content:center] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                        }
                        data-w-id={"9a2f3ce9-4ef4-63ab-7c3c-018cbece7b2d"}
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
                            "rt-cover-image rt-parallax rt-image-v16 [box-sizing:border-box] [z-index:1] [background-image:url('/images/69afc85f766a8ba798b5498b_feature-image-one--3-.webp')] [background-position:50%] [background-repeat:no-repeat] [background-size:cover] [width:100%] [height:120%] [position:absolute]"
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  "rt-feature-image-v2 [box-sizing:border-box] [flex:1] [max-width:38.125rem]"
                }
                data-w-id={"c0c56f33-004e-4128-42c8-eec1bf84741b"}
              >
                <div
                  className={
                    "rt-content-grid-box rt-desktop-full-width rt-image-v10 [box-sizing:border-box] [width:100%] [flex:1] [position:relative] [min-height:20.625rem] max-[768px]:[min-height:15rem]"
                  }
                >
                  <div
                    className={
                      "rt-while-scrolling-effect [box-sizing:border-box] [z-index:1] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                    }
                  >
                    <div
                      className={
                        "w-layout-hflex [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex]"
                      }
                    >
                      <div
                        className={
                          "w-layout-vflex rt-parallax-animation rt-overflow-hidden rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [overflow:hidden] [border-radius:1.25rem] [z-index:1] [justify-content:center] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
                        }
                        data-w-id={"f3053816-5956-c202-70a6-f4a22d9a6035"}
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
                            "rt-cover-image rt-parallax rt-image-v16 [box-sizing:border-box] [z-index:1] [background-image:url('/images/69afc861068270eab593ce2b_feature-image-two--2-.webp')] [background-position:50%] [background-repeat:no-repeat] [background-size:cover] [width:100%] [height:120%] [position:absolute]"
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                "rt-blog-details-wrapper-v2 w-richtext [box-sizing:border-box] [max-width:61.875rem] [margin-bottom:1.375rem]"
              }
              data-w-id={"67f2ee26-10ce-f391-e15d-d3bbe8f54cc2"}
            >
              <h5
                className={
                  " [box-sizing:border-box] [margin-bottom:.625rem] [font-weight:500] [margin-top:.625rem] [font-size:1.25rem] [line-height:140%] [font-family:Nohemi,Arial,sans-serif] [color:#111] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                }
              >
                {copy[12]}
              </h5>
              <p
                className={
                  " [box-sizing:border-box] [margin-top:0] [margin-bottom:.625rem]"
                }
              >
                {copy[13]}
              </p>
            </div>
            <div
              className={
                "rt-radius-tiny rt-blog-details-wrapper-v3 [box-sizing:border-box] [border-radius:.625rem] [background-color:#f8f8f8] [margin-bottom:1.5rem] [padding-top:2.75rem] [padding-right:7.275rem] [padding-bottom:2.75rem] [padding-left:3.75rem] max-[1920px]:[padding-right:3.75rem] max-[1280px]:[padding-left:1.25rem] max-[1280px]:[padding-right:1.25rem] max-[991px]:[padding-bottom:1.25rem] max-[991px]:[padding-top:1.25rem] max-[768px]:[padding-bottom:1rem] max-[768px]:[padding-top:1rem]"
              }
              data-w-id={"2e06253f-a735-529a-5557-09b2a653cc8c"}
            >
              <div className={"w-richtext [box-sizing:border-box]"}>
                <h5
                  className={
                    " [box-sizing:border-box] [margin-bottom:.625rem] [font-weight:500] [margin-top:.625rem] [font-size:1.25rem] [line-height:140%] [font-family:Nohemi,Arial,sans-serif] [color:#111] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[768px]:[font-size:1.0625rem]"
                  }
                >
                  {copy[14]}
                </h5>
              </div>
            </div>
            <div
              className={
                "rt-blog-details-wrapper-v4 w-richtext [box-sizing:border-box] [margin-bottom:-1.0625rem] max-[768px]:[margin-bottom:0]"
              }
              data-w-id={"9c70826f-b9b0-d2e9-e35f-4f717f0361a7"}
            >
              <p
                className={
                  " [box-sizing:border-box] [margin-top:0] [margin-bottom:.625rem]"
                }
              >
                {copy[15]}
                <br className={" [box-sizing:border-box]"} />
                {copy[16]}
                <br className={" [box-sizing:border-box]"} />
                {copy[17]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
