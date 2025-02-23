const products = [
    {title: "Noutbuk"},
    {title: "Smartfon"},
    {title: "Planshet"}
];

const query = "et";

const filteredItems = products.filter(product =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
);
console.log(filteredItems)