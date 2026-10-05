import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function ArticlesSection() {
  const copy = referenceContent.Blog.ArticlesSection;
  return (
    <div
      className={
        "w-layout-blockcontainer rt-container w-container [box-sizing:border-box] [max-width:111.875rem] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:.9375rem] [padding-left:.9375rem]"
      }
    >
      <div
        className={
          "w-layout-vflex rt-blog-v1-main-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [justify-content:flex-start]"
        }
      >
        <div
          className={
            "rt-blog-top-wrapper rt-desktop-text-center [box-sizing:border-box] [text-align:center] [max-width:71rem] max-[1280px]:[max-width:45rem]"
          }
        >
          <h1
            className={
              "rt-gap-off rt-gap-extra-large rt-text-color-white [box-sizing:border-box] [margin-top:0] [margin-right:0] [margin-bottom:2.875rem] [margin-left:0] [font-size:5rem] [font-weight:400] [line-height:104%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:0rem] max-[1280px]:[font-size:2.6rem] max-[991px]:[font-size:2.4rem] max-[991px]:[margin-bottom:1.6875rem] max-[768px]:[font-size:2.1875rem] max-[768px]:[margin-bottom:1.4rem] max-[479px]:[font-size:1.875rem] max-[479px]:[margin-bottom:1rem]"
            }
            text-reveal-on-load={"1"}
          >
            {copy[0]}
          </h1>
        </div>
        <div
          className={
            "w-layout-hflex rt-blog-cards-wrapper [box-sizing:border-box] [flex-direction:row] [align-items:flex-start] [display:flex] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] max-[768px]:[flex-flow:column]"
          }
        >
          <div className={"w-dyn-list [box-sizing:border-box]"}>
            <div
              className={
                "rt-blog-cards-col w-dyn-items [box-sizing:border-box] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [flex-flow:column] [flex:1] [align-items:stretch] [display:flex]"
              }
              role={"list"}
            >
              <div
                className={"w-dyn-item [box-sizing:border-box]"}
                role={"listitem"}
              >
                <div
                  className={
                    "w-layout-vflex rt-blog-card rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [border-radius:1.25rem] [background-color:#f4f4f4] [box-shadow:0_1.25rem_5.625rem_#0000001a]"
                  }
                  data-w-id={"307e45cf-dbdd-e185-d3cf-c7b5d843c8de"}
                >
                  <RouteLink
                    className={
                      "rt-blog-card-image-wrapper rt-overflow-hidden rt-radius-large w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
                    }
                    to={"/blog-post/trends-shaping-modern-architectural-design"}
                  >
                    <img
                      className={
                        "rt-card-v1-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] max-[768px]:[aspect-ratio:16/9]"
                      }
                      src={"/images/69a3052f33dd21f5b1f255b6_blog-image.webp"}
                      loading={"lazy"}
                      alt={"Blog card thumbnail image"}
                    />
                    <div
                      className={
                        "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:rgba(252,242,232,0.54)] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                      }
                    ></div>
                  </RouteLink>
                  <div
                    className={
                      "w-layout-vflex rt-blog-card-content [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [padding-top:2.5rem] [padding-right:3.75rem] [padding-bottom:3.125rem] [padding-left:3.75rem] max-[1920px]:[padding-left:3.125rem] max-[1920px]:[padding-right:3.125rem] max-[1280px]:[padding-bottom:1.875rem] max-[1280px]:[padding-left:1.25rem] max-[1280px]:[padding-right:1.25rem] max-[1280px]:[padding-top:1.1rem]"
                    }
                  >
                    <div
                      className={
                        "rt-text-color-black rt-gap-medium [box-sizing:border-box] [color:black] [margin-bottom:.9375rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[margin-bottom:.7rem]"
                      }
                    >
                      {copy[1]}
                    </div>
                    <RouteLink
                      className={
                        "rt-text-style-h5 rt-gap-large [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] [margin-bottom:1.5625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[991px]:[margin-bottom:.9rem] max-[768px]:[font-size:1.0625rem] max-[768px]:[margin-bottom:.8rem]"
                      }
                      to={
                        "/blog-post/trends-shaping-modern-architectural-design"
                      }
                    >
                      {copy[2]}
                    </RouteLink>
                    <div
                      className={
                        "rt-line-v4 rt-desktop-full-width [box-sizing:border-box] [width:100%] [background-color:#0003] [height:.0625rem]"
                      }
                    ></div>
                    <div
                      className={
                        "w-layout-hflex rt-blog-author-details [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:.625rem] [grid-row-gap:.625rem] [justify-content:flex-start] [margin-top:1.9375rem] max-[991px]:[margin-top:1.44rem]"
                      }
                    >
                      <div
                        className={
                          "rt-profile-image rt-radius-xxl rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [border-radius:100%] [width:2.5rem] [height:2.5rem]"
                        }
                      >
                        <img
                          className={
                            " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                          }
                          src={
                            "/images/69afe3c28a06af268b1c7321_profile-image-nine.webp"
                          }
                          loading={"lazy"}
                          alt={""}
                        />
                      </div>
                      <div
                        className={
                          "rt-text-color-black [box-sizing:border-box] [color:black]"
                        }
                      >
                        {copy[3]}
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
                    "w-layout-vflex rt-blog-card rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [border-radius:1.25rem] [background-color:#f4f4f4] [box-shadow:0_1.25rem_5.625rem_#0000001a]"
                  }
                  data-w-id={"307e45cf-dbdd-e185-d3cf-c7b5d843c8de"}
                >
                  <RouteLink
                    className={
                      "rt-blog-card-image-wrapper rt-overflow-hidden rt-radius-large w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
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
                      alt={"Blog card thumbnail image"}
                    />
                    <div
                      className={
                        "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:rgba(252,242,232,0.54)] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                      }
                    ></div>
                  </RouteLink>
                  <div
                    className={
                      "w-layout-vflex rt-blog-card-content [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [padding-top:2.5rem] [padding-right:3.75rem] [padding-bottom:3.125rem] [padding-left:3.75rem] max-[1920px]:[padding-left:3.125rem] max-[1920px]:[padding-right:3.125rem] max-[1280px]:[padding-bottom:1.875rem] max-[1280px]:[padding-left:1.25rem] max-[1280px]:[padding-right:1.25rem] max-[1280px]:[padding-top:1.1rem]"
                    }
                  >
                    <div
                      className={
                        "rt-text-color-black rt-gap-medium [box-sizing:border-box] [color:black] [margin-bottom:.9375rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[margin-bottom:.7rem]"
                      }
                    >
                      {copy[4]}
                    </div>
                    <RouteLink
                      className={
                        "rt-text-style-h5 rt-gap-large [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] [margin-bottom:1.5625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[991px]:[margin-bottom:.9rem] max-[768px]:[font-size:1.0625rem] max-[768px]:[margin-bottom:.8rem]"
                      }
                      to={"/blog-post/evolution-of-architecture-through-time"}
                    >
                      {copy[5]}
                    </RouteLink>
                    <div
                      className={
                        "rt-line-v4 rt-desktop-full-width [box-sizing:border-box] [width:100%] [background-color:#0003] [height:.0625rem]"
                      }
                    ></div>
                    <div
                      className={
                        "w-layout-hflex rt-blog-author-details [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:.625rem] [grid-row-gap:.625rem] [justify-content:flex-start] [margin-top:1.9375rem] max-[991px]:[margin-top:1.44rem]"
                      }
                    >
                      <div
                        className={
                          "rt-profile-image rt-radius-xxl rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [border-radius:100%] [width:2.5rem] [height:2.5rem]"
                        }
                      >
                        <img
                          className={
                            " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                          }
                          src={
                            "/images/69afe3ed0830f57a774048f3_profile-image-eight.webp"
                          }
                          loading={"lazy"}
                          alt={""}
                        />
                      </div>
                      <div
                        className={
                          "rt-text-color-black [box-sizing:border-box] [color:black]"
                        }
                      >
                        {copy[6]}
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
                    "w-layout-vflex rt-blog-card rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [border-radius:1.25rem] [background-color:#f4f4f4] [box-shadow:0_1.25rem_5.625rem_#0000001a]"
                  }
                  data-w-id={"307e45cf-dbdd-e185-d3cf-c7b5d843c8de"}
                >
                  <RouteLink
                    className={
                      "rt-blog-card-image-wrapper rt-overflow-hidden rt-radius-large w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
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
                      alt={"Blog card thumbnail image"}
                    />
                    <div
                      className={
                        "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:rgba(252,242,232,0.54)] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                      }
                    ></div>
                  </RouteLink>
                  <div
                    className={
                      "w-layout-vflex rt-blog-card-content [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [padding-top:2.5rem] [padding-right:3.75rem] [padding-bottom:3.125rem] [padding-left:3.75rem] max-[1920px]:[padding-left:3.125rem] max-[1920px]:[padding-right:3.125rem] max-[1280px]:[padding-bottom:1.875rem] max-[1280px]:[padding-left:1.25rem] max-[1280px]:[padding-right:1.25rem] max-[1280px]:[padding-top:1.1rem]"
                    }
                  >
                    <div
                      className={
                        "rt-text-color-black rt-gap-medium [box-sizing:border-box] [color:black] [margin-bottom:.9375rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[margin-bottom:.7rem]"
                      }
                    >
                      {copy[7]}
                    </div>
                    <RouteLink
                      className={
                        "rt-text-style-h5 rt-gap-large [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] [margin-bottom:1.5625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[991px]:[margin-bottom:.9rem] max-[768px]:[font-size:1.0625rem] max-[768px]:[margin-bottom:.8rem]"
                      }
                      to={
                        "/blog-post/the-influence-of-cultural-context-on-design"
                      }
                    >
                      {copy[8]}
                    </RouteLink>
                    <div
                      className={
                        "rt-line-v4 rt-desktop-full-width [box-sizing:border-box] [width:100%] [background-color:#0003] [height:.0625rem]"
                      }
                    ></div>
                    <div
                      className={
                        "w-layout-hflex rt-blog-author-details [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:.625rem] [grid-row-gap:.625rem] [justify-content:flex-start] [margin-top:1.9375rem] max-[991px]:[margin-top:1.44rem]"
                      }
                    >
                      <div
                        className={
                          "rt-profile-image rt-radius-xxl rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [border-radius:100%] [width:2.5rem] [height:2.5rem]"
                        }
                      >
                        <img
                          className={
                            " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                          }
                          src={
                            "/images/69afe3d35cf4e65eb8789532_profile-image-seven.webp"
                          }
                          loading={"lazy"}
                          alt={""}
                        />
                      </div>
                      <div
                        className={
                          "rt-text-color-black [box-sizing:border-box] [color:black]"
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
          <div className={"w-dyn-list [box-sizing:border-box]"}>
            <div
              className={
                "rt-blog-cards-col w-dyn-items [box-sizing:border-box] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [flex-flow:column] [flex:1] [align-items:stretch] [display:flex]"
              }
              role={"list"}
            >
              <div
                className={"w-dyn-item [box-sizing:border-box]"}
                role={"listitem"}
              >
                <div
                  className={
                    "w-layout-vflex rt-blog-card rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [border-radius:1.25rem] [background-color:#f4f4f4] [box-shadow:0_1.25rem_5.625rem_#0000001a]"
                  }
                  data-w-id={"e466016b-4cea-7b99-44e8-d81bf6c4c51f"}
                >
                  <RouteLink
                    className={
                      "rt-blog-card-image-wrapper rt-overflow-hidden rt-radius-large w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
                    }
                    to={
                      "/blog-post/sustainable-solutions-in-urban-architecture"
                    }
                  >
                    <img
                      className={
                        "rt-card-v1-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] max-[768px]:[aspect-ratio:16/9]"
                      }
                      src={
                        "/images/69a3048759e3b866f2ae8f55_blog-thumbnail-image-six.webp"
                      }
                      loading={"lazy"}
                      alt={"Blog card thumbnail image"}
                    />
                    <div
                      className={
                        "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:rgba(252,242,232,0.54)] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                      }
                    ></div>
                  </RouteLink>
                  <div
                    className={
                      "w-layout-vflex rt-blog-card-content [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [padding-top:2.5rem] [padding-right:3.75rem] [padding-bottom:3.125rem] [padding-left:3.75rem] max-[1920px]:[padding-left:3.125rem] max-[1920px]:[padding-right:3.125rem] max-[1280px]:[padding-bottom:1.875rem] max-[1280px]:[padding-left:1.25rem] max-[1280px]:[padding-right:1.25rem] max-[1280px]:[padding-top:1.1rem]"
                    }
                  >
                    <div
                      className={
                        "rt-text-color-black rt-gap-medium [box-sizing:border-box] [color:black] [margin-bottom:.9375rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[margin-bottom:.7rem]"
                      }
                    >
                      {copy[10]}
                    </div>
                    <RouteLink
                      className={
                        "rt-text-style-h5 rt-gap-large [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] [margin-bottom:1.5625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[991px]:[margin-bottom:.9rem] max-[768px]:[font-size:1.0625rem] max-[768px]:[margin-bottom:.8rem]"
                      }
                      to={
                        "/blog-post/sustainable-solutions-in-urban-architecture"
                      }
                    >
                      {copy[11]}
                    </RouteLink>
                    <div
                      className={
                        "rt-line-v4 rt-desktop-full-width [box-sizing:border-box] [width:100%] [background-color:#0003] [height:.0625rem]"
                      }
                    ></div>
                    <div
                      className={
                        "w-layout-hflex rt-blog-author-details [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:.625rem] [grid-row-gap:.625rem] [justify-content:flex-start] [margin-top:1.9375rem] max-[991px]:[margin-top:1.44rem]"
                      }
                    >
                      <div
                        className={
                          "rt-profile-image rt-radius-xxl rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [border-radius:100%] [width:2.5rem] [height:2.5rem]"
                        }
                      >
                        <img
                          className={
                            " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                          }
                          src={
                            "/images/69afe3f988c943a391e4423f_profile-image-six.webp"
                          }
                          loading={"lazy"}
                          alt={""}
                        />
                      </div>
                      <div
                        className={
                          "rt-text-color-black [box-sizing:border-box] [color:black]"
                        }
                      >
                        {copy[12]}
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
                    "w-layout-vflex rt-blog-card rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [border-radius:1.25rem] [background-color:#f4f4f4] [box-shadow:0_1.25rem_5.625rem_#0000001a]"
                  }
                  data-w-id={"e466016b-4cea-7b99-44e8-d81bf6c4c51f"}
                >
                  <RouteLink
                    className={
                      "rt-blog-card-image-wrapper rt-overflow-hidden rt-radius-large w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
                    }
                    to={"/blog-post/historic-preservation-in-modern-design"}
                  >
                    <img
                      className={
                        "rt-card-v1-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] max-[768px]:[aspect-ratio:16/9]"
                      }
                      src={
                        "/images/69a3045782e24dd9d006107e_blog-thumbnail-image-five.webp"
                      }
                      loading={"lazy"}
                      alt={"Blog card thumbnail image"}
                    />
                    <div
                      className={
                        "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:rgba(252,242,232,0.54)] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                      }
                    ></div>
                  </RouteLink>
                  <div
                    className={
                      "w-layout-vflex rt-blog-card-content [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [padding-top:2.5rem] [padding-right:3.75rem] [padding-bottom:3.125rem] [padding-left:3.75rem] max-[1920px]:[padding-left:3.125rem] max-[1920px]:[padding-right:3.125rem] max-[1280px]:[padding-bottom:1.875rem] max-[1280px]:[padding-left:1.25rem] max-[1280px]:[padding-right:1.25rem] max-[1280px]:[padding-top:1.1rem]"
                    }
                  >
                    <div
                      className={
                        "rt-text-color-black rt-gap-medium [box-sizing:border-box] [color:black] [margin-bottom:.9375rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[margin-bottom:.7rem]"
                      }
                    >
                      {copy[13]}
                    </div>
                    <RouteLink
                      className={
                        "rt-text-style-h5 rt-gap-large [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] [margin-bottom:1.5625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[991px]:[margin-bottom:.9rem] max-[768px]:[font-size:1.0625rem] max-[768px]:[margin-bottom:.8rem]"
                      }
                      to={"/blog-post/historic-preservation-in-modern-design"}
                    >
                      {copy[14]}
                    </RouteLink>
                    <div
                      className={
                        "rt-line-v4 rt-desktop-full-width [box-sizing:border-box] [width:100%] [background-color:#0003] [height:.0625rem]"
                      }
                    ></div>
                    <div
                      className={
                        "w-layout-hflex rt-blog-author-details [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:.625rem] [grid-row-gap:.625rem] [justify-content:flex-start] [margin-top:1.9375rem] max-[991px]:[margin-top:1.44rem]"
                      }
                    >
                      <div
                        className={
                          "rt-profile-image rt-radius-xxl rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [border-radius:100%] [width:2.5rem] [height:2.5rem]"
                        }
                      >
                        <img
                          className={
                            " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                          }
                          src={
                            "/images/69afe404d915f2161e2b85ae_profile-image-five.webp"
                          }
                          loading={"lazy"}
                          alt={""}
                        />
                      </div>
                      <div
                        className={
                          "rt-text-color-black [box-sizing:border-box] [color:black]"
                        }
                      >
                        {copy[15]}
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
                    "w-layout-vflex rt-blog-card rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [border-radius:1.25rem] [background-color:#f4f4f4] [box-shadow:0_1.25rem_5.625rem_#0000001a]"
                  }
                  data-w-id={"e466016b-4cea-7b99-44e8-d81bf6c4c51f"}
                >
                  <RouteLink
                    className={
                      "rt-blog-card-image-wrapper rt-overflow-hidden rt-radius-large w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
                    }
                    to={
                      "/blog-post/enhancing-homes-through-architectural-design"
                    }
                  >
                    <img
                      className={
                        "rt-card-v1-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] max-[768px]:[aspect-ratio:16/9]"
                      }
                      src={
                        "/images/69a3041e80de6ae1e0669200_blog-thumbnail-image-four.webp"
                      }
                      loading={"lazy"}
                      alt={"Blog card thumbnail image"}
                    />
                    <div
                      className={
                        "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:rgba(252,242,232,0.54)] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                      }
                    ></div>
                  </RouteLink>
                  <div
                    className={
                      "w-layout-vflex rt-blog-card-content [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [padding-top:2.5rem] [padding-right:3.75rem] [padding-bottom:3.125rem] [padding-left:3.75rem] max-[1920px]:[padding-left:3.125rem] max-[1920px]:[padding-right:3.125rem] max-[1280px]:[padding-bottom:1.875rem] max-[1280px]:[padding-left:1.25rem] max-[1280px]:[padding-right:1.25rem] max-[1280px]:[padding-top:1.1rem]"
                    }
                  >
                    <div
                      className={
                        "rt-text-color-black rt-gap-medium [box-sizing:border-box] [color:black] [margin-bottom:.9375rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[margin-bottom:.7rem]"
                      }
                    >
                      {copy[16]}
                    </div>
                    <RouteLink
                      className={
                        "rt-text-style-h5 rt-gap-large [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] [margin-bottom:1.5625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[991px]:[margin-bottom:.9rem] max-[768px]:[font-size:1.0625rem] max-[768px]:[margin-bottom:.8rem]"
                      }
                      to={
                        "/blog-post/enhancing-homes-through-architectural-design"
                      }
                    >
                      {copy[17]}
                    </RouteLink>
                    <div
                      className={
                        "rt-line-v4 rt-desktop-full-width [box-sizing:border-box] [width:100%] [background-color:#0003] [height:.0625rem]"
                      }
                    ></div>
                    <div
                      className={
                        "w-layout-hflex rt-blog-author-details [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:.625rem] [grid-row-gap:.625rem] [justify-content:flex-start] [margin-top:1.9375rem] max-[991px]:[margin-top:1.44rem]"
                      }
                    >
                      <div
                        className={
                          "rt-profile-image rt-radius-xxl rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [border-radius:100%] [width:2.5rem] [height:2.5rem]"
                        }
                      >
                        <img
                          className={
                            " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                          }
                          src={
                            "/images/69afe411d5ae3cc8253a5a24_profile-image-four--1-.webp"
                          }
                          loading={"lazy"}
                          alt={""}
                        />
                      </div>
                      <div
                        className={
                          "rt-text-color-black [box-sizing:border-box] [color:black]"
                        }
                      >
                        {copy[18]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"w-dyn-list [box-sizing:border-box]"}>
            <div
              className={
                "rt-blog-cards-col w-dyn-items [box-sizing:border-box] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [flex-flow:column] [flex:1] [align-items:stretch] [display:flex]"
              }
              role={"list"}
            >
              <div
                className={"w-dyn-item [box-sizing:border-box]"}
                role={"listitem"}
              >
                <div
                  className={
                    "w-layout-vflex rt-blog-card rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [border-radius:1.25rem] [background-color:#f4f4f4] [box-shadow:0_1.25rem_5.625rem_#0000001a]"
                  }
                  data-w-id={"f1507410-5126-81c3-732c-1ab601c89778"}
                >
                  <RouteLink
                    className={
                      "rt-blog-card-image-wrapper rt-overflow-hidden rt-radius-large w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
                    }
                    to={"/blog-post/designing-spaces-with-timeless-elegance"}
                  >
                    <img
                      className={
                        "rt-card-v1-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] max-[768px]:[aspect-ratio:16/9]"
                      }
                      src={
                        "/images/69a303ffb6c236e01121b823_blog-thumbnail-image-three.webp"
                      }
                      loading={"lazy"}
                      alt={"Blog card thumbnail image"}
                    />
                    <div
                      className={
                        "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:rgba(252,242,232,0.54)] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                      }
                    ></div>
                  </RouteLink>
                  <div
                    className={
                      "w-layout-vflex rt-blog-card-content [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [padding-top:2.5rem] [padding-right:3.75rem] [padding-bottom:3.125rem] [padding-left:3.75rem] max-[1920px]:[padding-left:3.125rem] max-[1920px]:[padding-right:3.125rem] max-[1280px]:[padding-bottom:1.875rem] max-[1280px]:[padding-left:1.25rem] max-[1280px]:[padding-right:1.25rem] max-[1280px]:[padding-top:1.1rem]"
                    }
                  >
                    <div
                      className={
                        "rt-text-color-black rt-gap-medium [box-sizing:border-box] [color:black] [margin-bottom:.9375rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[margin-bottom:.7rem]"
                      }
                    >
                      {copy[19]}
                    </div>
                    <RouteLink
                      className={
                        "rt-text-style-h5 rt-gap-large [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] [margin-bottom:1.5625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[991px]:[margin-bottom:.9rem] max-[768px]:[font-size:1.0625rem] max-[768px]:[margin-bottom:.8rem]"
                      }
                      to={"/blog-post/designing-spaces-with-timeless-elegance"}
                    >
                      {copy[20]}
                    </RouteLink>
                    <div
                      className={
                        "rt-line-v4 rt-desktop-full-width [box-sizing:border-box] [width:100%] [background-color:#0003] [height:.0625rem]"
                      }
                    ></div>
                    <div
                      className={
                        "w-layout-hflex rt-blog-author-details [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:.625rem] [grid-row-gap:.625rem] [justify-content:flex-start] [margin-top:1.9375rem] max-[991px]:[margin-top:1.44rem]"
                      }
                    >
                      <div
                        className={
                          "rt-profile-image rt-radius-xxl rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [border-radius:100%] [width:2.5rem] [height:2.5rem]"
                        }
                      >
                        <img
                          className={
                            " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                          }
                          src={
                            "/images/69afe420670083e8a6814448_profile-image-three--1-.webp"
                          }
                          loading={"lazy"}
                          alt={""}
                        />
                      </div>
                      <div
                        className={
                          "rt-text-color-black [box-sizing:border-box] [color:black]"
                        }
                      >
                        {copy[21]}
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
                    "w-layout-vflex rt-blog-card rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [border-radius:1.25rem] [background-color:#f4f4f4] [box-shadow:0_1.25rem_5.625rem_#0000001a]"
                  }
                  data-w-id={"f1507410-5126-81c3-732c-1ab601c89778"}
                >
                  <RouteLink
                    className={
                      "rt-blog-card-image-wrapper rt-overflow-hidden rt-radius-large w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
                    }
                    to={"/blog-post/urban-design-principles-for-better-living"}
                  >
                    <img
                      className={
                        "rt-card-v1-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] max-[768px]:[aspect-ratio:16/9]"
                      }
                      src={
                        "/images/69a303b58b76a47d1b0c671e_blog-thumbnail-image-two.webp"
                      }
                      loading={"lazy"}
                      alt={"Blog card thumbnail image"}
                    />
                    <div
                      className={
                        "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:rgba(252,242,232,0.54)] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                      }
                    ></div>
                  </RouteLink>
                  <div
                    className={
                      "w-layout-vflex rt-blog-card-content [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [padding-top:2.5rem] [padding-right:3.75rem] [padding-bottom:3.125rem] [padding-left:3.75rem] max-[1920px]:[padding-left:3.125rem] max-[1920px]:[padding-right:3.125rem] max-[1280px]:[padding-bottom:1.875rem] max-[1280px]:[padding-left:1.25rem] max-[1280px]:[padding-right:1.25rem] max-[1280px]:[padding-top:1.1rem]"
                    }
                  >
                    <div
                      className={
                        "rt-text-color-black rt-gap-medium [box-sizing:border-box] [color:black] [margin-bottom:.9375rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[margin-bottom:.7rem]"
                      }
                    >
                      {copy[22]}
                    </div>
                    <RouteLink
                      className={
                        "rt-text-style-h5 rt-gap-large [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] [margin-bottom:1.5625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[991px]:[margin-bottom:.9rem] max-[768px]:[font-size:1.0625rem] max-[768px]:[margin-bottom:.8rem]"
                      }
                      to={
                        "/blog-post/urban-design-principles-for-better-living"
                      }
                    >
                      {copy[23]}
                    </RouteLink>
                    <div
                      className={
                        "rt-line-v4 rt-desktop-full-width [box-sizing:border-box] [width:100%] [background-color:#0003] [height:.0625rem]"
                      }
                    ></div>
                    <div
                      className={
                        "w-layout-hflex rt-blog-author-details [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:.625rem] [grid-row-gap:.625rem] [justify-content:flex-start] [margin-top:1.9375rem] max-[991px]:[margin-top:1.44rem]"
                      }
                    >
                      <div
                        className={
                          "rt-profile-image rt-radius-xxl rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [border-radius:100%] [width:2.5rem] [height:2.5rem]"
                        }
                      >
                        <img
                          className={
                            " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                          }
                          src={
                            "/images/69afe429a17cba8ef2208b24_profile-image-two--2-.webp"
                          }
                          loading={"lazy"}
                          alt={""}
                        />
                      </div>
                      <div
                        className={
                          "rt-text-color-black [box-sizing:border-box] [color:black]"
                        }
                      >
                        {copy[24]}
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
                    "w-layout-vflex rt-blog-card rt-radius-large [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [border-radius:1.25rem] [background-color:#f4f4f4] [box-shadow:0_1.25rem_5.625rem_#0000001a]"
                  }
                  data-w-id={"f1507410-5126-81c3-732c-1ab601c89778"}
                >
                  <RouteLink
                    className={
                      "rt-blog-card-image-wrapper rt-overflow-hidden rt-radius-large w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:100%] [display:flex] [overflow:hidden] [border-radius:1.25rem] [justify-content:center] [align-items:center] [position:relative]"
                    }
                    to={"/blog-post/the-intersection-of-art-and-architecture"}
                  >
                    <img
                      className={
                        "rt-card-v1-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%] max-[768px]:[aspect-ratio:16/9]"
                      }
                      src={
                        "/images/69a30363afd73b78d156beff_blog-thumbnail-image-one.webp"
                      }
                      loading={"lazy"}
                      alt={"Blog card thumbnail image"}
                    />
                    <div
                      className={
                        "rt-overlay-light-beige-50 [box-sizing:border-box] [z-index:2] [pointer-events:none] [background-color:rgba(252,242,232,0.54)] [width:200%] [height:0%] [position:absolute] [transform:rotate(45deg)]"
                      }
                    ></div>
                  </RouteLink>
                  <div
                    className={
                      "w-layout-vflex rt-blog-card-content [box-sizing:border-box] [flex-direction:column] [align-items:stretch] [display:flex] [padding-top:2.5rem] [padding-right:3.75rem] [padding-bottom:3.125rem] [padding-left:3.75rem] max-[1920px]:[padding-left:3.125rem] max-[1920px]:[padding-right:3.125rem] max-[1280px]:[padding-bottom:1.875rem] max-[1280px]:[padding-left:1.25rem] max-[1280px]:[padding-right:1.25rem] max-[1280px]:[padding-top:1.1rem]"
                    }
                  >
                    <div
                      className={
                        "rt-text-color-black rt-gap-medium [box-sizing:border-box] [color:black] [margin-bottom:.9375rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[margin-bottom:.7rem]"
                      }
                    >
                      {copy[25]}
                    </div>
                    <RouteLink
                      className={
                        "rt-text-style-h5 rt-gap-large [box-sizing:border-box] [background-color:#0000] [color:#111] [text-decoration:none] [font-family:Nohemi,Arial,sans-serif] [font-size:1.25rem] [line-height:140%] [font-weight:500] [letter-spacing:.0625rem] [margin-bottom:1.5625rem] max-[1280px]:[font-size:1.19rem] max-[991px]:[font-size:1.125rem] max-[991px]:[margin-bottom:.9rem] max-[768px]:[font-size:1.0625rem] max-[768px]:[margin-bottom:.8rem]"
                      }
                      to={"/blog-post/the-intersection-of-art-and-architecture"}
                    >
                      {copy[26]}
                    </RouteLink>
                    <div
                      className={
                        "rt-line-v4 rt-desktop-full-width [box-sizing:border-box] [width:100%] [background-color:#0003] [height:.0625rem]"
                      }
                    ></div>
                    <div
                      className={
                        "w-layout-hflex rt-blog-author-details [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [grid-column-gap:.625rem] [grid-row-gap:.625rem] [justify-content:flex-start] [margin-top:1.9375rem] max-[991px]:[margin-top:1.44rem]"
                      }
                    >
                      <div
                        className={
                          "rt-profile-image rt-radius-xxl rt-overflow-hidden [box-sizing:border-box] [overflow:hidden] [border-radius:100%] [width:2.5rem] [height:2.5rem]"
                        }
                      >
                        <img
                          className={
                            " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                          }
                          src={
                            "/images/69afe432cea2f7f6f60a4be3_profile-image-one--2-.webp"
                          }
                          loading={"lazy"}
                          alt={""}
                        />
                      </div>
                      <div
                        className={
                          "rt-text-color-black [box-sizing:border-box] [color:black]"
                        }
                      >
                        {copy[27]}
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
  );
}
