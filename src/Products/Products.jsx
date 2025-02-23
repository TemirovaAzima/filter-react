
import "./Products.css"
import Card from "../components/Card.jsx";

const Products = ({result}) => {
    return (
        <>
            <section className="card-container">
                {result}
            </section>
        </>
    )
}
export default Products
