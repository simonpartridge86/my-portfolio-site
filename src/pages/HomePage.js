import Navigation from "../components/Navigation";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import PixelTransition from "../components/PixelTransition";
import { useRef } from "react";

export default function HomePage() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Navigation
        homeRef={homeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Intro passRef={homeRef} />
      <PixelTransition src="https://i.postimg.cc/TYTVtQPD/section-transition.png" />
      <Projects passRef={projectsRef} />
      <PixelTransition src="https://i.postimg.cc/3x8dMcMg/section-transition.png" />
      <Contact passRef={contactRef} />
      <Footer />
    </>
  );
}
