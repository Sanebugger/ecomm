//   import React from 'react'
//   export default function SignUp() {
//     return (
//       <div className='register'>
//           <h1> Register </h1>
//           <input className='inputBox' type="text"  placeholder='enter name' />
//           <input className='inputBox' type="text"  placeholder='enter email' />
//           <input className='inputBox' type="password" placeholder='enter password' />
//           <button className='appButton' type='button'>SignUp</button>
//       </div>
//     )
//   }

import React, { useEffect, useState } from 'react' 
                                    import {useNavigate} from 'react-router-dom'

export default function SignUp() {

       const [name, setname] = React.useState("");
       const [email, setemail] = React.useState("");
       const [password, setpassword] = React.useState("");
                                    const navigate = useNavigate();

                                                    useEffect(()=>{                                 //if user is already logined ,then he won't be able to visit '/SignUp' route
                                                        const auth =localStorage.getItem('userDetail');
                                                        if(auth){ navigate('/')}
                                                    },[])

       const collectData = async () => {
              console.log(name, email, password);
              let result = await fetch("http://localhost:4000/register",
                     {
                            method: 'post',
                            body: JSON.stringify({ name, email,password }),
                            headers: { 'Content-Type': 'application/json' },
                     });
              result = await result.json();
              console.log(result);
              
                                    localStorage.setItem("userDetail",JSON.stringify(result));   
                                    if(result){navigate('/');}      //if user is logined successfully,then redirect him to '/' route
       }

       return (
              <div className='register'>
                     <h1> Register </h1>
                     <input className='inputBox' type="text" placeholder='enter name'
                            value={name} onChange={(e) => setname(e.target.value)}
                     />
                     <input className='inputBox' type="text" placeholder='enter email'
                            value={email} onChange={(e) => setemail(e.target.value)}
                     />
                     <input className='inputBox' type="password" placeholder='enter password'
                            value={password} onChange={(e) => setpassword(e.target.value)}
                     />
                     <button onClick={collectData} className='appButton' type='button'>SignUp</button>
              </div>
       )
}