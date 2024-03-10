import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tasbi from "./pages/Tasbi/tasbi";
import "./App.css";
import Quransharif from "./pages/QuranSharif/QuranSharif";
import SurahDetail from "./pages/QuranSharif/SurahDetail";
import Cal from "./pages/RamzanCalendar/RamzanCalendar";
import Recipes from "./pages/Recipes/Recipesii";
import SuhurRecipe from "./pages/Recipes/Recipesuhur";
import RecipeSuhurDetail from "./pages/Recipes/RecipeSuhurDetail";
import IftarRecipe from "./pages/Recipes/Recipeiftar";
import RecipeIftarDetail from "./pages/Recipes/RecipeIftarDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tasbi" component={Tasbi} />
        <Route path="/quran" component={Quransharif} />
        <Route path="/surah/:surahNumber" component={SurahDetail} />
        <Route path="/Ramzan" component={Cal} />
        <Route path="/RamzanRecipes" component={Recipes} />
        <Route path="/SuhurRamzanRecipe" component={SuhurRecipe} />
        <Route path="/recipe/:id" component={RecipeSuhurDetail} />
        <Route path="/IftarRamzanRecipe" component={IftarRecipe} />
        <Route path="/recipes/:id" component={RecipeIftarDetail} />
      </Switch>
    </Router>
  );
}

export default App;
