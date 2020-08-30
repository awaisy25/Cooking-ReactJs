import React from 'react';
import RecipeCard from "../components/recipeCard";
import ErrorBoundary from "../components/ErrorBoundary";

import {AllRecipes, Ingredients} from "../Data/dummydata";
import { CalculateTotalPrice } from '../functions/DataManipulations';


export default function HomePage() {

    //using map to create list of each image from RecipeCard component
    let imageCards = AllRecipes.map(rec => {
        //getting the price of each ingredient
        //function here CalulateTotalPrice(rec.id, Ingredients)
        const cost = CalculateTotalPrice(rec, Ingredients);
        return (
            <li key={rec.id}> 
                <ErrorBoundary>
                    <RecipeCard url={rec.image} duration={rec.duration}
                    title={rec.title} routeId={rec.id}
                    steps={rec.steps} ingredients={rec.ingredientObject}
                    cost={cost}/>
                </ErrorBoundary>
             </li>
        )
    });
    return (
    <div>
    <h1>Home Page</h1>
    <div>
        <ul style={{listStyle: "none"}}>{imageCards}</ul>
    </div>
    </div>
   )
    
}