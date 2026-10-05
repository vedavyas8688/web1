import { referenceContent } from "../../data/referenceContent";
export default function DividerSection() {
  const copy = referenceContent.BlogReference.DividerSection;
  return (
    <div
      className={
        "w-layout-blockcontainer rt-container w-container [box-sizing:border-box] [max-width:111.875rem] [margin-left:auto] [margin-right:auto] [display:block] [padding-right:.9375rem] [padding-left:.9375rem]"
      }
    >
      <div
        className={
          "rt-line-v9 [box-sizing:border-box] [background-color:#0003] [height:.0625rem]"
        }
      ></div>
    </div>
  );
}
