
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UpdateProduct() {

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [company, setcompany] = useState("");
    const [error, seterror] = useState(false);
    

        const params = useParams();
        useEffect(()=>{
          // console.log(params);
          getProductdetails();
        },[])
        
        const getProductdetails = async ()=>{
          console.log(params);
          let result = await fetch(`http://localhost:4000/product/${params.id}`)
          result = await result.json();
          console.log(result);

          setname(result.name);
          setprice(result.price);
          setcategory(result.category);
          setcompany(result.company);
          
        }
    
    const updateProductFn = async ()=>{
        console.log(name,price,category,company)

                                         if(!name || !price || !category || !company){
                                             seterror(true);
                                             return false;
                                         }

                 // const userid= localStorage.getItem('userDetail');
                 const userId= JSON.parse(localStorage.getItem('userDetail'))._id;
                 console.log(userId);
        
        let result = await fetch(`http://localhost:4000/product/${params.id}`,
                     {
                            method: 'Put',
                            body: JSON.stringify({ name, price, category, company}),
                            headers: { 'Content-Type': 'application/json' },
                     });
        result = await result.json();
        console.log(result);

    }

    return (
        <div className='product'>
            <h1> update product</h1>
            <input className='inputBox' type="text" placeholder='enter product name'
               value={name} onChange={(e)=>setname(e.target.value)}
            />
            {error && !name && <span className='invlid-input'> enter valid name </span>}


            <input className='inputBox' type="text" placeholder='enter product price'
               value={price} onChange={(e)=>setprice(e.target.value)}
            />
            {error && !price && <span className='invlid-input'> enter valid price </span>}


            <input className='inputBox' type="text" placeholder='enter product category'
               value={category} onChange={(e)=>setcategory(e.target.value)}
            />
            {error && !category && <span className='invlid-input'> enter valid category </span>}


            <input className='inputBox' type="text" placeholder='enter product company'
               value={company} onChange={(e)=>setcompany(e.target.value)}
            />
            {error && !company && <span className='invlid-input'> enter valid company </span>}


            <button onClick={updateProductFn} className='appButton' type='button' >update product</button>
        </div>
    )
}
