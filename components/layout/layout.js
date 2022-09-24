import React from 'react';
import Footer from './footer';
import Header from './header';

const layout = ({children}) => {
    return (
        <div className="">
            <Header/>
            <div className="container">
               {children} 
            </div>
            
            <Footer/>
        </div>
    );
};

export default layout;