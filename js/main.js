"use strict";
let outputArea = document.getElementById("wrapper");
let department;
let seasonVal = "";
let discount;

//I need a math function to calculate discounted price
function calcDiscount(discount, regPrice){
	return regPrice * (1 - discount);
}

//initial load and return products.json to DOM
Inventory.productsLoader(prodTracer);

//list to DOM all of the products, the name of the department it's in, and the price
function prodTracer(products, categories){
	if (seasonVal === 1){
			discount = 1;
		} else

	// let outputArea = document.getElementById("wrapper"); //make this global
	// let department; //make this global
	products.products.forEach(function(currVal, index){
		categories.categories.forEach(function(catCurrVal){
			if (currVal.category_id === catCurrVal.id){
				department = catCurrVal.name;
			}
		})
		let cardDiv = `<div class="prodCard" id="card--${index}">
						<h3>${currVal.name}</h3>
						<p>${department}</p>
						<p class="price" id="price--${index}">\$${currVal.price}</p>
						</div>`;
		outputArea.innerHTML += cardDiv;
	});
	//add event listener with anonymous func and activate either winter, autumn, or spring
	addEventListener("change", function(){
		Inventory.productsLoader(prodTracer);
	});
};

//change prices to winter
// function winterPrice(products, categories){
// 	products.products.forEach(function(currVal, index){


// 	let cardDiv =

// 	outputArea.innerHTML =
// 	});
// }

//change prices to autumn

//change prices to spring



