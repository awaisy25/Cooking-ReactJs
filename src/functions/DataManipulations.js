 //function to split the description to get the measure quantity from recipe description
function getMeasures(description) {
    const CommonMeasures = ["oz", "pound", "tablespoon", "pounds", "lbs", "lb", "slice", "slices", "tablespoons"];
    //split the data into a list and search for required common measures, and return it
    try {
    const measure = description.split(" ").find((value) => {
        return CommonMeasures.includes(value.toLowerCase()) ? value : false
    });
    //if there is a meaure get the quanity, the quanity is one index less than the measure
    if(measure){
        const quantity = description.split(" ")[description.split(" ").indexOf(measure) - 1];
        return {"quantity": quantity, "measure": measure.toLowerCase()};
    }
    return false;
    } catch(error) {
        console.log(error)
        return false;
    }
};
//function to calcuate the price for each ingredient in a given recipe
function CalculatePrice(quantity,measure,ingData) {
    try {
    // 0.1667 oz in the average tablespoon
    quantity = parseFloat(quantity)
    // eslint-disable-next-line default-case
    switch(measure) {
        case "tablespoon":
            quantity = quantity * 0.1667;
            break;
        case "tablespoons":
            quantity = quantity * 0.1667;
            break;
        case "slice":
            quantity = 1
            break;
        case "slices":
            quantity = 1
            break;
    }
    
    //basic cross multiplaction algebra to get the price of the ingredient. Known variables are grocery quanity, grocery price, ingredient price.
    // q1 / q2 = p1/p2. p1 is the unknown. q2 is the denominator
    const grocQuantity = ingData.quantity.match(/[0-9]*/)[0];
   
    const price = ((quantity * ingData.price) / grocQuantity).toFixed(2);
    return parseFloat(price);
    } catch(error) {
        console.log(error);
        return ""
    }
}
//function to calculate the total price of cooking the recipe based on cost per each ingredient
//Will use the functions above and return the total amount
function CalculateTotalPrice(Recipe, IngredientData) {
    const amount = []
    Recipe.ingredientDisplay.forEach(ingredient => {
        //iterating through each ingredient of the recipe to get the quantitative price
        const MeasureData = getMeasures(ingredient.description);
        const IngData = IngredientData.find(ing => ing.id === ingredient.id);
       
        //if there is a value append value to array, if not append 0
        MeasureData ? amount.push(CalculatePrice(MeasureData.quantity,MeasureData.measure,IngData)) : amount.push(0);
    });
    //get the sum of prices and return it
    const Total = amount.reduce((current, index) => current + index);
    return Total.toFixed(2);
}


export {getMeasures, CalculatePrice, CalculateTotalPrice};