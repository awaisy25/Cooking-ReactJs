/* recipe page for each of the recipes, it will be dynamic
so any recipe id can be passed in and so the details for that recipe*/
import React from 'react';
import {AllRecipes, Dietaries, Ingredients} from '../Data/dummydata';
import { useParams, Link } from 'react-router-dom';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/RecipeDetail.scss';
import {styles} from '../styles/themes';
import ColorImage from '../images/4db6ac.png';
import {getMeasures, CalculatePrice} from '../functions/DataManipulations';

export default function RecipeDetailPage() {
    //accessing the recipe id value from route parameter
    const params = useParams();
    //getting the single specific by id from dummy data using find method
    const recipeFound = AllRecipes.find(rec => parseInt(params.recipeid) === rec.id);
    console.log(recipeFound);
    //error handle for in case the recipe id could not be found
    if(typeof recipeFound === "undefined") {
        console.log(recipeFound);
        return <h2>Recipe not Found</h2>
    }
    //console.log(CalculatePrice(test.quantity, test.measure, testGrocery));
    // functioning to retrieve the nutritional data and format it
    const nutritions =  recipeFound.dietaries.map((diet, index)=> {
        let dietary = Dietaries.find(Dt => diet === Dt.id);
        //return a list item 
        let dietName = dietary.name;
        return (
        <li key={index}>{dietName}</li>
        )
    });

    
    return (
    <div>
        <h1>{recipeFound.title}</h1>
            <div className="TopShelf" >
            <img src={recipeFound.image} id="ProfileImage" alt="" />
            
            <ul>
            <h2>Ingredients:</h2>
            {recipeFound.ingredientDisplay.map((ingredient, index) => {
                //getting the ingredient data for each ingredient
                const IngData = Ingredients.find(ing => ingredient.id === ing.id);
                //getting the quantity and measure from each ingredient description
               const Quant_Measure = getMeasures(ingredient.description);
               //if the value returns false then return nothing for the price
               const price = Quant_Measure ? CalculatePrice(Quant_Measure.quantity,Quant_Measure.measure,IngData) : ""
                return (
                <li key={index} className="detailLists"><Link to={`/ingredientdetail/${ingredient.id}`}>{ingredient.description}</Link> {price}{price ? "$": ""}</li> 
                )
            })}
            </ul>
            </div>
        <div className="MiddleShelf">
            
            <ul>
            <h2>Steps:</h2>
            {recipeFound.steps.map((step, index) => {
                //index starts at 0
               return <li key={index} className="detailLists"> {index + 1}. {step} </li>
            })
            //this is the acordian that will have drop down of nutrition
            //it will recive nutrition detail from nutrion data by matching ids
            }
            </ul>
          <div className="Accordian">
            <Accordion style={{backgroundImage: `url(${ColorImage})`}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                > <h3 style={styles.cardText}>Nutrition</h3>
                </AccordionSummary>
            <AccordionDetails>
                <div className="Diets">
                    <ul>
                        <li>
                            Calories: Calories: {recipeFound.calories}
                        </li>
                        {nutritions}
                    </ul>
                </div>
                
            </AccordionDetails>
            </Accordion>
        </div>
        </div>
    </div>
    )
}