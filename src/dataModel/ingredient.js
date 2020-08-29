/* object for ingredient to have name of ingredient with corresponding price
will look into later for prixing of each ingredient */
class ingredient {
    constructor(id, ProductName, price, quantity, url, image){
        this.id = id;
        this.ProductName = ProductName;
        //price is price per individual ingredient
        this.price = price;
        this.quantity = quantity;
        //url from walmart
        this.url = url;
        this.image = image; 
    }
}

export default ingredient;