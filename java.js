// 'use strict'

// console.log('heyo')

// // GLOBAL VARIABLES
// const leftProductImgElem = document.getElementById('left_product_img');
// const leftProductPElem = document.getElementById('left_product_p');
// const middleProductImgElem = document.getElementById('middle_product_img');
// const middleProductPElem = document.getElementById('middle_product_p');
// const rightProductImgElem = document.getElementById('right_product_img');
// const rightProductPElem = document.getElementById('right_product_p');
// const allProductsSectionElem = document.getElementById('all_products')

// let leftProduct = null; 
// let middleProduct = null;
// let rightProduct = null;

// let rounds = 5;
// // GLOBAL FUNCTIONS
// function randomProduct() {
//   let leftIndex = Math.floor(Math.random() * Product.allProducts.length);
//   leftProduct = Product.allProducts[leftIndex];
//   while (rightProduct === null || rightProduct === leftIndex) {
//     rightIndex = Math.floor(Math.random() * Product.allProducts.length);
//     rightProduct = Product.allProducts[rightIndex];
//   }
//   while (middleProduct === null || middleProduct === leftIndex) {
//     middleIndex = Math.floor(Math.random() * Product.allProducts.length);
//     middleProduct = Product.allProducts[middleIndex]
//   }
// }

// function renderThreeProducts(leftProduct, middleProduct, rightProduct) {
//   leftProduct.renderSingleProduct(leftProductImgElem, leftProductPElem);
//   rightProduct.renderSingleProduct(rightProductImgElem, rightProductPElem);
//   middleProduct.renderSingleProduct(middleProductImgElem, middleProductPElem);
// }
// renderThreeProducts(leftProduct, middleProduct, rightProduct);

// // clickHandler(event) {
// //   console.log(event.target);
// //   if (event.target === leftProductImgElem || event.target === rightProductImgElem) {
// //     rounds--;
// //     if (event.target === leftProductImgElem) {
// //       leftProduct.views++
// //     } else if (event.target === rightProductImgElem){
// //       rightProduct.views++
// //     } else {
// //       middleProduct.views++
// //     }
// //   }
// //   if (rounds === 0) {
// //     allProductsSectionElem.removeEventListener('click', clickHandler);
// //     renderResults();
// //   }
// //   randomProduct();
// // }
// function handleClick(event) {
//   console.log(event.target);
//   const validTargets = [leftProductImgElem, middleProductImgElem, rightProductImgElem];
//   if (validTargets.includes(event.target)) {
//     rounds--;
//     if (event.target === validTargets[0]) {
//       validTargets[0].votes++;
//     } else if (event.target === validTargets[1]) {
//       validTargets[1].votes++;
//     } else {
//       validTargets[2].votes++;
//     }
//     if (rounds === 0) {
//       allProductsSectionElem.removeEventListener('click', handleClick);
//       alert('we are out of votes');
//       renderResults();
//     } else {
//       renderThreeProducts();
//     }
//   }
// } 

// function renderResults() {
//   const resultsUlElem = document.getElementById('results');
//   resultsUlElem.innerHTML= '';
//   for (let product of Product.allProducts) {
//     const liElem = document.createElement('li');
//     liElem.textContent = `${product.name} was viewed ${product.views} times and received ${product.votes} votes.`;
//     resultsUlElem.appendChild(liElem);
//   }
// }

// // for (let i = 0; i < Product.allProducts.length; i++) {
// //     let product = Product.allProducts[i];
// //     const liElem = document.createElement('li');
// //     liElem.textContent = `${product.name}: ${product.views}`;
// //     ulElem.appendChild(liElem);
// //   }
// // }

// function makeAProduct(name, image) {
//   let myProduct = new Product(name, image);
//   Product.allProducts.push[myProduct];
// }

// // CONSTRUCTOR FUNCTIONS
// function Product(name, image) {
//   this.name = name;
//   this.image = image;
//   this.views = 0;
//   this.votes = 0;
// }

// // PROTOTYPES
// Product.prototype.renderSingleProduct = function (imageElem) {
//   imageElem.src = this.image;
//   // imageElem.setAttribute('src', this.image);
//   this.views++;
// }

// Product.allProducts = [];

// // LISTENERS
// allProductsSectionElem.addEventListener('click', clickHandler);

// // FUNCTION CALLS
// makeAProduct('bag', './images/bag.jpg');
// makeAProduct('banana', './images/banana.jpg');
// makeAProduct('bathroom', './images/bathroom.jpg');
// makeAProduct('boots', './images/boots.jpg');
// makeAProduct('breakfast', './images/breakfast.jpg');
// makeAProduct('bubblegum', './images/bubblegum.jpg');
// makeAProduct('chair', './images/chair.jpg');
// makeAProduct('cthulhu', './images/cthulhu.jpg');
// makeAProduct('dogduck', './images/dog-duck.jpg');
// makeAProduct('dragon', './images/dragon.jpg');
// makeAProduct('pen', './images/pen.jpg');
// makeAProduct('petsweep', './images/pet-sweep.jpg');
// makeAProduct('scissors', './images/scissors.jpg');
// makeAProduct('shark', './images/shark.jpg');
// makeAProduct('sweep', './images/sweep.jpg');
// makeAProduct('tauntaun', './images/tauntaun.jpg');
// makeAProduct('unicorn', './images/unicorn.jpg');
// makeAProduct('watercan', './images/water-can.jpg');
// makeAProduct('wineglass', './images/wine-glass.jpg');

// Product.allProducts.push(new Product('Bag', './images/bag.jpg'));
// Product.allProducts.push(new Product('banana', './images/banana.jpg'));
// Product.allProducts.push(new Product('bathroom', './images/bathroom.jpg'));
// Product.allProducts.push(new Product('boots', './images/boots.jpg'));
// Product.allProducts.push(new Product('breakfast', './images/breakfast.jpg'));
// Product.allProducts.push(new Product('bubblegum', './images/bubblegum.jpg'));
// Product.allProducts.push(new Product('chair', './images/chair.jpg'));
// Product.allProducts.push(new Product('cthulhu', './images/cthulhu.jpg'));
// Product.allProducts.push(new Product('dogduck', './images/dog-duck.jpg'));
// Product.allProducts.push(new Product('dragon', './images/dragon.jpg'));
// Product.allProducts.push(new Product('pen', './images/pen.jpg'));
// Product.allProducts.push(new Product('petsweep', './images/pet-sweep.jpg'));
// Product.allProducts.push(new Product('scissors', './images/scissors.jpg'));
// Product.allProducts.push(new Product('shark', './images/shark.jpg'));
// Product.allProducts.push(new Product('sweep', './images/sweep.jpg'));
// Product.allProducts.push(new Product('tauntaun', './images/tauntaun.jpg'));
// Product.allProducts.push(new Product('unicorn', './images/unicorn.jpg'));
// Product.allProducts.push(new Product('watercan', './images/water-can.jpg'));
// Product.allProducts.push(new Product('wineglass', './images/wine-glass.jpg'));


// renderThreeProducts();