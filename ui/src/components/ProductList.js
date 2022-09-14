import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

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
    // console.log("products are:", products);
    // console.log("lmao");

    const deleteproduct = async (id)=>{
                // console.log(id)
                let result = await fetch(`http://localhost:4000/product/${id}`,{
                    method : "Delete" 
                });

                result = await result.json();
                if(result){
                    getProducts();
                    alert("record is deleted");
                }

    }

    const searchProductHandle = async (e) =>{
            //   let key = e.target.value;
            //   let result = await fetch(`http://localhost:4000/search/${key}`);
            //   result =await result.json();
            //   if(result){
            //     setproducts(result);
            //   }
              let key = e.target.value;
              if(key){
                  let result = await fetch(`http://localhost:4000/search/${key}`);
                  result =await result.json();
                  if(result){
                    setproducts(result);
                  }
              }else{
                getProducts();
              }
    }


    return (
        <div className="product-list">

            <input type='text' className='search-product-box' placeholder='serch product' onChange={searchProductHandle} />

            <ul className = "product-list-label">
                <li>s.no</li>
                <li>name</li>
                <li>price</li>
                <li>category</li>
                <li>operation</li>
            </ul>
            {
                // products.map((item, index) =>
                //     <ul key={item._id} >
                //         <li>{index+1}</li>
                //         <li>{item.name}</li>
                //         <li>{item.price}</li>
                //         <li>{item.category}</li>
                //         <li>
                //             <button onClick={()=>deleteproduct(item._id)} className="delete"> Delete </button>
                //             <Link to={"/update/"+ item._id}> <button className='update'> update </button></Link>
                //         </li>
                //     </ul>
                // )
                products.length > 0 
                ?
                products.map((item, index) =>
                    <ul key={item._id} >
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>
                            <button onClick={()=>deleteproduct(item._id)} className="delete"> Delete </button>
                            <Link to={"/update/"+ item._id}> <button className='update'> update </button></Link>
                        </li>
                    </ul>
                )
                :
                <h1>no result found.</h1>
            }
        </div>
    )
}
