//Question 17

function applyDiscount(price, discountPercentage = 10) {
  let discount = (discountPercentage / 100) * price;
  let discountedPrice = price - discount;
  return discountedPrice;
}

let originalPrice = 100;
let discountedPrice1 = applyDiscount(originalPrice, 24); // Applying a 24% discount
console.log(discountedPrice1);

let discountedPrice2 = applyDiscount(originalPrice); // Applying the default 10% discount
console.log(discountedPrice2);