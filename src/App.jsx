
import './index.css'
import Nav from "./Navigation/Nav.jsx";
import Products from './Products/Products.jsx';
import Recommended from './Recommended/Recommended.jsx'
import SideBar from './SideBar/SideBar.jsx'
const App = () => {
    return (
        <>
            <SideBar/>
            <Nav/>
            <Recommended/>
            <Products />
        </>
    )
}
export default App
