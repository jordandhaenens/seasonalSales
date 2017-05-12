"use strict";

var Inventory = (function(){

	let products = [];
	let departments = [];

	return {
		productsLoader: function(callBackToInvoke){
			var request = new XMLHttpRequest();
			request.addEventListener("load", function(event){
				products = JSON.parse(this.responseText);
				// callBackToInvoke(products);

				var request2 = new XMLHttpRequest();
				request2.addEventListener("load", function(event){
					departments = JSON.parse(this.responseText);
					callBackToInvoke(products, departments);
				});
				request2.addEventListener("error", function(){
					console.log("error loading categories");
				});
				request2.open("GET", "./js/categories.json");
				request2.send();
			});

			request.addEventListener("error", function(){
				console.log("error loading products");
			});
			request.open("GET", "./js/products.json");
			request.send();
		}


	};


})();

