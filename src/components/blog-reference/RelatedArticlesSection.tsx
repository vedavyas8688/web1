import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function RelatedArticlesSection() {
  const copy = referenceContent.BlogReference.RelatedArticlesSection;
  return (
    <section
      className={
        "rt-more-posts [box-sizing:border-box] [display:block] [padding-top:8.3125rem] [padding-bottom:8.75rem] max-[991px]:[padding-bottom:4.375rem] max-[991px]:[padding-top:3.9375rem]"
      }
    >
      <div
        className={
          "w-layout-blockcontainer rt-container w-container [box-sizing:border-box] [max-width:111.875rem] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:.9375rem] [padding-left:.9375rem]"
        }
      >
        <div
          className={
            "w-layout-vflex rt-post-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [justify-content:flex-start]"
          }
        >
          <div
            className={
              "rt-post-title rt-desktop-text-center [box-sizing:border-box] [text-align:center] [max-width:65.5625rem]"
            }
          >
            <h2
              className={
                "rt-gap-off rt-gap-extra-large [box-sizing:border-box] [margin-bottom:2.875rem] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:#111] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[991px]:[margin-bottom:1.6875rem] max-[768px]:[font-size:1.5625rem] max-[768px]:[margin-bottom:1.4rem] max-[479px]:[margin-bottom:1rem]"
              }
              data-w-id={"cac1af50-c3e7-e53b-0723-e85591ba09e0"}
            >
              {copy[0]}
            </h2>
          </div>
          <div
            className={
              "rt-desktop-full-width w-dyn-list [box-sizing:border-box] [width:100%]"
            }
          >
            <div
              className={
                "rt-latest-post-wrapper w-dyn-items [box-sizing:border-box] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [grid-template-rows:auto] [grid-template-columns:1fr_1fr] [display:grid] max-[768px]:[grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))]"
              }
              role={"list"}
            >
              <div
                className={"w-dyn-item [box-sizing:border-box]"}
                role={"listitem"}
              >
                <div
                  className={"rt-post-item [box-sizing:border-box]"}
                  data-w-id={"b3946c25-8f58-9022-a36a-1e7e5a23ce0b"}
                >
                  <RouteLink
                    className={
                      "rt-blog-card-image-wrapper rt-overflow-hidden rt-blog-card-image-wrapper-2 rt-radius-large w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative] [aspect-ratio:3/2]"
                    }
                    to={"/blog-post/evolution-of-architecture-through-time"}
                  >
                    <img
                      className={
                        "rt-card-v1-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] max-[768px]:[aspect-ratio:16/9]"
                      }
                      src={
                        "/images/69a304fe6550c5905e7aba85_blog-thumbnail-image-nine.webp"
                      }
                      loading={"lazy"}
                      alt={"Thumbnail image"}
                    />
                    <div
                      className={
                        "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:rgba(252,242,232,0.54)] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                      }
                    ></div>
                  </RouteLink>
                  <div
                    className={
                      "w-layout-hflex rt-latest-post-content [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.5625rem] [grid-row-gap:1.5625rem] [justify-content:space-between] [padding-top:2.5rem] max-[991px]:[grid-row-gap:.9rem] max-[991px]:[grid-column-gap:.9rem] max-[768px]:[grid-row-gap:.8rem] max-[768px]:[grid-column-gap:.8rem] max-[768px]:[padding-top:2rem]"
                    }
                  >
                    <div
                      className={
                        "w-layout-vflex rt-text-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:1.5625rem] [grid-row-gap:1.5625rem] [flex:1] [max-width:29.0625rem] max-[768px]:[grid-row-gap:1rem] max-[768px]:[grid-column-gap:1rem]"
                      }
                    >
                      <div
                        className={
                          "w-layout-hflex rt-post-date-wrapper [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:.5rem] [grid-row-gap:.5rem] [justify-content:flex-start]"
                        }
                      >
                        <div
                          className={
                            "w-layout-hflex [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex]"
                          }
                        >
                          <img
                            className={
                              " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                            }
                            src={
                              "/images/69afdcf52100fc13ac509743_Vector---2026-03-10T142520.886.svg"
                            }
                            loading={"eager"}
                            alt={""}
                          />
                        </div>
                        <div className={" [box-sizing:border-box]"}>
                          {copy[1]}
                        </div>
                      </div>
                      <RouteLink
                        className={
                          "rt-text-style-h4 [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.5625rem] [line-height:122%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.4rem] max-[991px]:[font-size:1.375rem] max-[768px]:[font-size:1.25rem]"
                        }
                        data-heading-title={"1"}
                        to={"/blog-post/evolution-of-architecture-through-time"}
                      >
                        {copy[2]}
                      </RouteLink>
                    </div>
                    <RouteLink
                      className={
                        "rt-post-button-wrapper w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:4.25rem] [display:flex] [border:.0625rem_solid_#11111133] [border-radius:2.375rem] [flex:1] [justify-content:center] [align-items:center] [height:5.66563rem] [margin-top:-.125rem] max-[768px]:[height:4rem] max-[768px]:[max-width:3rem] max-[479px]:[height:3rem] max-[479px]:[max-width:2.3rem]"
                      }
                      to={"/blog-post/evolution-of-architecture-through-time"}
                    >
                      <div
                        className={
                          "rt-post-arrow-wrapper [box-sizing:border-box] [max-width:.83125rem]"
                        }
                      >
                        <img
                          className={
                            "rt-image-height-auto [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:auto]"
                          }
                          src={
                            "/images/69afdd74d82b2723e3761d92_Arrow-1--7-.svg"
                          }
                          loading={"eager"}
                          alt={"Arrow"}
                        />
                      </div>
                    </RouteLink>
                  </div>
                </div>
              </div>
              <div
                className={"w-dyn-item [box-sizing:border-box]"}
                role={"listitem"}
              >
                <div
                  className={"rt-post-item [box-sizing:border-box]"}
                  data-w-id={"b3946c25-8f58-9022-a36a-1e7e5a23ce0b"}
                >
                  <RouteLink
                    className={
                      "rt-blog-card-image-wrapper rt-overflow-hidden rt-blog-card-image-wrapper-2 rt-radius-large w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative] [aspect-ratio:3/2]"
                    }
                    to={
                      "/blog-post/the-influence-of-cultural-context-on-design"
                    }
                  >
                    <img
                      className={
                        "rt-card-v1-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] max-[768px]:[aspect-ratio:16/9]"
                      }
                      src={
                        "/images/69a304c0aade3c77528f0456_blog-thumbnail-image-seven.webp"
                      }
                      loading={"lazy"}
                      alt={"Thumbnail image"}
                    />
                    <div
                      className={
                        "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:rgba(252,242,232,0.54)] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                      }
                    ></div>
                  </RouteLink>
                  <div
                    className={
                      "w-layout-hflex rt-latest-post-content [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:1.5625rem] [grid-row-gap:1.5625rem] [justify-content:space-between] [padding-top:2.5rem] max-[991px]:[grid-row-gap:.9rem] max-[991px]:[grid-column-gap:.9rem] max-[768px]:[grid-row-gap:.8rem] max-[768px]:[grid-column-gap:.8rem] max-[768px]:[padding-top:2rem]"
                    }
                  >
                    <div
                      className={
                        "w-layout-vflex rt-text-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:flex-start] [display:flex] [grid-column-gap:1.5625rem] [grid-row-gap:1.5625rem] [flex:1] [max-width:29.0625rem] max-[768px]:[grid-row-gap:1rem] max-[768px]:[grid-column-gap:1rem]"
                      }
                    >
                      <div
                        className={
                          "w-layout-hflex rt-post-date-wrapper [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:.5rem] [grid-row-gap:.5rem] [justify-content:flex-start]"
                        }
                      >
                        <div
                          className={
                            "w-layout-hflex [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex]"
                          }
                        >
                          <img
                            className={
                              " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                            }
                            src={
                              "/images/69afdcf52100fc13ac509743_Vector---2026-03-10T142520.886.svg"
                            }
                            loading={"eager"}
                            alt={""}
                          />
                        </div>
                        <div className={" [box-sizing:border-box]"}>
                          {copy[3]}
                        </div>
                      </div>
                      <RouteLink
                        className={
                          "rt-text-style-h4 [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.5625rem] [line-height:122%] [font-weight:500] [letter-spacing:.0625rem] max-[1280px]:[font-size:1.4rem] max-[991px]:[font-size:1.375rem] max-[768px]:[font-size:1.25rem]"
                        }
                        data-heading-title={"1"}
                        to={
                          "/blog-post/the-influence-of-cultural-context-on-design"
                        }
                      >
                        {copy[4]}
                      </RouteLink>
                    </div>
                    <RouteLink
                      className={
                        "rt-post-button-wrapper w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:4.25rem] [display:flex] [border:.0625rem_solid_#11111133] [border-radius:2.375rem] [flex:1] [justify-content:center] [align-items:center] [height:5.66563rem] [margin-top:-.125rem] max-[768px]:[height:4rem] max-[768px]:[max-width:3rem] max-[479px]:[height:3rem] max-[479px]:[max-width:2.3rem]"
                      }
                      to={
                        "/blog-post/the-influence-of-cultural-context-on-design"
                      }
                    >
                      <div
                        className={
                          "rt-post-arrow-wrapper [box-sizing:border-box] [max-width:.83125rem]"
                        }
                      >
                        <img
                          className={
                            "rt-image-height-auto [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:auto]"
                          }
                          src={
                            "/images/69afdd74d82b2723e3761d92_Arrow-1--7-.svg"
                          }
                          loading={"eager"}
                          alt={"Arrow"}
                        />
                      </div>
                    </RouteLink>
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
