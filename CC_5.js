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

 