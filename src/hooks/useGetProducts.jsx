
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
    // useEffect( async () => {
    // 	const response = await axios(API);
    // 	setProducts(response.data);
    // }, []);

    useEffect( () => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get(API);
        setProducts(response.data);
        console.log(response);
    };

    return products;
}

export default useGetProducts;


