import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "../../components/hero";
import ProjectsSection from "../../components/ProjectsSection";
import SkillsSection from "../../components/SkillsSection";
//import Squares from "../animation/Squares";

const HomePage = () => {
  return (
    // <div className='relative min-h-screen overflow-hidden w-full'>
    //   {/* Animated Squares Background */}
    //   {/* <div className='absolute inset-0 z-0'>
    //     <Squares
    //       direction='diagonal'
    //       speed={0.5}
    //       squareSize={40}
    //       borderColor='#222'
    //       hoverFillColor='#22'
    //     />
    //   </div> */}

    //   {/* Your main content goes here */}
    //   <div className='relative z-10 flex flex-col items-center justify-center min-h-screen p-8 w-full'>
    //     <Header />
    //     <Hero />
    //     <Skills />
    //     <Footer />
    //   </div>
    //</div>

    <div className='bg-background text-text min-h-screen relative'>
      <Header />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
