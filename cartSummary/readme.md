# Question
**_You have been tasked with creating a prototype for the shopping cart summary page. The page will be shown to a user when they check out._**

**_The cart should load the products from the cart.json file when loaded. Display the product thumbnail, name, quantity, unit price and total price. Add the ability to increment/decrement each product._**

**_Include an order summary which has a subtotal, taxes and final total. This should update as products are incremented/decremented. Tax rate is included in the cart.json file._**

**Solution summary:** Products are loaded on each line through a Handlebars template. Product Quantity and Product Total Price are updated in real time as they are incremented and decremented. If a product quantity is decremented to 0, the entire line is removed from the cart. If a line is removed from the middle of the cart, lower line items will shift up.
In the summary box, the Subtotal, Taxes and Total are also updated in real time as each product is incremented/decremented.

**Functions used:** A Handlebars helper was written to calculate the Product Total Price for the Handlebars template. Click handlers are added to each line after the products are added by locating each class and attaching them individually, and locating the closest parent ID for each product to find the quantity and prices.

**Weaknesses:** Doing currency manipulation / replacing currency symbols on the front end is bad practice and should not be done in actual practice, but this is done primarily for data manipulation and demonstration purposes.