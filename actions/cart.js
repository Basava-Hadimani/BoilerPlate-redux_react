export const addToCart = (item) => {
    console.log('adding item:', item);
    return ({
        type: 'addToCart',
        item
    });;
}

export const removeFromCart = (item) =>{
  return({
    type : 'removeFromCart',
    item
  });
}
