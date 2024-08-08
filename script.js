var items, items_total_price, comments, quantity;

// Describe this function...
function update_cart() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_name = document.getElementById('name');
  let new_div = document.createElement('div');
  new_div.innerText = items.shift();

  element_name.appendChild(new_div);
  let element_quantity = document.getElementById('quantity');
  let new_div2 = document.createElement('div');
  new_div2.innerText = items.shift();

  element_quantity.appendChild(new_div2);
  let element_price = document.getElementById('price');
  let new_div3 = document.createElement('div');
  new_div3.innerText = items.shift();

  element_price.appendChild(new_div3);
  items = [];
}

// Describe this function...
function total_cost() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_cart_total = document.getElementById('cart-total');
  let total = items_total_price.reduce((a, b) => a + b, 0);
  element_cart_total.innerText = total.toFixed(2);
}

// Describe this function...
function display_comments() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_comment_data = document.getElementById('comment-data');
  let new_div4 = document.createElement('div');
  new_div4.innerText = comments.pop();

  element_comment_data.appendChild(new_div4);
  let new_span = document.createElement('span');
  new_span.innerText = comments.shift();

  element_comment_data.appendChild(new_span);
  comments = [];
}

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


items = [];
items_total_price = [];
quantity = [];
comments = [];


document.getElementById('add-baguette').addEventListener('click', (event) => {
  items.push('Baguette 250g');
  items.push(1);
  items.push('1,00€');
  items_total_price.push(1);
  update_cart();
  total_cost();

});

document.getElementById('add-cheese').addEventListener('click', (event) => {
  items.push('Cheese 200g');
  items.push(1);
  items.push('5,00€');
  items_total_price.push(5);
  update_cart();
  total_cost();

});

document.getElementById('add-bread').addEventListener('click', (event) => {
  items.push('Bread 750g');
  items.push(1);
  items.push('2,85€');
  items_total_price.push(2.85);
  update_cart();
  total_cost();

});

document.getElementById('add-eggs').addEventListener('click', (event) => {
  items.push('Eggs Pack of 6');
  items.push(1);
  items.push('1,70€');
  items_total_price.push(1.7);
  update_cart();
  total_cost();

});

document.getElementById('add-milk').addEventListener('click', (event) => {
  items.push('Milk 1L');
  items.push(1);
  items.push('2,00€');
  items_total_price.push(2);
  update_cart();
  total_cost();

});

document.getElementById('add-cookies').addEventListener('click', (event) => {
  items.push('Cookies 150g');
  items.push(1);
  items.push('2,35€');
  items_total_price.push(2.35);
  update_cart();
  total_cost();

});

document.getElementById('add-olive-oil').addEventListener('click', (event) => {
  items.push('Olive Oil 1L');
  items.push(1);
  items.push('10,90€');
  items_total_price.push(10.9);
  update_cart();
  total_cost();

});

document.getElementById('add-water').addEventListener('click', (event) => {
  items.push('Water Pack of 6');
  items.push(1);
  items.push('3,75€');
  items_total_price.push(3.75);
  update_cart();
  total_cost();

});

document.getElementById('add-flour').addEventListener('click', (event) => {
  items.push('Flour 1kg');
  items.push(1);
  items.push('1,80€');
  items_total_price.push(1.8);
  update_cart();
  total_cost();

});

document.getElementById('add-juice').addEventListener('click', (event) => {
  items.push('Apple Juice');
  items.push(1);
  items.push('2,50€');
  items_total_price.push(2.5);
  update_cart();
  total_cost();

});

document.getElementById('add-ketchup').addEventListener('click', (event) => {
  items.push('Ketchup');
  items.push(1);
  items.push('3,35€');
  items_total_price.push(3.35);
  update_cart();
  total_cost();

});

document.getElementById('add-yogurt').addEventListener('click', (event) => {
  items.push('Yogurt');
  items.push(1);
  items.push('1,60€');
  items_total_price.push(1.6);
  update_cart();
  total_cost();

});

document.getElementById('comment-submit').addEventListener('click', (event) => {
  comments.push(document.getElementById('customer-name').value);
  comments.push(document.getElementById('comment').value);
  display_comments();

});
