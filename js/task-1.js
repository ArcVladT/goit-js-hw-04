function isEnoughCapacity(products, containerSize) {
  let sum = 0;

  let product = Object.values(products);
  for (let i = 0; i < product.length; i++) {
    sum += product[i];
    if (sum > containerSize) {
      return false;
    }
  }
  return true;
}
