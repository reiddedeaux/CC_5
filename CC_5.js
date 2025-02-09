// Task 1 Customer Profile
let customer = {
    name: "John Doe",
    age: 35 ,
    email: "john.doe@email.com" // delcaring the customer with its values
};
 console.log(`Name: ${customer.name}`); 
 console.log(`Age: ${customer.age}`);
 console.log(`Email: ${customer.email}`); 
 // logging all the values into the console

 // Task 2 - Order Details

 let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",

    displayOrder: function(){
        console.log(`Order ID: ${this.orderID} Amount: $${this.totalAmount}, Status: $${this.status}`);
    
    }
 } ; // Logging the order details into the console
 order.displayOrder();

 //Task 3 - Shopping Cart

 let cartItems = ["Shoes", "Shirt", "Pants"]; // create an array of items

 cartItems.push("Hat"); //Add new product to array
 cartItems.pop(); // Get rid of last item
 cartItems.unshift("Socks") //Add socks to the first part of the array
 cartItems.shift();//get rid of the first item

 console.log("Updated Cart Items:", cartItems); //logging new cart items into the console

//Task 4 -Price Adjustments

let prices =[100, 200, 300]; // array of values
let discountedPrices = prices.map(price => price *.9); //applying the discount
console.log("Discounted Prices:", discountedPrices); //logging the discount to the prices

// Task 5 - Product Avalibility

let inventory = [5, 0, 12, 8, 0]; // an array for inventory

let availableProducts = inventory.filter(quantity => quantity > 0) // Got rid of 0 in the array
console.log("Products Availible", availableProducts); // logging availble products into the console

