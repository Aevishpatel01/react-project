import React from "react";
import Heading from "./Heading";
import { Link, Outlet } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';
import './App.css';


function Example(){
    return(
        <>
        <Heading/>
        <div className="container">
            <div className="link">
                <MDBBtn className='me-1' color='success'><Link  to="Classcomponant">Classcomponant</Link></MDBBtn>
                <MDBBtn className='me-1' color='success'><Link  to="Functioncomponant">Functioncomponant</Link></MDBBtn>
            </div>
        </div>
        <Outlet/>
        
        </>
    )
};

export default Example;