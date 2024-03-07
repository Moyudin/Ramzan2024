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
import Cal from "./pages/RamzanCalendar/RamzanCalendar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/tasbi" component={Tasbi}></Route>
          <Route path="/quran" component={Quransharif}></Route>
          <Route path="/Ramzan" component={Cal}></Route>
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
