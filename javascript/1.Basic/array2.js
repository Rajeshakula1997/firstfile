

var item = [
	{name:"Apple", price:300, qty:10},
	{name:"Mango", price:100, qty:50},
	{name:"Banana", price:200, qty:70},
	{name:"Orange", price:500, qty:30},
	{name:"Graphes", price:700, qty:60},
	{name:"Milk", price:300, qty:10}
	];
	var iteminfo = {name:"Apple", price:300, qty:10};
console.log( iteminfo.price);
console.log( iteminfo.name);
console.log( iteminfo.qty);


console.log("-------fw------");
 for (var i=0; i<item.length; i++){
	 console.log(item[i].name, item[i].price, item[i].qty);
	 console.log("----------");
	 
 }
 