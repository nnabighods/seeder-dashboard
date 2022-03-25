import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {auth} from "libs/firebase";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup } from "react-bootstrap";

// Add event listener

function LoginPage(props) {
    const navigator = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const notify = (error) => toast.error('Incorrect login',{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
  
    });

    function onHandleSignIn (e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential=> {
            navigator('dashboard');
        })
        .catch(error=> {
            notify(error)
        })
    }

    return(
        <>
        <nav>

        </nav>
        <div>
            <div className="mt-4">
                <ToastContainer/>
                <a href="#" className="text-black d-flex justify-content-center mb-4 h5 text-decoration-none">
                    <svg id="logo-38" width="50" viewBox="0 0 78 32" className="me-2" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" fill="#FFBC7D"></path></svg>
                    Seeder
                </a>
                <h1 className="h1 mb-1 container-sm d-md-none">Welcome back!</h1>
                <h2 className="h2 mb-4 container-sm d-md-none">Login to access your store.</h2>
                <div className="d-md-flex justify-content-center container-sm ">
                    <div className="d-none d-md-block bg-primary py-md-5 w-md-50 d-md-flex flex-column px-5 justify-content-center mx-1 mx-md-0 rounded-start shadow-md">
                        <h1 className="text-white h1">Welcome back!<br/></h1>
                        <h2 className="h2 text-white">Login to access<br/>your store.</h2>
                    </div>
                    <Form onSubmit={onHandleSignIn} className="mx-1 mx-md-0 p-md-5 w-md-50 rounded-end shadow-md">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
                    </Form.Group>
        
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                    </Form.Group>
                    
                    <FormGroup>
                        <small><p className="text-muted mb-5">Forgot your password?</p></small>
                    </FormGroup>

                    <Button variant="primary" type="submit" className="w-100">
                        Submit
                    </Button>
                    </Form>
                </div>
            </div>
        </div>
        </>
    );
    // temporal dead zone...
};

export default LoginPage;