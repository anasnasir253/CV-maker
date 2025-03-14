import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Header from "./components/header";
import "./App.scss";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Blog from "./pages/Blog";
import Generator from "./pages/Generator";
import Article from "./pages/Article";
import CVMaker from "./pages/CVMaker";
import MobileScreenHeader from "./components/mobilescreenheader";
import MobileScreenFooter from "./components/mobilescreenfooter";
import AboutUs from "./pages/AboutUs";
import TemplateThree from "./components/generator/templateThree";
import TemplateFour from "./components/generator/templateFour";
import TemplateFive from "./components/generator/templateFive";
import TemplateSix from "./components/generator/templateSix";
import Vacancies from "./pages/Vacancies";
import TemplateSeven from "./components/generator/tempateSeven";
import TemplateEight from "./components/generator/templateEight";
import TemplateNine from "./components/generator/templateNine";
import TemplateEleven from "./components/generator/templateEleven";
import TemplateTen from "./components/generator/templateTen";
import TemplateThirteen from "./components/generator/templateThirteen";
import TemplateFourteen from "./components/generator/templateFourteen";

import { useSelector } from "react-redux";
import { configData } from "./Redux/reducers/CvGeneratorReducer";
import Gdpr from "./pages/Gdpr";
import { Helmet } from "react-helmet";
function App() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [faqState, setFaqState] = useState(false);
  const config = useSelector(configData);
  const [cvName, setCvName] = useState("CV-MALER");
  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return <>{props.children}</>;
  };

  let resizeWindow = () => {
    setWindowWidth(window.screen.width);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{cvName}</title>
      </Helmet>
      {/* {windowWidth > 768 ? (
        <Header faqState={faqState} setFaqState={setFaqState} />
      ) : (
        <MobileScreenHeader faqState={faqState} setFaqState={setFaqState} />
      )} */}
      {windowWidth > 1024 ? (
        config.footerEnabler ? (
          <Header faqState={faqState} setFaqState={setFaqState} />
        ) : null
      ) : (
        <MobileScreenHeader faqState={faqState} setFaqState={setFaqState} />
      )}
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home faqState={faqState} setFaqState={setFaqState} />} />
          <Route path="/blogg" element={<Blog />} />
          <Route
            path="/generator"
            element={<Generator cvName={cvName} setCvName={setCvName} />}
          >
            <Route path="templateone" element={<TemplateFour />}></Route>
            <Route path="templatetwo" element={<TemplateFourteen />}></Route>{" "}
            <Route path="templatethree" element={<TemplateFive />}></Route>{" "}
            <Route path="templatefour" element={<TemplateEight />}></Route>
            <Route path="templatefive" element={<TemplateThree />}></Route>
            <Route path="templatesix" element={<TemplateNine />}></Route>
            <Route path="templateseven" element={<TemplateSeven />}></Route>
            <Route path="templateeight" element={<TemplateSix />}></Route>
            <Route path="templatenine" element={<TemplateTen />}></Route>
            <Route path="templateten" element={<TemplateFourteen />}></Route>{" "}
            <Route path="templateeleven" element={<TemplateEleven />}></Route>{" "}
            <Route path="templatetwelve" element={<TemplateEleven />}></Route>
            <Route path="templateThirteen" element={<TemplateThirteen />}></Route>
          </Route>

          <Route path="/article" element={<Article />} />
          <Route path="/cvmaker" element={<CVMaker />} />
          <Route path="/omoss" element={<AboutUs />} />
          <Route path="/gdpr" element={<Gdpr />} />
          <Route path="/ledigestillinger" element={<Vacancies />} />
        </Routes>
        {/* {windowWidth > 768 &&  window.location.href == "http://localhost:3000/generator/templateone" ? <Blank/>  : windowWidth < 768 ? <MobileScreenFooter/>  : null } */}
        {windowWidth > 768 ? config.footerEnabler ? <Footer /> : null : <MobileScreenFooter />}
      </ScrollToTop>
    </BrowserRouter>
  );
}
export default App;
