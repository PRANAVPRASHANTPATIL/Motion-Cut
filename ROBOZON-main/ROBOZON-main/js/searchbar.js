// searchbar.js

let dropdownBtnText = document.getElementById("drop-text");
let span = document.getElementById("span");
let icon = document.getElementById("icon");
let list = document.getElementById("list");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

dropdownBtnText.onclick = function () {
  list.classList.toggle("show");
  icon.style.rotate = "-180deg";
};

window.onclick = function (e) {
  if (
    e.target.id !== "drop-text" &&
    e.target.id !== "icon" &&
    e.target.id !== "span"
  ) {
    list.classList.remove("show");
    icon.style.rotate = "0deg";
  }
};

for (item of listItems) {
  item.onclick = function (e) {
    span.innerText = e.target.innerText;
  };
}






document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const dropdownText = document.getElementById('drop-text');
  const productList = document.querySelector('.products-container');

  // Search input event listener
  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    filterProducts(searchTerm);
    const selectedCategory = dropdownText.textContent.toLowerCase();

    // Function to filter products based on search term
    function filterProducts(searchTerm) {
      const productContainers = document.querySelectorAll('.product');

      productContainers.forEach(container => {
          const productName = container.querySelector('h3').textContent.toLowerCase();

          if (productName.includes(searchTerm)) {
              container.style.display = ''; // Show product if it matches search term
          } else {
              container.style.display = 'none'; // Hide product if it doesn't match search term
          }
      });
    }

    //displayFilteredProducts(filteredProducts);
  });

  // Dropdown list item click event listener
  document.querySelectorAll('.dropdown-list-item').forEach(item => {
    item.addEventListener('click', function() {
      dropdownText.textContent = item.textContent;
      const searchTerm = searchInput.value.toLowerCase();

      const filteredProducts = products.filter(product => {
        // Check if the product name or category matches the search term and selected category
        return (product.name.toLowerCase().includes(searchTerm) || 
                product.category.toLowerCase().includes(searchTerm)) &&
               (item.textContent.toLowerCase() === 'everything' || product.category.toLowerCase() === item.textContent.toLowerCase());
      });

      displayFilteredProducts(filteredProducts);
    });
  });
});

// Function to display filtered products
function displayFilteredProducts(filteredProducts) {
  const productContainer = document.querySelector('.products-container');
  if (!productContainer) {
    console.error("Product container not found!");
    return;
  }
  
  let productHTML = '';
  filteredProducts.forEach(product => {
      productHTML += generateProductHTML(product);
  });
  productContainer.innerHTML = productHTML;

  // Reattach event listeners for displaying product previews
  document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
      const productId = parseInt(product.getAttribute('id')); // Convert to number
      console.log('Clicked product ID:', productId); // Log the clicked product ID
      const clickedProduct = filteredProducts.find(product => product.id === productId);
      console.log(clickedProduct);
      if (clickedProduct) {
        displayProductPreview(clickedProduct);
      } else {
        console.error('Product not found!');
      }
    };
  });
}
