/* Javascript class*/
class Recipe {
    constructor(
        //owner + owner email will have default values
        id,
        categories,
        title,
        level,
        image,
        duration,
        dietaries,
        steps,
        ingredientDisplay,
        calories
    )
    {
        this.id = id;
        this.categories = categories;
        this.title = title;
        this.level = level;
        this.image = image;
        this.duration = duration;
        this.dietaries = dietaries;
        this.steps = steps;
        this.ingredientDisplay = ingredientDisplay;
        this.calories = calories;

    }
    //methods for when intiating the data
    getStepCount() {
        return this.steps.length;
    }

    getNumberIngredients (){
        return this.ingredients.length;
    }
}

export default Recipe;