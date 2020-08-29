import React from 'react';
import {useParams} from 'react-router-dom';
import {Ingredients} from '../Data/dummydata';
export default function IngredientDetailPage() {
    const params = useParams();
    //getting ingredient data by matching the id from the url parameter
    const ingredientFound = Ingredients.find(ing => params.ingredientid === ing.id);
    return <h2>{ingredientFound.ProductName}</h2>
}