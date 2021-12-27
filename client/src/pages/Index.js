import React, {useState, useEffect} from 'react';
import {api, authApi} from '../api';
import NavBar from '../components/NavBar';
import ProductList from '../components/ProductList';

const Index = () => {

    const [isLoading, setIsLoading] = useState(true)
    
    const [types, setTypes] = useState([])
    const [selectedType, setSelectedType] = useState(undefined)

    useEffect(() => {
        async function fetchData() {
          const {data} = await authApi.get('/api/type');
          setTypes(data.data)
          setSelectedType('all')
          setIsLoading(false)
        }
        fetchData();
    }, []); 

    return (
        <>
            <header className="header" id="header">
                <NavBar/>
            </header>
            <main>
                
            </main>
        </>
    );
};

export default Index;