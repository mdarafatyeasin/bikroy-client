import { useEffect, useState } from "react";
import Post from "./Post/Post";
import Loader from '../Shared/Loader/Loader'

const Adds = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://127.0.0.1:8000/adds/product/')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching data:', error)
                setLoading(false)
            });
    }, []);

    if(loading){
        return <Loader/>
    }

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
