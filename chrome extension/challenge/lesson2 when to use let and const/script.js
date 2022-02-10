const basePrice = 500;
const discount = 10;
let shippingCost = 40;
let shippingTime = "5-12 days";

shippingCost = 70;
shippingTime = "7-14 days";

const fullPrice = basePrice - discount + shippingCost;
console.log("Total cost " + fullPrice + "$ It will arrive in " + shippingTime)