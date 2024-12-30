// Initialize an empty array to store products
let products = [];

// Get elements from the DOM
const productNameInput = document.getElementById("product-name");
const quantityInput = document.getElementById("quantity");
const priceInput = document.getElementById("price");
const addProductBtn = document.getElementById("add-product-btn");
const productList = document.getElementById("product-list");

// Function to render the product list in the DOM
function renderProducts() {
  // Clear the current product list
  productList.innerHTML = "";

  // Loop through the products array and create the HTML for each item
  products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    productDiv.innerHTML = `
      <p>Product: ${product.name}</p>
      <p>Price: $${product.price}</p>
      <div>
        <button class="quantity-btn" data-action="decrease" data-index="${index}">-</button>
        <span>Quantity: ${product.quantity}</span>
        <button class="quantity-btn" data-action="increase" data-index="${index}">+</button>
      </div>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;

    // Append the product item to the list
    productList.appendChild(productDiv);
  });
}

// Event listener for the "Add" button
addProductBtn.addEventListener("click", () => {
  // Get values from the input fields
  const name = productNameInput.value;
  const quantity = parseInt(quantityInput.value, 10);
  const price = parseFloat(priceInput.value);

  // Create a new product object
  const newProduct = {
    name: name,
    quantity: quantity,
    price: price,
  };

  // Add the new product to the array
  products.push(newProduct);

  // Clear input fields
  productNameInput.value = "";
  quantityInput.value = "1";
  priceInput.value = "";

  // Re-render the product list
  renderProducts();
});

// Event delegation for removing or updating quantity of items
productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    // Get index of the product to remove
    const productIndex = parseInt(e.target.getAttribute("data-index"));

    // Remove product from the array
    products.splice(productIndex, 1);

    // Re-render the product list
    renderProducts();
  }

  if (e.target.classList.contains("quantity-btn")) {
    // Get the index and action (increase or decrease)
    const productIndex = parseInt(e.target.getAttribute("data-index"));
    const action = e.target.getAttribute("data-action");

    // Modify the quantity based on the action
    if (action === "increase") {
      products[productIndex].quantity += 1;
    } else if (action === "decrease" && products[productIndex].quantity > 1) {
      products[productIndex].quantity -= 1;
    }

    // Re-render the product list
    renderProducts();
  }
});

// Initial render (if there are any products)
renderProducts();
