import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home/Home";
import Tasbi from "./pages/Tasbi/tasbi";
import "./App.css";
import Quransharif from "./pages/QuranSharif/QuranSharif";
import SurahDetail from "./pages/QuranSharif/SurahDetail";
import Cal from "./pages/RamzanCalendar/RamzanCalendar";
import Azan from "./pages/Azaan/Azaan"
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/tasbi" component={Tasbi}/>
          <Route path="/quran" component={Quransharif}/>
          <Route path="/surah/:surahNumber" component={SurahDetail} />
          <Route path="/Ramzan" component={Cal}/>
          <Route path="/Azaan" component={Azan}/>
        </Switch>
        {/* Render Footer only if the current route is not "/tasbi" */}
        <Route
          path="/"
          render={({ location }) =>
            !location.pathname.includes("/tasbi") &&
            !location.pathname.includes("/Ramzan") && <Footer />
          }
        />
      </Router>
    </>
  );
}

export default App;
