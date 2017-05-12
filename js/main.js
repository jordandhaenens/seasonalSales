"use strict";
let outputArea = document.getElementById("wrapper");
let seasonSelect = document.getElementById("seasons");
//Math function to calculate discounted price
function calcDiscount(discount, regPrice){
	return parseFloat(regPrice * (1 - discount)).toFixed(2);
}

//initial load and return products.json to DOM
Inventory.productsLoader(prodTracer);

//list to DOM all of the products, the name of the department it's in, and the price
function prodTracer(products, categories){
	outputArea.innerHTML = "";
	let seasonVal = document.getElementById("seasons").value;
	let discount;
	let department;
	let departmentId;
	products.products.forEach(function(currVal, index){

		categories.categories.forEach(function(catCurrVal){
			if (currVal.category_id === catCurrVal.id){
				department = catCurrVal.name;
				discount = catCurrVal.discount;
				departmentId = catCurrVal.id;
			}
		});
		let cardDiv = `<div class="prodCard" id="card--${index}">
						<h3>${currVal.name}</h3>
						<p>${department}</p>`;
		if (parseInt(seasonVal) === departmentId){
			cardDiv += `<p class="price" id="price--${index}">
						\$${calcDiscount(discount, currVal.price)}</p></div>`;
		} else {
			cardDiv += `<p class="price" id="price--${index}">\$${currVal.price}</p></div>`;
		}
		outputArea.innerHTML += cardDiv;
	});
}

seasonSelect.addEventListener("change", function(){
	Inventory.productsLoader(prodTracer);
});


