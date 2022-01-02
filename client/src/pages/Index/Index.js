import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {api, authApi} from '../../api';
import NavBar from '../../components/NavBar/NavBar'
import ProductList from '../../components/ProductList';
import './Index.css'


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
            <header id="header">
                <NavBar/>
                <div className="header-wrapper">
                    <div className="header-container">
                        <div className="header-block">
                            <h1>Some text</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod obcaecati veniam est aspernatur totam provident praesentium amet neque a dolores voluptatibus architecto nam harum reprehenderit error voluptate corporis, corrupti dolor!</p>
                            <Link to='/shop'>
                                Посмотреть товары 
                            </Link>
                        </div>
                        <div className="header-block">
                            <div className="blob-block">
                                <div className="blob-svg">
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#8A3FFC" d="M48.5,-38.7C61.2,-22.7,68.8,-2.6,67.1,19.4C65.4,41.5,54.2,65.5,37.3,71.4C20.3,77.2,-2.5,64.9,-22.4,52.9C-42.3,40.9,-59.3,29.1,-62.5,14.5C-65.7,-0.2,-55.1,-17.8,-42.4,-33.9C-29.6,-50,-14.8,-64.5,1.5,-65.7C17.9,-66.9,35.7,-54.8,48.5,-38.7Z" transform="translate(100 100)" />
                                    </svg>
                                </div>
                                <div className="blob-img">
                                    <img src="/img/aegis-boost.png" alt="Aegis-boost" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scrool-block">
                        <span className="scroll-btn">
                            <a onClick={ () => window.scrollBy(0, window.innerHeight) }>
                                <span className="mouse">
                                    <span>
                                    </span>
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
            </header>
            <main id="main">
                <div className="category-wrapper">
                    <div className="category-header">
                        <h2>Категории</h2>
                    </div>
                    <div className="category-content">
                        <div className="category-row">
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                        </div>
                        <div className="category-row">
                            <div className="block"></div>
                            <div className="block"></div>
                            <div className="block"></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Index;