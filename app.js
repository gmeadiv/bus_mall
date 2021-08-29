'use strict'

console.log('heyo')

// GLOBAL VARIABLES
const leftProductImgElem = document.getElementById('left_product_img');
const leftProductPElem = document.getElementById('left_product_p');
const middleProductImgElem = document.getElementById('middle_product_img');
const middleProductPElem = document.getElementById('middle_product_p');
const rightProductImgElem = document.getElementById('right_product_img');
const rightProductPElem = document.getElementById('right_product_p');
const allProductsSectionElem = document.getElementById('all_products')

let leftProduct = null; 
let middleProduct = null;
let rightProduct = null;

let rounds = 5;

var ctx = document.getElementById('productChart').getContext('2d');


// PROTOTYPES
Product.prototype.renderSingleProduct = function (img, p) {
  img.src = this.image;
  p.textContent = this.name;
  // imageElem.setAttribute('src', this.image);
  this.views++;
}


// GLOBAL FUNCTIONS
function renderThreeProducts() {
  leftProduct.renderSingleProduct(leftProductImgElem, leftProductPElem);
  middleProduct.renderSingleProduct(middleProductImgElem, middleProductPElem);
  rightProduct.renderSingleProduct(rightProductImgElem, rightProductPElem);
}

function randomProduct() {
  const unavailableItem = [leftProduct, middleProduct, rightProduct];
  while (unavailableItem.includes(leftProduct)) {
    let leftIndex = Math.floor(Math.random() * Product.allProducts.length);
    leftProduct = Product.allProducts[leftIndex];
  }
  unavailableItem.push[leftProduct];
  while (unavailableItem.includes(middleProduct)) {
    let middleIndex = Math.floor(Math.random() * Product.allProducts.length);
    middleProduct = Product.allProducts[middleIndex];
  }
  unavailableItem.push[middleProduct];
  while (unavailableItem.includes(rightProduct)) {
    let rightIndex = Math.floor(Math.random() * Product.allProducts.length);
    rightProduct = Product.allProducts[rightIndex];
  }
  renderThreeProducts();
}

function handleClick(event) {
  console.log(event.target);
  const validTargets = [leftProductImgElem, middleProductImgElem, rightProductImgElem];
  if (validTargets.includes(event.target)) {
    rounds--;
    if (event.target === validTargets[0]) {
      validTargets[0].votes++;
    } else if (event.target === validTargets[1]) {
      validTargets[1].votes++;
    } else {
      validTargets[2].votes++;
    } 
    if (rounds === 0) {
      allProductsSectionElem.removeEventListener('click', handleClick);
      alert('we are out of votes');
      renderChart();
      renderResults();
    } else {
      randomProduct();
    }
  }
} 

function renderResults() {
  const resultsUlElem = document.getElementById('results');
  resultsUlElem.innerHTML= '';
  for (let product of Product.allProducts) {
    const liElem = document.createElement('li');
    liElem.textContent = `${product.name} was viewed ${product.views} times and received ${product.votes} votes.`;
    resultsUlElem.appendChild(liElem);
  }
}

function makeAProduct(name, image) {
  let myProduct = new Product(name, image);
  Product.allProducts.push[myProduct];
}

function renderChart() {
  const everyProduct = [];
  const everyView = [];
  const everyVote = [];
  for (let product of Product.allProducts) {
    everyProduct.push(product.name);
    everyView.push(product.views);
    everyVote.push(product.votes);
  }
  let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

// CONSTRUCTOR FUNCTIONS
function Product(name, image) {
  this.name = name;
  this.image = image;
  this.views = 0;
  this.votes = 0;
}
Product.allProducts = [];

// renderThreeProducts(leftProduct, middleProduct, rightProduct);

// LISTENERS
allProductsSectionElem.addEventListener('click', handleClick);

// // FUNCTION CALLS
// makeAProduct('bag', 'images/bag.jpg');
// makeAProduct('banana', 'images/banana.jpg');
// makeAProduct('bathroom', 'images/bathroom.jpg');
// makeAProduct('boots', 'images/boots.jpg');
// makeAProduct('breakfast', 'images/breakfast.jpg');
// makeAProduct('bubblegum', 'images/bubblegum.jpg');
// makeAProduct('chair', 'images/chair.jpg');
// makeAProduct('cthulhu', 'images/cthulhu.jpg');
// makeAProduct('dogduck', 'images/dog-duck.jpg');
// makeAProduct('dragon', 'images/dragon.jpg');
// makeAProduct('pen', 'images/pen.jpg');
// makeAProduct('petsweep', 'images/pet-sweep.jpg');
// makeAProduct('scissors', 'images/scissors.jpg');
// makeAProduct('shark', 'images/shark.jpg');
// makeAProduct('sweep', 'images/sweep.jpg');
// makeAProduct('tauntaun', 'images/tauntaun.jpg');
// makeAProduct('unicorn', 'images/unicorn.jpg');
// makeAProduct('watercan', 'images/water-can.jpg');
// makeAProduct('wineglass', 'images/wine-glass.jpg');

Product.allProducts.push(new Product('bag', 'images/bag.jpg'));
Product.allProducts.push(new Product('banana', 'images/banana.jpg'));
Product.allProducts.push(new Product('bathroom', 'images/bathroom.jpg'));
Product.allProducts.push(new Product('boots', 'images/boots.jpg'));
Product.allProducts.push(new Product('breakfast', 'images/breakfast.jpg'));
Product.allProducts.push(new Product('bubblegum', 'images/bubblegum.jpg'));
Product.allProducts.push(new Product('chair', 'images/chair.jpg'));
Product.allProducts.push(new Product('cthulhu', 'images/cthulhu.jpg'));
Product.allProducts.push(new Product('dogduck', 'images/dog-duck.jpg'));
Product.allProducts.push(new Product('dragon', 'images/dragon.jpg'));
Product.allProducts.push(new Product('pen', 'images/pen.jpg'));
Product.allProducts.push(new Product('petsweep', 'images/pet-sweep.jpg'));
Product.allProducts.push(new Product('scissors', 'images/scissors.jpg'));
Product.allProducts.push(new Product('shark', 'images/shark.jpg'));
Product.allProducts.push(new Product('sweep', 'images/sweep.png'));
Product.allProducts.push(new Product('tauntaun', 'images/tauntaun.jpg'));
Product.allProducts.push(new Product('unicorn', 'images/unicorn.jpg'));
Product.allProducts.push(new Product('watercan', 'images/water-can.jpg'));
Product.allProducts.push(new Product('wineglass', 'images/wine-glass.jpg'));

randomProduct();
// renderThreeProducts();