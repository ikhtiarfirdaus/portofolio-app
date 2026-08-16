import ExperienceSection from "../components/ExperienceSection";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <ExperienceSection />
    </>
  );
}
