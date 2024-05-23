import { useEffect, useState } from "react";

const Slider = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://bikroy-server.onrender.com/adds/product/')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default Slider;