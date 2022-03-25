import React, {useState} from "react";

import { Link } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'libs/firebase';

import Button from 'react-bootstrap/Button';
import error from '../../img/error.png';



function PageNotFound(props) {
    const [isUser, setIsUser] = useState(false);

    onAuthStateChanged(auth, (user)=> {
        if(user) {
            setIsUser(true)
        } else {
            setIsUser(false)
        }
    });

    return(
        <>    
        <div className="error">
            <a href="#" className="text-black d-flex justify-content-center h5 text-decoration-none mt-4">
                <svg id="logo-38" width="50" viewBox="0 0 78 32" className="me-2" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" fill="#FFBC7D"></path></svg>
                Seeder
            </a>
            <div className="d-flex flex-column flex-md-row container-sm align-items-center justify-content-center">
                <img src={error} alt="404 Error"/>
                <div>
                    <h1 className="text-center m-0">404!</h1>
                    <p className="text-center mt-0 mb-4">This page doesn't exist.</p>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" size="lg" className="">
                        {
                            isUser? <Link to='/dashboard' className="text-white text-decoration-none">Go Back</Link> : <Link to='/' className="text-white text-decoration-none">Go Back</Link>
                        }
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default PageNotFound;