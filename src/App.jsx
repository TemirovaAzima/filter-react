
import './index.css'
import Nav from "./Navigation/Nav.jsx";
import Products from './Products/Products.jsx';
import Recommended from './Recommended/Recommended.jsx';
import SideBar from './SideBar/SideBar.jsx';
import {useState} from 'react';
import products from "./db/index.js"
import Card from './components/Card.jsx'
const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // input filter
    const [query, setQuery] = useState("");

    const handleInputChange =(e)=>{
        setQuery(e.target.value)
    };
    const filteredItems = products.filter((product)=>(
        product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    );
    // radio filter
    const handleChange = (e)=>{
        setSelectedCategory(e.target.value);
    };

    // button filter
    const handleClick =(e)=>{
        setSelectedCategory(e.target.value)
    }

    function filterData (products, selected, query){
         let filterProducts = products

        // Filtering input items
        if(query){
            filterProducts = filteredItems
        }

        // Selected filter
        if(selected){
            filterProducts = filterProducts.filter(({
                                                        category,
                                                        color,
                                                        company,
                                                        newPrice,
                                                        title,
                                                        gender
                                                }) =>
                category === selected ||
                color === selected ||
                newPrice === selected ||
                company === selected ||
                title === selected ||
                gender === selected

            )
        }

        return filterProducts.map(({
            img, title, star, reviews, prevPrice, newPrice
        }) => (
            <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
            />
        ))
    }
    const result = filterData(products,selectedCategory,query)
    return (
        <>
            <SideBar handleChange={handleChange}/>
            <Nav handleInputChange={handleInputChange} query={query}/>
            <Recommended handleClick={handleClick}/>
            <Products result={result}/>
        </>
    )
}
export default App
