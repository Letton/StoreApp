import React, {useState, useEffect} from 'react';
import {api} from '../api';

const ProductList = ({selectedType}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
          setIsLoading(true)
          console.log(selectedType);
          const {data} = await api.get('/api/product', {
            params: {
                category_slug: selectedType
            }
          });
          console.log(data);
          if (data.meta.pagination.total > 0) {
            setProducts(data.data)
            console.log(data)
            setIsLoading(false)
          }
        }
        fetchData();
    }, [selectedType]); 

    return (
        <>
            
        </>
    );
};

export default ProductList;