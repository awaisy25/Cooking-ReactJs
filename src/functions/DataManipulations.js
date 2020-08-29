 //function to split the description to get the measure quantity from recipe description
function getMeasures(description) {
    const CommonMeasures = ["oz", "pound", "tablespoon", "pounds", "lbs", "lb", "slice", "slices", "tablespoons"];
    //split the data into a list and search for required common measures, and return it
    const measure = description.split(" ").find((value) => {
        return CommonMeasures.includes(value.toLowerCase()) ? value : false
    });
    //if there is a meaure get the quanity, the quanity is one index less than the measure
    if(measure){
        const quantity = description.split(" ")[description.split(" ").indexOf(measure) - 1];
        return {"quantity": quantity, "measure": measure.toLowerCase()};
    }
    return false;
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
    return price;
    } catch(error) {
        console.log(error);
        return ""
    }
}

export {getMeasures, CalculatePrice};