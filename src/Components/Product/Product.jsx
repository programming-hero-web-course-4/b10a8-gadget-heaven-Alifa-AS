
const Product = ({ product }) => {
    const {product_id,product_title,category,price,description,specification,availability,rating} = 
    product || {}
    
    return (
        <div>
            <h2 className="font-bold">{product_title}</h2>
        </div>
    );
};

export default Product;