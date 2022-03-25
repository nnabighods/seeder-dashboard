import React, {useState} from "react";
import {Outlet, useNavigate} from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import {auth} from 'libs/firebase';

import {AppBar} from 'components/appbar';
import {SideBar} from 'components/sidebar';

function Dashboard(props) {
    const [isUser, setIsUser] = useState(false);
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user)=> {
        if(user) {
            setIsUser(true)
        } else {
            setIsUser(false)
            navigator('/')
        }
    })
    
    if(isUser) {
        return (
            <>
            <header className="shadow">
                <AppBar/>  
            </header>  
        
            <div className="d-md-flex">
                <SideBar/>
                <Outlet/> 
            </div> 
            </>
        )
    } else {
        return null
    }
};

export default Dashboard;