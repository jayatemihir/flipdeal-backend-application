const express = require('express');
const cors = require('cors');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(cors());

// Constants to be used by REST APIs
const discount = 10;
const tax = 5;
const loyaltyRate = 2;

// REST APIs to be called be FlipDeal frontend
app.get('/cart-total', (request, response) => {
  let newItemPrice = parseFloat(request.query.newItemPrice);
  let cartTotal = parseFloat(request.query.cartTotal);
  cartTotal += newItemPrice;
  response.send(cartTotal.toString());
});

app.get('/membership-discount', (request, response) => {
  let cartTotal = parseFloat(request.query.cartTotal);
  let membershipStatus = request.query.isMember === 'true';

  let discountedPrice = cartTotal;
  if (membershipStatus) discountedPrice *= 1 - discount * 0.01;

  response.send(discountedPrice.toString());
});

app.get('/calculate-tax', (request, response) => {
  let cartTotal = parseFloat(request.query.cartTotal);
  let taxAmount = cartTotal * tax * 0.01;
  response.send(taxAmount.toString());
});

app.get('/estimate-delivery', (request, response) => {
  let shippingMethod = request.query.shippingMethod;
  let distance = parseFloat(request.query.distance);

  let shippingSpeed = 50;
  if (shippingMethod === 'express') shippingSpeed = 100;

  let deliveryTime = distance / shippingSpeed;
  response.send(deliveryTime.toString());
});

app.get('/shipping-cost', (request, response) => {
  let weight = parseFloat(request.query.weight);
  let distance = parseFloat(request.query.distance);
  let shippingCost = weight * distance * 0.1;
  response.send(shippingCost.toString());
});

app.get('/loyalty-points', (request, response) => {
  let purchaseAmount = parseFloat(request.query.purchaseAmount);
  let loyaltyPoints = purchaseAmount * loyaltyRate;
  response.send(loyaltyPoints.toString());
});

// Listen for HTTP requests
app.listen(port, () => {
  console.log(`FlipDeal backend app listening at http://localhost:${port}`);
});
