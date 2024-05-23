import { useEffect, useState } from "react";
import Post from "./Post/Post";

const Adds = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/adds/product/')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => <Post key={product.id} product={product}></Post>)}
            </ul>
        </div>
    );
};

export default Adds;
