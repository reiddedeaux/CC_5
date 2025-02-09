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

// Task 6 - Revnue Calculation

let sales = [500, 300, 200, 400]; // create an array with values
let totalRevenue = sales.reduce((acc, sale) => acc + sale, 0); // adding all sales in array
console.log("Total Revenue", totalRevenue); // logging total revenue into the console
  

// Task 7 -Customer Search

let customers = ["ALice", "Bob", "Charlie", "David"]; // Declare an array with customer names
let locateCustomer = customer.find( name => name === "Charlie") ; //Finding charlie in the array
console.log("Locate Customer", locateCustomer); //logging the customer into the array

//Task 8 - Tax Calculation

function calculateTax(amount, taxRate){
    let tax = amount * taxRate;
    console.log(`Tax: $${tax}`);
    return tax;
} // create a tax function 
calculateTax(1000, .06); 

// Task 9 -Discount Application

let applyDiscount = function(price, discount){
    let discountedPrice = price -(price * discount);
    console.log(`Discounted Price: $${discountedPrice}`);
    return discountedPrice;
}// create a function to get a discounted price
applyDiscount(1000, .25);

// Task 10 - Loyalty Points

let calculatePoints = (purchaseAmount) => {
    let points = Math.floor(purchaseAmount /10);
    console.log("Loyalty Points:", points);
    return points;
}; // created a function to get the loyalty points from each purchase

calculatePoints(1000); // an example