//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";

import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <div className='bg-background text-text min-h-screen relative'>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
