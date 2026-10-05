import { RouteLink } from "../layout/TransitionProvider";
import { referenceContent } from "../../data/referenceContent";
export default function InsideFirmSection() {
  const copy = referenceContent.HomeTwo.InsideFirmSection;
  return (
    <section
      className={
        "section-wrapper parallax-section [box-sizing:border-box] [display:block] [max-width:1440px] [padding-right:20px] [padding-left:20px] [margin-left:auto] [margin-right:auto] [position:relative] [overflow:visible] [flex-flow:column] [justify-content:center]"
      }
    >
      <div
        className={
          "section---br with-bg-image-v3 [box-sizing:border-box] [z-index:1] [border-radius:40px] [padding-top:140px] [padding-bottom:0] [position:relative] [overflow:hidden] [background-color:#f4f4f4] [flex-flow:column] [justify-content:flex-end] max-[991px]:[padding-top:60px] max-[768px]:[border-radius:24px] max-[768px]:[padding-top:50px] max-[479px]:[border-radius:16px] max-[479px]:[padding-top:40px]"
        }
      >
        <div
          className={
            "w-layout-blockcontainer container-default z-index-1 w-container [box-sizing:border-box] [max-width:1228px] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:24px] [padding-left:24px] [margin-bottom:0] [z-index:1] [position:relative] max-[768px]:[padding-left:20px] max-[768px]:[padding-right:20px]"
          }
        >
          <div
            className={
              "parallax-animation-content v1 [box-sizing:border-box] [max-width:100%]"
            }
          >
            <div
              className={
                "w-layout-grid title-grid [box-sizing:border-box] [grid-row-gap:16px] [grid-column-gap:16px] [grid-template-rows:auto] [grid-template-columns:auto_auto] [grid-auto-columns:1fr] [display:grid] [justify-content:space-between] max-[991px]:[grid-template-columns:1fr] max-[991px]:[place-items:center] max-[991px]:[text-align:center]"
              }
            >
              <div className={" [box-sizing:border-box]"}>
                <h2
                  className={
                    "display-8 [box-sizing:border-box] [margin-bottom:0] [font-weight:500] [margin-top:0] [font-size:48px] [line-height:1.25em] [font-family:'Inter_Tight',_sans-serif] [color:#121212] [letter-spacing:-.03em] max-[991px]:[font-size:36px] max-[768px]:[font-size:32px] max-[479px]:[font-size:30px]"
                  }
                >
                  {copy[0]}
                </h2>
              </div>
              <div
                className={
                  "inner-container _350px _100-tablet [box-sizing:border-box] [max-width:350px] [grid-row-start:span_2] [grid-column-start:span_1] [grid-row-end:span_2] [grid-column-end:span_1] max-[991px]:[max-width:100%] max-[991px]:[grid-row-start:span_1] max-[991px]:[grid-row-end:span_1]"
                }
              >
                <p
                  className={
                    " [box-sizing:border-box] [margin-top:0] [margin-bottom:0]"
                  }
                  data-w-id={"cb64bb6d-3147-4e5d-a718-e00006c41cd1"}
                >
                  {copy[1]}
                </p>
              </div>
              <div
                className={
                  "mg-top-none-tablet mg-top--30px [box-sizing:border-box] [margin-top:-30px] max-[991px]:[margin-top:0]"
                }
              >
                <div
                  className={
                    "buttons-row left [box-sizing:border-box] [grid-column-gap:16px] [grid-row-gap:8px] [flex-flow:wrap] [justify-content:flex-start] [align-items:center] [display:flex] max-[479px]:[width:100%]"
                  }
                  data-w-id={"cb64bb6d-3147-4e5d-a718-e00006c41cd4"}
                >
                  <RouteLink
                    className={
                      "primary-button w-inline-block [box-sizing:border-box] [background-color:#6e6e6e] [color:white] [text-decoration:none] [transition:transform_.3s] [max-width:100%] [display:flex] [padding-top:12px] [padding-right:32px] [padding-bottom:12px] [padding-left:32px] [grid-column-gap:6px] [grid-row-gap:6px] [border:1px_solid_#6e6e6e] [border-radius:100px] [font-size:16px] [line-height:1.25em] [font-weight:500] [text-align:center] [transform-style:preserve-3d] [justify-content:center] [align-items:center] [box-shadow:0_4px_8px_#6e6e6e1a] [grid-row-start:span_1] [grid-column-start:span_1] [grid-row-end:span_1] [grid-column-end:span_1] max-[768px]:[padding-left:20px] max-[768px]:[font-size:14px] max-[768px]:[padding-right:20px] max-[479px]:[padding-bottom:8px] max-[479px]:[padding-left:16px] max-[479px]:[padding-right:16px] max-[479px]:[padding-top:8px]"
                    }
                    data-wf--buttons-primary---default--button---variant={
                      "light"
                    }
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
        </div>
        <img
          className={
            "section-image-bottom [box-sizing:border-box] [border:0] [vertical-align:middle] [max-width:100%] [display:block] [height:auto] [z-index:-1] [margin-top:-48px] [position:relative] max-[991px]:[margin-top:-24px] max-[991px]:[max-width:124%] max-[991px]:[margin-left:-24%] max-[479px]:[margin-top:20px]"
          }
          src={
            "/images/688a93b259161daf15717fec_cozy-seating-area-archipro-webflow-template.png"
          }
          loading={"lazy"}
          width={"1680"}
          height={"485"}
          alt={"Cozy Seating Area Archipro Webflow Template | BRIX Template\n"}
        />
      </div>
    </section>
  );
}
