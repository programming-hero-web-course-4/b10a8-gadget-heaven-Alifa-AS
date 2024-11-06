import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const {product_image, product_id,product_title,category,price,description,specification,availability,rating} = 
    product || {}
    
    return (
        <div className="flex relative">
           <Link
           to={`/products/${product_id}`}
           className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
           >
            <figure className="w-full h-48 px-5 pt-5 overflow-hidden">
            <img className="rounded-xl" src={product_image} alt="img"/>
            </figure>
            <div className="p-4 my-5">
                <h1 className="font-bold">{product_title}</h1>
                <p className="py-5">Price: ${price}</p>
                <button className="btn">View Details</button>
            </div>
           </Link>
        </div>
            
    );
};

export default Product;