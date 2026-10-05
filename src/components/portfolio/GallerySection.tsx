import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function GallerySection() {
  const copy = referenceContent.Portfolio.GallerySection;
  return (
    <section
      className={
        "rt-marquee-v4 rt-overflow-hidden [box-sizing:border-box] [display:block] [overflow:hidden] [padding-top:8.75rem] [background-color:#111111] max-[991px]:[padding-top:4.375rem]"
      }
    >
      <div
        className={
          "w-layout-blockcontainer rt-container w-container [box-sizing:border-box] [max-width:111.875rem] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:.9375rem] [padding-left:.9375rem]"
        }
      >
        <div
          className={
            "w-layout-vflex rt-marquee-v4-main-wrapper [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [justify-content:flex-start]"
          }
        >
          <div
            className={
              "w-layout-vflex rt-marquee-v4-top-wrapper rt-desktop-full-width rt-desktop-text-center [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [text-align:center] [width:100%] [justify-content:flex-start] [max-width:36.4375rem] max-[768px]:[margin-bottom:1.5625rem]"
            }
            data-w-id={"4b4ea738-ea48-1c3c-1c14-d4ddf7dd1fd0"}
          >
            <h2
              className={
                "rt-text-color-white rt-gap-off rt-gap-medium [box-sizing:border-box] [margin-bottom:.9375rem] [font-weight:500] [margin-top:0] [font-size:2.8125rem] [line-height:115%] [font-family:Nohemi,Arial,sans-serif] [color:white] [letter-spacing:.0625rem] [margin-right:0] [margin-left:0] max-[1280px]:[font-size:2rem] max-[991px]:[font-size:1.875rem] max-[991px]:[margin-bottom:.875rem] max-[768px]:[font-size:1.5625rem] max-[768px]:[margin-bottom:.7rem]"
              }
              data-heading-title={"1"}
            >
              {copy[0]}
            </h2>
            <p
              className={
                "rt-gap-off rt-text-color-white [box-sizing:border-box] [margin-top:0] [margin-bottom:0] [margin-right:0] [margin-left:0] [color:white]"
              }
              data-w-id={"368f0a09-775e-b7d1-cd0d-e431f1b4ad41"}
            >
              {copy[1]}
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          "w-layout-hflex rt-marquee-v4-main rt-overflow-hidden [box-sizing:border-box] [flex-direction:row] [align-items:center] [display:flex] [overflow:hidden] [justify-content:flex-start] [position:relative] max-[768px]:[justify-content:center]"
        }
        data-w-id={"09faf630-0d80-ebff-3c1b-52520b9b7a12"}
      >
        <div
          className={
            "rt-curve-box rt-landscape-display-none [box-sizing:border-box] [z-index:2] [width:100%] [position:absolute] [top:0%] [right:0%] [bottom:auto] [left:0%] max-[768px]:[display:none]"
          }
        >
          <img
            className={
              " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
            }
            src={"/images/69c0dbf3e9aa941eca220795_Vector-1029.svg"}
            loading={"eager"}
            alt={""}
          />
        </div>
        <div
          className={
            "rt-curve-box rt-curve-box-v2 rt-landscape-display-none [box-sizing:border-box] [z-index:2] [width:100%] [position:absolute] [top:auto] [right:0%] [bottom:0%] [left:0%] [height:8.75rem] max-[991px]:[height:auto] max-[768px]:[display:none]"
          }
        >
          <img
            className={
              " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
            }
            src={"/images/69c0dbf3f17cb5b3ac8b743d_Vector-1030.svg"}
            loading={"eager"}
            alt={""}
          />
        </div>
        <div
          className={
            "rt-marquee-v4-train w-dyn-list [box-sizing:border-box] [flex:none] [justify-content:flex-start] [align-items:center] [display:flex]"
          }
        >
          <div
            className={
              "rt-collection-list w-dyn-items [box-sizing:border-box] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [justify-content:flex-start] [align-items:center] [padding-left:.9375rem] [padding-right:.9375rem] [display:flex]"
            }
            role={"list"}
          >
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/contemporary-retreat"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c21a8ea2dbf3b1a16724a0_thumbnail-image-twelve.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/modern-facade-study"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c13f533eec6768deb57d79_thumbnail-image-eleven.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/urban-living-concept"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c21904b53cbc4b1ab5a3ed_thumbnail-image-ten.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/minimal-space-design"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c218ed01e8fcd274379bf7_thumbnail-image-nine--2-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/concrete-harmony"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c218af66904c3a0ef7b5ae_thumbnail-image-eight--3-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/spatial-innovation"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c217ac52b9e12c9a3894c9_thumbnail-image-seven--4-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/sustainable-habitat"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c1415f4641bf4ed543686b_thumbnail-image-six--3-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/timeless-structure"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c140e5c31221225eb26e3f_thumbnail-image-five--4-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/refined-living"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c1407c7e6fef06d3fe8b10_thumbnail-image-four--5-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/elegant-form"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c13fa82f31a7ec1323dae9_thumbnail-image-three--4-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/visionary-hub"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c13f7afab6d00ee4dd2db0_thumbnail-image-two--4-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/urban-essence"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c13f5a34df464e4ef3d1b0_thumbnail-image-one--3-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
          </div>
        </div>
        <div
          className={
            "rt-marquee-v4-train w-dyn-list [box-sizing:border-box] [flex:none] [justify-content:flex-start] [align-items:center] [display:flex]"
          }
        >
          <div
            className={
              "rt-collection-list w-dyn-items [box-sizing:border-box] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [justify-content:flex-start] [align-items:center] [padding-left:.9375rem] [padding-right:.9375rem] [display:flex]"
            }
            role={"list"}
          >
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/contemporary-retreat"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c21a8ea2dbf3b1a16724a0_thumbnail-image-twelve.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/modern-facade-study"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c13f533eec6768deb57d79_thumbnail-image-eleven.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/urban-living-concept"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c21904b53cbc4b1ab5a3ed_thumbnail-image-ten.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/minimal-space-design"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c218ed01e8fcd274379bf7_thumbnail-image-nine--2-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/concrete-harmony"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c218af66904c3a0ef7b5ae_thumbnail-image-eight--3-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/spatial-innovation"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c217ac52b9e12c9a3894c9_thumbnail-image-seven--4-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/sustainable-habitat"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c1415f4641bf4ed543686b_thumbnail-image-six--3-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/timeless-structure"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c140e5c31221225eb26e3f_thumbnail-image-five--4-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/refined-living"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c1407c7e6fef06d3fe8b10_thumbnail-image-four--5-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/elegant-form"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c13fa82f31a7ec1323dae9_thumbnail-image-three--4-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/visionary-hub"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c13f7afab6d00ee4dd2db0_thumbnail-image-two--4-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/urban-essence"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c13f5a34df464e4ef3d1b0_thumbnail-image-one--3-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
          </div>
        </div>
        <div
          className={
            "rt-marquee-v4-train w-dyn-list [box-sizing:border-box] [flex:none] [justify-content:flex-start] [align-items:center] [display:flex]"
          }
        >
          <div
            className={
              "rt-collection-list w-dyn-items [box-sizing:border-box] [grid-column-gap:1.875rem] [grid-row-gap:1.875rem] [justify-content:flex-start] [align-items:center] [padding-left:.9375rem] [padding-right:.9375rem] [display:flex]"
            }
            role={"list"}
          >
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/contemporary-retreat"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c21a8ea2dbf3b1a16724a0_thumbnail-image-twelve.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/modern-facade-study"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c13f533eec6768deb57d79_thumbnail-image-eleven.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/urban-living-concept"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c21904b53cbc4b1ab5a3ed_thumbnail-image-ten.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/minimal-space-design"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c218ed01e8fcd274379bf7_thumbnail-image-nine--2-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/concrete-harmony"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c218af66904c3a0ef7b5ae_thumbnail-image-eight--3-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/spatial-innovation"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c217ac52b9e12c9a3894c9_thumbnail-image-seven--4-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/sustainable-habitat"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c1415f4641bf4ed543686b_thumbnail-image-six--3-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/timeless-structure"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c140e5c31221225eb26e3f_thumbnail-image-five--4-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/refined-living"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c1407c7e6fef06d3fe8b10_thumbnail-image-four--5-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/elegant-form"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c13fa82f31a7ec1323dae9_thumbnail-image-three--4-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/visionary-hub"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c13f7afab6d00ee4dd2db0_thumbnail-image-two--4-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
            <div
              className={"w-dyn-item [box-sizing:border-box]"}
              role={"listitem"}
            >
              <RouteLink
                className={
                  "rt-marquee-image-wrap w-inline-block [box-sizing:border-box] [background-color:#0000] [color:white] [text-decoration:none] [max-width:38.4375rem] [display:inline-block] max-[991px]:[max-width:30rem] max-[768px]:[max-width:22rem] max-[479px]:[max-width:15rem]"
                }
                to={"/project/urban-essence"}
              >
                <img
                  className={
                    " [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [object-fit:cover] [width:100%] [height:100%]"
                  }
                  src={
                    "/images/69c13f5a34df464e4ef3d1b0_thumbnail-image-one--3-.webp"
                  }
                  loading={"lazy"}
                  alt={"Portfolio card image"}
                />
              </RouteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
