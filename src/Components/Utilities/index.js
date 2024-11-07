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
        toast.error(`${product_id} already exists in the cart List`)
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
    const updatedCartList = cartList.filter(item => item.product_id !== product_id);
    localStorage.setItem('cart-list', JSON.stringify(updatedCartList));
    toast.error(`${product_id} removed from cart`);
    
}


//wish list
//get all items
const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (product_id) => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(product_id)){
        //already exists
        toast.error(`${product_id} already exists in the wish List`)
    }
    else{
        storedWishList.push(product_id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast.success(`${product_id} added successfully to the wish list`)

    }
}

const removeFromWishList = (product_id) => {
    const storedWishList = getStoredWishList();
    const updatedWishList = storedWishList.filter(item => item.product_id !== product_id);
    localStorage.setItem('wish-list', JSON.stringify(updatedWishList));
    toast.error(`${product_id} removed from wish list`)
}   
 
export{ addToCartList , removeFromCartList, addToStoredWishList, removeFromWishList, getStoredCartList, getStoredWishList }