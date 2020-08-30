import React, {useState} from 'react';
//link for each image to route to its detail pages
import {Link} from 'react-router-dom';
import {Card, CardHeader, CardMedia, CardActionArea, CardContent} from '@material-ui/core';
import {styles} from '../styles/themes';

/* component to have card ui of the recipe will use material ui for unique design*/
const RecipeCard = props => {
    //predefining the props variable for better readibility
    const imageUrl = props.url;
    const title = props.title;
    const routeId = props.routeId;
    const cost = props.cost;

    //react state hook for changing the css when someone hover overs the recipe card
    const [HoverStyle, onHover] = useState(styles.card);

     //using template literal to have id as placeholde so recipe detail page to idenitfy the recipe
    return (
    
        <div>
            <Link to={`/recipedetail/${routeId}`} style={{textDecoration: "none"}}>
            <Card style={HoverStyle} 
            onMouseEnter={() => onHover(styles.cardHover)} 
            onMouseLeave={() => onHover(styles.card)}>
                <CardActionArea style={{color: "white"}}>
                    <CardHeader title={title} style={styles.cardText} titleTypographyProps={{variant:'h6'}}/>
                    <CardMedia image={imageUrl} style={styles.cardImage}/>
                    <CardContent style={styles.cardText}>         
                            <p style={styles.moneyText}>Cost ${cost} to Make</p>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Link>
        </div>
    )


};

export default RecipeCard;