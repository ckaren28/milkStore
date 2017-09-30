const saveToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

const getFromLocalStorage = () => {
  const emptyCart = { items: []};
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart || emptyCart;
}

console.log('cart', getFromLocalStorage());

export const fetch = async () => getFromLocalStorage();

export const addToCart = async (productId, quantity = 1) => {
  const cart = await fetch();
  const exists = cart.items.findIndex(item => item.productId === productId) > -1


  if(exists){
    const i = cart.items.findIndex(item => item.productId === productId);
    console.log('cart', cart);
    cart.items[i].quantity += 1;
  }

  const newItem = { productId, quantity };

  const newCart = {
    ...cart,
    items:[
      ...cart.items,
      newItem,
    ],
  };

  saveToLocalStorage(newCart);

  return newCart;
}
