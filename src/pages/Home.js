import React from 'react';
import RecipeCard from "../components/recipeCard";
import ErrorBoundary from "../components/ErrorBoundary";

import {AllRecipes} from "../Data/dummydata";

export default function HomePage() {

    //using map to create list of each image from RecipeCard component
    let imageCards = AllRecipes.map(rec => {
        //getting the price of each ingredient
        return (
            <li key={rec.id}> 
                <ErrorBoundary>
                    <RecipeCard url={rec.image} duration={rec.duration}
                    title={rec.title} routeId={rec.id}
                    steps={rec.steps} ingredients={rec.ingredientObject}/>
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