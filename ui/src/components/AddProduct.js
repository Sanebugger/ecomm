import React, { useState } from 'react'

export default function AddProduct() {

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [company, setcompany] = useState("");
    const [error, seterror] = useState(false);
    
    const addProductFn = async ()=>{
        console.log(name,price,category,company)

                                         if(!name || !price || !category || !company){
                                             seterror(true);
                                             return false;
                                         }

                 // const userid= localStorage.getItem('userDetail');
                 const userId= JSON.parse(localStorage.getItem('userDetail'))._id;
                 console.log(userId);
        
        let result = await fetch("http://localhost:4000/add-product",
                     {
                            method: 'post',
                            body: JSON.stringify({ name, price,category,company,userId}),
                            headers: { 'Content-Type': 'application/json' },
                     });
        result = await result.json();
        console.log(result);

    }

    return (
        <div className='product'>
            <h1> add product</h1>
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


            <button onClick={addProductFn} className='appButton' type='button' >add product</button>
        </div>
    )
}

/////////////////////////////////////////////////////////// without any validations :-

// import React, { useState } from 'react'

// export default function AddProduct() {
//
//     const [name, setname] = useState("");
//     const [price, setprice] = useState("");
//     const [category, setcategory] = useState("");
//     const [company, setcompany] = useState("");
//   
//     const addProductFn= async ()=>{
//         console.log(name,price,category,company)
//
//                  // const userid= localStorage.getItem('userDetail');
//                  const userId= JSON.parse(localStorage.getItem('userDetail'))._id;
//                  console.log(userId);
//       
//         let result = await fetch("http://localhost:4000/add-product",
//                      {
//                             method: 'post',
//                             body: JSON.stringify({ name, price,category,company,userId}),
//                             headers: { 'Content-Type': 'application/json' },
//                      });
//         result = await result.json();
//         console.log(result);
//
//     }
//
//     return (
//         <div className='product'>
//             <h1> add product</h1>
//             <input className='inputBox' type="text" placeholder='enter product name'
//                value={name} onChange={(e)=>setname(e.target.value)}
//             />
//             <input className='inputBox' type="text" placeholder='enter product price'
//                value={price} onChange={(e)=>setprice(e.target.value)}
//             />
//             <input className='inputBox' type="text" placeholder='enter product category'
//                value={category} onChange={(e)=>setcategory(e.target.value)}
//             />
//             <input className='inputBox' type="text" placeholder='enter product company'
//                value={company} onChange={(e)=>setcompany(e.target.value)}
//             />
//
//             <button onClick={addProductFn} className='appButton' type='button' >add product</button>
//         </div>
//     )
// }