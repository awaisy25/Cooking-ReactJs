import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {Ingredients} from '../Data/dummydata';
import '../styles/IngredientDetail.scss';
import {styles} from '../styles/themes';
export default function IngredientDetailPage() {
    const params = useParams();
    const history = useHistory();
    console.log(history);
    //getting ingredient data by matching the id from the url parameter
    const ingredientFound = Ingredients.find(ing => params.ingredientid === ing.id);
    //error handle for in case the recipe id could not be found
    if(typeof ingredientFound === "undefined") {
        console.log(ingredientFound);
        return <h2>Recipe not Found</h2>
    }
    return (
    <div>
        <a href={ingredientFound.url}>
            <h2>{ingredientFound.ProductName}</h2>
            <img src={ingredientFound.image} style={styles.image} alt =""/>
        </a>
        <br/>
        <button className="backbutton" onClick={() => history.goBack()}>Go Back</button>
    </div>
    )
}