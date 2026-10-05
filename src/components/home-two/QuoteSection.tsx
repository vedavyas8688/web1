import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function QuoteSection() {
  const copy = referenceContent.HomeTwo.QuoteSection;
  return (
    <section
      className={
        "section-wrapper [box-sizing:border-box] [display:block] [max-width:1440px] [padding-right:20px] [padding-left:20px] [margin-left:auto] [margin-right:auto] [position:relative] [overflow:visible]"
      }
    >
      <div
        className={
          "section---br with-bg-image-v2 [box-sizing:border-box] [z-index:1] [border-radius:40px] [padding-top:212px] [padding-bottom:212px] [position:relative] [overflow:hidden] max-[991px]:[padding-bottom:120px] max-[991px]:[padding-top:120px] max-[768px]:[padding-bottom:100px] max-[768px]:[border-radius:24px] max-[768px]:[padding-top:100px] max-[479px]:[padding-bottom:80px] max-[479px]:[border-radius:16px] max-[479px]:[padding-top:80px]"
        }
      >
        <div
          className={
            "w-layout-blockcontainer container-default w-container [box-sizing:border-box] [max-width:1228px] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:24px] [padding-left:24px] [margin-bottom:0] max-[768px]:[padding-left:20px] max-[768px]:[padding-right:20px]"
          }
        >
          <div
            className={
              "w-layout-vflex flex-vertical center text-center [box-sizing:border-box] [flex-direction:column] [align-items:center] [display:flex] [text-align:center] [flex-flow:column] [justify-content:center]"
            }
          >
            <div
              className={
                "inner-container _430px [box-sizing:border-box] [max-width:430px]"
              }
              data-w-id={"ac35eed3-296d-426f-43fd-45e357dc95c7"}
            >
              <h2
                className={
                  "display-8 text-light mg-bottom-4x-extra-small [box-sizing:border-box] [margin-bottom:8px] [font-weight:500] [margin-top:0] [font-size:48px] [line-height:1.25em] [font-family:'Inter_Tight',_sans-serif] [color:#fff] [letter-spacing:-.03em] max-[991px]:[font-size:36px] max-[768px]:[font-size:32px] max-[479px]:[font-size:30px]"
                }
              >
                {copy[0]}
              </h2>
              <p
                className={
                  "text-neutral-200 mg-bottom-small [box-sizing:border-box] [margin-top:0] [margin-bottom:24px] [color:#f6f6f6] max-[768px]:[margin-bottom:16px]"
                }
              >
                {copy[1]}
              </p>
              <div
                className={
                  "buttons-row [box-sizing:border-box] [grid-column-gap:16px] [grid-row-gap:8px] [flex-flow:wrap] [justify-content:center] [align-items:center] [display:flex] max-[479px]:[width:100%]"
                }
              >
                <RouteLink
                  className={
                    "primary-button w-inline-block [box-sizing:border-box] [background-color:#6e6e6e] [color:white] [text-decoration:none] [transition:transform_.3s] [max-width:100%] [display:flex] [padding-top:12px] [padding-right:32px] [padding-bottom:12px] [padding-left:32px] [grid-column-gap:6px] [grid-row-gap:6px] [border:1px_solid_#6e6e6e] [border-radius:100px] [font-size:16px] [line-height:1.25em] [font-weight:500] [text-align:center] [transform-style:preserve-3d] [justify-content:center] [align-items:center] [box-shadow:0_4px_8px_#6e6e6e1a] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[padding-left:20px] max-[768px]:[font-size:14px] max-[768px]:[padding-right:20px] max-[479px]:[padding-bottom:8px] max-[479px]:[padding-left:16px] max-[479px]:[padding-right:16px] max-[479px]:[padding-top:8px]"
                  }
                  data-wf--buttons-primary---default--button---variant={"light"}
                  data-w-id={"2c360169-48f4-dea9-7866-ef732649ec53"}
                  to={"/contact-three"}
                >
                  <div
                    className={
                      "button-content-flex [box-sizing:border-box] [grid-column-gap:6px] [grid-row-gap:6px] [justify-content:flex-start] [align-items:center] [display:flex] [overflow:hidden]"
                    }
                  >
                    <div
                      className={
                        "button-icon-left [box-sizing:border-box] [transform:translate(-16px)]"
                      }
                    >
                      <div
                        className={
                          "button-dot [box-sizing:border-box] [background-color:white] [border-radius:50%] [width:12px] [min-width:12px] [height:12px] [min-height:12px]"
                        }
                      ></div>
                    </div>
                    <div
                      className={
                        "button-icon-text [box-sizing:border-box] [transform:translate(-8px)]"
                      }
                    >
                      {copy[2]}
                    </div>
                    <div
                      className={
                        "button-icon-right [box-sizing:border-box] [transform:translate(-8px)]"
                      }
                    >
                      <div
                        className={
                          "base-icon-font [box-sizing:border-box] [font-family:'Line_Rounded_Icon_Font_Brix',_Arial,_sans-serif]"
                        }
                      >
                        {copy[3]}
                      </div>
                    </div>
                  </div>
                </RouteLink>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "section---background-absolute [box-sizing:border-box] [z-index:-1] [width:100%] [height:100%] [position:absolute] [top:0%] [right:0%] [bottom:0%] [left:0%]"
          }
        >
          <img
            className={
              "section-background-image [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:inline-block] [height:100%] [object-fit:cover] [width:100%]"
            }
            src={
              "/images/688aa7b404595ae5e675ddd1_modern-living-room-with-neutral-furniture-archipro-webflow-template.jpg"
            }
            loading={"lazy"}
            width={"2800"}
            height={"1340"}
            alt={
              "Modern Living Room With Neutral Furniture Archipro Webflow Template | BRIX Template\n"
            }
          />
        </div>
      </div>
    </section>
  );
}
