const products = [
  { id: 1, name: "Iphone 16pro Max", quantity: 1, price: 260000 },
  { id: 2, name: "Samsung s24 ultra", quantity: 1, price: 300000 },
  { id: 3, name: "Samsung galaxy A52", quantity: 1, price: 20000 },
];
//displaying items those are already added in the cart
function showDetails() {
  const itemCount = document.querySelector("#item-count");
  itemCount.innerText = `${products.length} Items`;
  const itemContainer = document.querySelector(".product-container");
  products.map((pd) => {
    item = `
    <div class="item">
          <div class="pd-image">
            <p>${pd.id}</p>
            
          </div>
          <div class="pd-name">
            <p>${pd.name}</p>
          </div>
          <div class="pd-quantity">
            <span>-</span>
            <span>${pd.quantity}</span>
            <span>+</span>
          </div>
          <div class="pd-price">
            <p>$${pd.price}</p>
          </div>
          <div class="actions">
            <button class="remove-btn">Remove</button>
          </div>
        </div>
 `;
    itemContainer.innerHTML += item;
  });
}
showDetails();
//adding items to the cart
document.getElementById("addPd").addEventListener("click", () => {
  document.querySelector(".product-container").innerHTML = "";
  const name = document.productForm.name.value;
  const quantity = document.productForm.quantity.value;
  const price = document.productForm.price.value;
  const id = products.length + 1;
  const product = { id: id, name: name, quantity: quantity, price };
  products.push(product);
  showDetails();
});
//removing items from the cart
document.querySelector(".product-container").addEventListener("click", (e) => {
  e.target.parentNode.removeChild(e.target);
});
