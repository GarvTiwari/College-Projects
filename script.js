function addToCart(productName, price) {
    alert(`${productName} added to cart!`);
  }

function addToCart(productName, price) {
    const qty = document.getElementById('quantity')?.value || 1;
    alert(`${productName} (x${qty}) added to cart! Total: $${qty * price}`);
  }

  function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart!`);
  }
  