import Category from "./Category/Category.jsx";
import Price from './Price/Price.jsx';
import Color from './Color/Color.jsx';
import Gender from './Gender/Gender.jsx';
import './SideBar.css';
const SideBar = ({handleChange}) => {
    return (
        <>
            <section className="sidebar">
                <div className='logo-container'>
                    <h1>🛒</h1>
                </div>
                <Category handleChange={handleChange}/>
                <Price handleChange={handleChange}/>
                <Color handleChange={handleChange}/>
                <Gender handleChange={handleChange}/>
            </section>
        </>
    );
};
export default SideBar
