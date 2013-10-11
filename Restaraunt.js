
// Part 1

var FoodItem= function(name, calories, vegan, glutenFree, citrusFree){
	//string
	this.name=name;
	// number
	this.calories= calories;
	// boolean -yes or no
	this.vegan= vegan;
	// boolean
	this.glutenFree= glutenFree;
	// boolean
	this.citrusFree= citrusFree;

	
	
}
FoodItem.prototype.toString= function(){
	var myString=(this.name +" has "+this.calories + " Calories, " + "Vegan: "+ this.vegan+" Gluten Free: "+ this.glutenFree + " Citrus Free: "+ this.citrusFree)
	return myString

}
	var tortilla= new FoodItem ("tortilla", 467, true, false, true);
	var orangeJuice= new FoodItem("Orange Juice", 39, true, true, false);
	var tofu= new FoodItem("tofu", 94, true, true, true);


// Part 2 
// var meal=function(Drink,Plate,Order,Menu,restaurant,customer)


var Drink=function(name, description, items){
	// string
	this.name= name;
	this.description= description;
	this.items= items;
}
var Plate= function(name, description,price, items){
	// string
	this.name=name;
	this.description= description;
	// NUMBER
	this.price= price;
	// string
	this.items= item;
}
var order= function(plate){
	// string
 	this.order= new Plate;
 }
var menu=function(plate){
	//sting	 
	this.order= new Plate;
}
var restaurant= function(name, description, menu){
	//string 
	this.name= name;
	this.description= description;
	this.menu=new menu;
}
var customer=function(dietaryPrefrence){
	// string
	this.dietaryPrefrence=dietaryPrefrence;
}

Drink.prototype.toString= function(){
	var drinkString=("Name: "+this.name+" Description: "+ this.description + " Items: "+ this.items+ ".")
	return drinkString
}
Plate.prototype.toString= function(){
	var plateString=("Name: "+this.name+" Description: "+ this.description + "Price:$"+this.price+" Items: "+ this.items+".")
	return plateString
}
order.prototype.toString= function(){
	var orderString=("Plate ordered: "+ this.order+".")
}
menu.prototype.toString= function(){
	var menuString=("Menu item ordered:"+ this.order+".")
}

restaurant.prototype.toString= function(){
	var restaurantString=(this.name+ " Description: "+ this.description + " Menu: "+ this.menu+".")
}
customer.prototype.toString= function(){
	var customerString=("Customer Dietary Prefrence: "+ this.dietaryPrefrence + ".")
}

Plate.prototype.isVegan= function(){
	for (var i=0;i<cars.length;i++)
		if(this.item(i).Vegan===false)
			return false
};
Plate.prototype.isGlutenFree= function(){
	for (var i=0;i<cars.length;i++)
		if(this.item(i).glutenFree===false)
			return false
};
Plate.prototype.isCitrusFree= function(){
	for (var i=0;i<cars.length;i++)
		if(this.item(i).citrusFree===false)
			return false
};

var burritoPlate=("Burrito Plate: "+"Calories: "+ 697+" Vegan: "+ false + "Gluten Free: "+ false + " Citrus Free: "+ true + ".")

var guacamolePlate=("Guacamole Plate: "+"Calories: "+ 560 +" Vegan: "+ true + "Gluten Free: "+ true + " Citrus Free: "+ false+ ".")

var margaritaDrink=("Margarita: "+"Calories: "+ 350 +" Vegan: "+ true + "Gluten Free: "+ true + " Citrus Free: "+ false+ ".")

var myMenu= function(burritoPlate, guacamolePlate, margaritaDrink){
	this.burritoPlate= burritoPlate;
	this.guacamolePlate= guacamolePlate;
	this.margaritaDrink= margaritaDrink;


}
burrito = new Plate('burrito');
menu = new myMenu(burrito);

margarita= new Drink('margarita');
menu= new myMenu('margarita');

guacamole= new Plate('guacamole');
menu= new myMenu(guacamole);



var myRestaurant=function(myMenu){
	this.myMenu= myMenu;

}




