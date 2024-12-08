This project is the implementation of FlipDeal Backend which exposes the following REST APIs to be used(via GET method) by the frontend:

1. /cart-total?newItemPrice=<price in Rs. of the item>&cartTotal=<total price in Rs. until now>:
   Returns total price by adding newItemPrice to cartTotal.

2. /membership-discount?cartTotal=<total price in Rs. for purchase>&isMember=<true if member otherwise, false>:
   Returns discounted price if the user is a member otherwise the total price passed to the API.

3. /calculate-tax?cartTotal=<total price for purchase>:
   Returns the tax calculated on the total price passed to the API.

4. /estimate-delivery?shippingMethod=<standard or express>&distance=<distance in km to be covered for order>:
   Returns the time in days to be taken for delivery based on the shipping method given. If the shipping method is "express", the delivery takes place at 100 km/day otherwise 50 km/day.

5. /shipping-cost?weight=<total weight in kg to be delivered>&distance=<distance in km to be covered>:
   Returns the shipping cost in Rs. given the weight and the distance at the rate of Rs 0.01 per kg per km.

6. /loyalty-points?purchaseAmount=<total amount in Rs. for purchase>:
   Returns the loyality points gained by the user for the purchase made by him with 2 points per Re. of purchase.

Discount rate is 10% and the tax rate is 5%.
