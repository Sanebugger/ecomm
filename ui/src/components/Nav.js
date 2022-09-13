
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function Nav() {

    const auth = localStorage.getItem('userDetail');

    const navigate = useNavigate();
    const logoutdone = () => {
        localStorage.clear();
        navigate('/SignUp')
    }

    return (
        <div>
            {
                auth ?
                    <ul className='nav-ul'>
                        <li>
                            <Link to='/'>products</Link>
                        </li>
                        <li>
                            <Link to='/add'>addProduct</Link>
                        </li>
                        <li>
                            <Link to='/update'>updateProduct</Link>
                        </li>
                        <li>
                            <Link to='/profile'>profile</Link>
                        </li>
                        <li>
                            <Link onClick={logoutdone} to='/SignUp'>Logout ({JSON.parse(auth).name})</Link>
                        </li>
                    </ul> 
                    :
                    <>
                      {/* <ul className='nav-ul'>
                        <li><Link to='/SignUp'>SignUp</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                      </ul> */}

                      <ul className='nav-ul nav-right'>
                        <li><Link to='/SignUp'>SignUp</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                      </ul>
                    </>

            }
        </div>
    )
}