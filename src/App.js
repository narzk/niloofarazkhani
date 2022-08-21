import Intro from "./frames/Intro";
import AboutMe from "./frames/AboutMe";
import Resume from "./frames/Resume";
import Footer from "./components/Footer";
import ContactMe from "./frames/ContactMe";
import ScrollToTop from "react-scroll-to-top";
import "./index.css";

function App() {
  return (
    <>
      <Intro />
      <AboutMe />
      <Resume />
      <ContactMe />
      <Footer />
      <ScrollToTop
        style={{
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </>
  );
}

export default App;
