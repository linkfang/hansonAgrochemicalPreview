import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CompanyIntro from "./components/pages/CompanyIntro";
import PesticideRegistration from "./components/pages/PesticideRegistration";
import PesticideSales from "./components/pages/PesticideSales";
import MarketSurvey from "./components/pages/MarketSurvey";
import Talks from "./components/pages/Talks";
import NewsAndInterview from "./components/pages/NewsAndInterview";
import PestControl from "./components/pages/PestControl";
import OnlineResources from "./components/pages/OnlineResources";
import ContactUs from "./components/pages/ContactUs";
import logo from "./assets/logo.svg";
import { useState } from "react";
import { NAV_MENU } from "./constants/language";

function App() {
  const [showPesticideSubMenu, setShowPesticideSubMenu] = useState(false);
  const [willHidePesticideSubMenu, setWillHidePesticideSubMenu] = useState("");
  const [showResourcesSubMenu, setShowResourceSubMenu] = useState(false);
  const [willHideResourcesSubMenu, setWillHideResourcesSubMenu] = useState("");
  const [language, setLanguage] = useState("en");

  const hidePesticideSubMenu = () => {
    const timer = setTimeout(() => setShowPesticideSubMenu(false), 250);
    setWillHidePesticideSubMenu(timer);
  };
  const hideResourcesSubMenu = () => {
    const timer = setTimeout(() => setShowResourceSubMenu(false), 250);
    setWillHideResourcesSubMenu(timer);
  };
  return (
    <BrowserRouter
      basename={
        window.location.hostname.includes("localhost")
          ? "/"
          : "/hansonAgrochemicalPreview/"
      }
    >
      <div className="banner"></div>

      <div className="navBarCtn displayCenter">
        <div className="navBarCtnBlur"></div>
        <nav className="navBar">
          <img
            className="logo"
            src={logo}
            alt="Hanson Agrochemical Consulting logo"
          />
          <div className="navItems">
            <div className="navBtnCtn">
              <Link className="navBtn" to="/">
                {NAV_MENU.companyIntro[language]}
              </Link>
            </div>

            <div className="navBtnCtn">
              <a
                className="navBtn"
                onMouseEnter={() => setShowPesticideSubMenu(true)}
                onMouseLeave={hidePesticideSubMenu}
              >
                {NAV_MENU.pesticide[language]}{" "}
                <i className="bi bi-chevron-down"></i>
              </a>

              <div
                className={showPesticideSubMenu ? "subMenu" : "subMenu hide"}
                onMouseEnter={() => clearTimeout(willHidePesticideSubMenu)}
                onMouseLeave={hidePesticideSubMenu}
              >
                <Link className="navBtn" to="/pesticide-registration">
                  {NAV_MENU.pesticideRegistration[language]}
                </Link>
                <Link className="navBtn" to="/pesticide-sales">
                  {NAV_MENU.pesticideSales[language]}
                </Link>
              </div>
            </div>

            <div className="navBtnCtn">
              <Link className="navBtn" to="/pest-control">
                {NAV_MENU.pestControl[language]}
              </Link>
            </div>

            <div className="navBtnCtn">
              <a
                className="navBtn"
                onMouseEnter={() => setShowResourceSubMenu(true)}
                onMouseLeave={hideResourcesSubMenu}
              >
                {NAV_MENU.resources[language]}{" "}
                <i className="bi bi-chevron-down"></i>
              </a>
              <div
                className={showResourcesSubMenu ? "subMenu" : "subMenu hide"}
                onMouseEnter={() => clearTimeout(willHideResourcesSubMenu)}
                onMouseLeave={hideResourcesSubMenu}
              >
                <Link className="navBtn" to="/market-survey">
                  {NAV_MENU.marketSurvey[language]}
                </Link>
                <Link className="navBtn" to="/talks">
                  {NAV_MENU.talks[language]}
                </Link>
                <Link className="navBtn" to="/news-and-interview">
                  {NAV_MENU.newsAndInterview[language]}
                </Link>
                <Link className="navBtn" to="/online-resources">
                  {NAV_MENU.onlineResources[language]}
                </Link>
              </div>
            </div>

            <div className="navBtnCtn">
              <Link className="navBtn" to="/contact">
                {NAV_MENU.contactUs[language]}
              </Link>
            </div>
          </div>

          <div className="langSwitchCtn">
            <p
              onClick={() =>
                language === "en" ? setLanguage("zh") : setLanguage("en")
              }
            >
              {language === "en" ? "中文" : "EN"}
            </p>
          </div>
        </nav>
      </div>
      <div className="mainContent">
        <Routes>
          <Route
            path="/"
            element={<CompanyIntro language={language} />}
          ></Route>
          <Route
            path="/pesticide-registration"
            element={<PesticideRegistration />}
          ></Route>
          <Route path="/pesticide-sales" element={<PesticideSales />}></Route>
          <Route path="/market-survey" element={<MarketSurvey />}></Route>
          <Route path="/talks" element={<Talks />}></Route>
          <Route
            path="/news-and-interview"
            element={<NewsAndInterview />}
          ></Route>
          <Route path="/pest-control" element={<PestControl />}></Route>
          <Route path="/online-resources" element={<OnlineResources />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
