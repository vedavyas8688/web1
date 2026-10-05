import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import NotFoundPage from "./NotFoundPage";
import HeroSection from "../components/project-detail/HeroSection";
import OverviewSection from "../components/project-detail/OverviewSection";
import GallerySection from "../components/project-detail/GallerySection";
import DescriptionSection from "../components/project-detail/DescriptionSection";
import RelatedProjectsSection from "../components/project-detail/RelatedProjectsSection";
export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <NotFoundPage />;
  return (
    <>
      <HeroSection project={project} />
      <OverviewSection project={project} />
      <GallerySection project={project} />
      <DescriptionSection project={project} />
      <RelatedProjectsSection project={project} />
    </>
  );
}
