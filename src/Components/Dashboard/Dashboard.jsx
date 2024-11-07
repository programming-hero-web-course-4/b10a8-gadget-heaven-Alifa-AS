import React, { useEffect, useState } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import {
  getStoredCartList,
  getStoredWishList,
  removeFromCartList,
  removeFromWishList,
} from "../Utilities";
import toast, { Toaster } from 'react-hot-toast';
 
// dashboard start 
const Dashboard = () => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  const [wishListItems, setWishListItems] = useState([]);
  const [activeTab, setActiveTab] = useState("Cart");
  const [totalCost, setTotalCost] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [filteredWishList, setFilteredWishList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  console.log(filtered)


  const data = useLoaderData();
  const navigate =useNavigate();
  console.log(data);
 
//   from lc
  useEffect(() => {
    const storedCartList = getStoredCartList();
    const storedWishList = getStoredWishList();
    setCartItems(storedCartList);
    setWishListItems(storedWishList);
 console.log(storedCartList , 'ok')
    
  }, []);

  //   filtering cart item 
  useEffect(() => {
    const filteredData = data.filter((d) =>
      cartItems.includes(d.product_id.toString())
    );
    setFiltered(filteredData);
  }, [data, cartItems]);

 useEffect(() => {
    const filteredWishListData = data.filter((d)=> 
        wishListItems.includes(d.product_id.toString())
    );
    setFilteredWishList(filteredWishListData);
 },[data, wishListItems])

  useEffect(()=>{
    setTotalCost(calculateTotalCost(filtered))
  },[filtered])

  const calculateTotalCost = (items) => {
    return items.reduce((sum, item) => sum + item.price, 0);
    
  };
  

  const sortByPrice = () => {
    const sortedItems = [...filtered].sort((a, b) => a.price - b.price);
    setFiltered(sortedItems);
  };


   const handlePurchase = () => {
    if(filtered.length === 0){
        toast.error("Your cart is empty!")
        return;
    }
    toast.success('Congratulations! Successfully purchased!')

    // clear after purchase
    setCartItems([]);
    setFiltered([]);
    setTotalCost(0);
    setShowModal(true);
   }


  return (
    <>
    {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
          <p className="mb-4">Your purchase was successful.</p>
          <button className="btn w-full"
          onClick={()=>{
            setShowModal(false); 
            navigate("/"); 
          }}>
            Close
          </button>
        </div>
    </div>

    )
    }
    
      <section className="container mx-auto bg-[#9538E2] h-[250px]">
        <h1 className="text-white text-3xl font-bold text-center py-10">
          Dashboard
        </h1>
        <p className="text-white text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart <br /> devices to the coolest accessories, we have
          it all!
        </p>
        <div className="text-center py-5 space-x-4">
          <button
            className={`btn btn-outline ${
              activeTab === "Cart" ? "btn-active" : ""}`}
              onClick={() => setActiveTab("Cart")}>
            Cart</button>
          <button
            className={`btn btn-outline ${
              activeTab === "WishList" ? "btn-active" : ""}`}
          onClick={() => setActiveTab("WishList")}>
            Wish List 
          </button>
        </div>
      </section>
 

 {/* rendering for cart and wishlist */}
      {activeTab === "Cart" ? (
        <div className="container mx-auto py-10">
          <div className="flex justify-between py-10 lg:px-24">
            <h1 className="text-2xl font-semibold">Cart</h1>
            <div className="space-x-4 flex items-center">
              <h2 className="font-semi-bold">totalCost: ${calculateTotalCost(filtered)}</h2>
              <button className="btn" onClick={sortByPrice}>
                Sort By Price
              </button>
              <button className="btn"
              onClick={handlePurchase}>Purchase</button>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-1">
            {filtered.map((item) => (
              <div
                key={item.product_id}
                className="border p-4 rounded-lg shadow-lg"
              >
                <img
                  src={item.product_image}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <h2 className="font-bold text-lg py-2">{item.product_title}</h2>
                <p className="text-sm">Price: ${item.price}</p>
                <button
                  className="btn btn-sm btn-outline mt-2"
                  onClick={() => {
                    removeFromCartList(item.product_id);
                      setCartItems(prevCartItems => 
                        prevCartItems.filter(cartItem => cartItem !== item.product_id.toString())
                    );
                  }}
                >
                  Remove From Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto py-10">
          <h1 className="text-2xl font-semibold text-center py-5">Wish List</h1>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-1 md:grid-cols-3">
            {filteredWishList.map((item) => (
              <div
                key={item.product_id}
                className="border p-4 rounded-lg shadow-lg"
              >
                <img
                  src={item.product_image}
                  alt={item.product_title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h2 className="font-bold text-lg py-2">{item.product_title}</h2>
                <p className="text-sm">Price: ${item.price}</p>
                <button
                  className="btn btn-sm btn-outline mt-2"
                  onClick={() => {
                    removeFromWishList(item.product_id);
                    setWishListItems(prevWishListItems =>
                     prevWishListItems.filter(wishItem => wishItem !== item.product_id.toString())
                    );
                  }}
                >
                  Remove From Wish List
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
 
export default Dashboard;
 