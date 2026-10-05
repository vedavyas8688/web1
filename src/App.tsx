import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { TransitionProvider } from "./components/layout/TransitionProvider";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { useReferenceMotion } from "./hooks/useReferenceMotion";
import ProjectReferencePage from "./pages/ProjectReferencePage";
import BlogReferencePage from "./pages/BlogReferencePage";
import { blogs } from "./data/blogs";
import { projects } from "./data/projects";
import HomeOnePage from "./pages/HomeOnePage";
import HomeTwoPage from "./pages/HomeTwoPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
function PageContent() {
  const location = useLocation();
  const ref = useReferenceMotion(location.key);
  useEffect(() => {
    const titles: Record<string, string> = {
      "/home-one": "Architecture & Interiors",
      "/home-two": "Spaces with Purpose",
      "/about": "About the Studio",
      "/service": "Our Services",
      "/portfolio-three": "Selected Work",
      "/blog-one": "Journal",
      "/contact-three": "Contact",
    };
    const slug = location.pathname.split("/").pop();
    const title =
      titles[location.pathname] ??
      blogs.find((b) => b.slug === slug)?.title ??
      projects.find((p) => p.slug === slug)?.title ??
      "Page Not Found";
    document.title = `${title} — Linoxa`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        `${title}. Thoughtful architecture, refined interiors and sustainable spaces by Linoxa.`,
      );
  }, [location.pathname]);
  return (
    <div ref={ref} key={location.key}>
      <main id="main" tabIndex={-1} className="outline-none">
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/home-one" replace />} />
          <Route path="/home-one" element={<HomeOnePage />} />
          <Route path="/home-two" element={<HomeTwoPage />} />
          <Route
            path="/home-pages/home-v2"
            element={<Navigate to="/home-two" replace />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/portfolio-three" element={<PortfolioPage />} />
          <Route path="/blog-one" element={<BlogPage />} />
          <Route
            path="/blog-post/trends-shaping-modern-architectural-design"
            element={<BlogReferencePage />}
          />
          <Route
            path="/project/contemporary-retreat"
            element={<ProjectReferencePage />}
          />
          <Route path="/blog-post/:slug" element={<BlogDetailPage />} />
          <Route path="/project/:slug" element={<ProjectDetailPage />} />
          <Route path="/contact-three" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {location.pathname !== "/home-two" && <Footer />}
    </div>
  );
}
export default function App() {
  return (
    <TransitionProvider>
      <Header />
      <PageContent />
    </TransitionProvider>
  );
}
