import { toast } from "react-hot-toast";

// get all from local storage
const getStoredCartList = () =>{
const cartListStr = localStorage.getItem('cart-list');
if(cartListStr){
    const cartList = JSON.parse(cartListStr);
    return cartList;
}
else{
    toast.error('This is an error!')
    return[];
}

}
//add to local storage
const addToCartList = (product_id) => {
    const cartList = getStoredCartList();
    if(cartList.includes(product_id)){
        toast(`${product_id} already exists in the cart List`)
    }
    else{
        cartList.push(product_id);
        const cartListStr = JSON.stringify(cartList);
        localStorage.setItem('cart-list', cartListStr)
        toast.success(`${product_id} added successfully to the cart`);
    }
}

// remove from local storage
const removeFromCartList = (product_id) =>{
    const cartList = getStoredCartList();
    const updatedCartList = cartList.filter(id => id !== product_id);
    localStorage.setItem('cart-list', JSON.stringify(updatedCartList));
    toast.warn(`${product_id} removed from cart`);
    
}



export{ addToCartList , removeFromCartList}