import OverviewSceneSection from "./OverviewSceneSection";
import ProjectCubeSection from "./ProjectCubeSection";
export default function ScrollScenesSection() {
  return (
    <div className={" [box-sizing:border-box]"}>
      <OverviewSceneSection />
      <ProjectCubeSection />
    </div>
  );
}
