import React, { useEffect } from 'react'

export default function ProductList() {

    const [products, setproducts] = React.useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:4000/productlist');
        result = await result.json();
        setproducts(result);
    }
    console.log("products are:", products);


    return (
        <div className="product-list">
            <ul>
                <li>s.no</li>
                <li>name</li>
                <li>price</li>
                <li>category</li>
            </ul>
            {
                products.map((item, index) =>

                    <ul>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                    </ul>
                )
            }
        </div>
    )
}
