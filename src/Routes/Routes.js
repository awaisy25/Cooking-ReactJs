import React from 'react';
import {Switch, Route,BrowserRouter} from 'react-router-dom';
import RecipePage from "../pages/Recipes";
import HomePage from "../pages/Home";
import MoneyPage from "../pages/Money";
import HeaderBar from "../components/Header";
import RecipeDetailPage from "../pages/RecipeDetail";
import IngredientDetailPage from "../pages/IngredientDetail";
/*file to manage the navigation between pages
it wll have a header bar for navigation linls
*/
export default function Routes(){
    return (
    <BrowserRouter>
        <HeaderBar/>
        <Switch>
            <Route path="/Home" exact component={HomePage}/>
            <Route path="/recipes" component={RecipePage}/>
            <Route path="/savemoney" component={MoneyPage}/>
            <Route path="/recipedetail/:recipeid" component={RecipeDetailPage}/>
            <Route path="/ingredientdetail/:ingredientid" component={IngredientDetailPage}/>
            <Route component={HomePage}/>
        </Switch>
    </BrowserRouter>
    )
}