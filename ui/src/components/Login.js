import React,{ useEffect, useState }  from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email,setemail] =React.useState('');
    const [password,setpassword] =React.useState('');

    const navigate = useNavigate();
                                                            useEffect(()=>{                                 //if user is already logined ,then he won't be able to visit '/SignUp' route
                                                                const auth =localStorage.getItem('userDetail');
                                                                if(auth){ navigate('/')}
                                                            },[])

    const collectData= async ()=>{
            //  console.log(email,password);
             let result = await fetch("http://localhost:4000/login",
                     {
                            method: 'post',
                            body: JSON.stringify({ email,password }),
                            headers: { 'Content-Type': 'application/json' },
                     });
              result = await result.json();
              console.log(result);

              if(result.name){
                 localStorage.setItem("userDetail",JSON.stringify(result));
                 navigate('/');
              }else{
                alert("enter correct details")
              }
            
    }

  return (
    <div className='login'>
                     <h1> Login</h1>
                     <input className='inputBox' type="text" placeholder='enter email'
                            value={email} onChange={(e)=>setemail(e.target.value)}
                            />
                     <input className='inputBox' type="password" placeholder='enter password'
                            value={password} onChange={(e)=>setpassword(e.target.value)}
                     />
                     <button onClick={collectData} className='appButton' type='button' >Login</button>
    </div>
  )
}
