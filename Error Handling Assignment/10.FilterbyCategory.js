function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    }
  }
  
  // Example usage
  var products = [
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Pants', category: 'Clothing' },
    { name: 'Hat', category: 'Accessories' },
    { name: 'Sunglasses', category: 'Accessories' },
  ];
  
  var clothingProducts = filterByCategory(products)("Clothing");

  console.log(clothingProducts); 
  