import './Product.css';
import Price from "/workspaces/react_new/vite-project/src/Price.jsx";
function Product({name,description,idx}){
    let oldPrice=[10,20,30]
    let newPrice=[5,15,20]
    return <div className="product-card">
        <h1>{name}</h1>
        <h3>{description}</h3>
        <Price oldPrice={oldPrice} newPrice={newPrice} idx={idx}/>
    </div>
}

export default Product