// product.js

// list of products
const products = [
  {
      id: 1,
      name: "Controller and Driver",
      img: '../img/components/controller_and_driver01.png',
      price: 49.99,
      description: "A versatile controller and driver suitable for various electronic projects. It provides precise control and efficient power management.",
      category: "Electronics"
  },
  {
      id: 2,
      name: "Controller and Driver",
      img: '../img/components/controller_and_driver02.png',
      price: 59.99,
      description: "An advanced controller and driver with built-in programming capabilities. It offers enhanced performance and compatibility.",
      category: "Electronics"
  },
  {
      id: 3,
      name: "IR Transceivers",
      img: '../img/components/ir_transceivers.png',
      price: 14.99,
      description: "Infrared transceivers for wireless communication applications. They ensure reliable data transmission over short distances.",
      category: "Transceivers"
  },
  {
      id: 4,
      name: "RF Transceivers",
      img: '../img/components/rf_transceivers.png',
      price: 14.99,
      description: "Infrared transceivers for wireless communication applications. They ensure reliable data transmission over short distances.",
      category: "Transceivers"
  },
  {
      id: 5,
      name: "Micro Controller",
      img: '../img/components/microcontroller01.png',
      price: 19.99,
      description: "A compact microcontroller with embedded memory and processing capabilities. Ideal for building embedded systems and IoT devices.",
      category: "Controller"
  },
  {
      id: 6,
      name: "Micro Controller",
      img: '../img/components/microcontroller02.png',
      price: 24.99,
      description: "A powerful microcontroller with advanced features such as hardware encryption and real-time operating system support.",
      category: "Controller"
  },
  {
      id: 7,
      name: "Motor",
      img: '../img/components/motor01.png',
      price: 39.99,
      description: "A high-torque DC motor suitable for robotics and automation projects. It provides smooth and precise motion control.",
      category: "Motor"
  },
  {
      id: 8,
      name: "Power Supply",
      img: '../img/components/power_supplies.png',
      price: 29.99,
      description: "A reliable power supply unit with adjustable voltage and current outputs. It ensures stable power delivery for electronic circuits.",
      category: "Electronics"
  },
  {
      id: 9,
      name: "Proximity Sensor",
      img: '../img/components/sensor_proximity.png',
      price: 9.99,
      description: "A proximity sensor capable of detecting objects within a certain range. It's commonly used in robotics and security systems.",
      category: "Sensors"
  },
  {
      id: 10,
      name: "Contact Sensor",
      img: '../img/components/sensor-contact.png',
      price: 7.99,
      description: "A contact sensor that detects physical contact or pressure. It's suitable for touch-sensitive applications and intrusion detection.",
      category: "Sensors"
  },
  {
      id: 11,
      name: "Light Sensor",
      img: '../img/components/sensor-light.png',
      price: 5.99,
      description: "A light sensor capable of detecting ambient light levels. It's useful for automatic lighting control and energy-saving applications.",
      category: "Sensors"
  },
  {
      id: 12,
      name: "Sound Sensor",
      img: '../img/components/sensor-sound.png',
      price: 8.99,
      description: "A sound sensor that detects sound levels in the environment. It's commonly used in audio recording devices and noise monitoring systems.",
      category: "Sensors"
  },
  {
      id: 13,
      name: "Temperature Sensor",
      img: '../img/components/sensor-temperature.png',
      price: 6.99,
      description: "A temperature sensor capable of measuring ambient temperature accurately. It's essential for temperature monitoring and control applications.",
      category: "Sensors"
  },
];

// Displaying products
document.addEventListener('DOMContentLoaded', function() {
  displayProducts();

  // Product click event listener
  document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
      const productId = parseInt(product.getAttribute('id')); // Convert to number
      console.log('Clicked product ID:', productId); // Log the clicked product ID
      const clickedProduct = products.find(product => product.id === productId);
      console.log(clickedProduct);
      if (clickedProduct) {
        displayProductPreview(clickedProduct);
      } else {
        console.error('Product not found!');
      }
    };
  });
});


// Function to generate HTML for a product
function generateProductHTML(product) {
  return `
      <div class="product" id="${product.id}">
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <div class="price">$${product.price}</div>
      </div>
  `;
}

// Function to display products dynamically
function displayProducts() {
  const productContainer = document.querySelector('.products-container');
  if (!productContainer) {
    console.error("Product container not found!");
    return;
  }
  
  let productHTML = '';
  products.forEach(product => {
      productHTML += generateProductHTML(product);
  });
  productContainer.innerHTML = productHTML;
}

// Function to generate HTML for a product-preview
function generateProductPreviewHTML(product) {
  return `
    <div class="preview" id="${product.id}">
      <i class="fas fa-times close-preview"></i>
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <span>( 250 )</span>
      </div>
      <p class="Description">${product.description}</p>
      <div class="price">$${product.price}</div>
      <div class="buttons">
        <a href="#" class="buy">buy now</a>
        <a href="#" class="cart">add to cart</a>
      </div>
    </div>
  `;
}

// Function to display product preview for the clicked product
function displayProductPreview(product) {
  const previewContainer = document.querySelector('.products-preview');
  if (!previewContainer) {
    console.error("Product preview container not found!");
    return;
  }

  // Create elements for the product preview
  const preview = document.createElement('div');

  preview.innerHTML = generateProductPreviewHTML(product);

  // Clear previous content and append the preview to the container
  previewContainer.innerHTML = ''; 
  previewContainer.appendChild(preview);

  // Make sure the preview container is visible
  previewContainer.style.display = 'block';

  // Close preview event listener
  const closeButton = preview.querySelector('.close-preview');
  if (closeButton) {
    closeButton.onclick = () => {
      previewContainer.style.display = 'none';
    };
  }
}