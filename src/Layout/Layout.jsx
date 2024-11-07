import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();

    useEffect(()=>{
        let pageTitle;
        switch(location.pathname){
            case '/' : pageTitle = 'Home';
            break;
            case '/statistics' : pageTitle = 'Statistics';
            break;
            case '/dashboard' : pageTitle = 'Dashboard';
            break;
            case '/faq' : pageTitle = 'Faq';
            break;
            
            default: 
            pageTitle = 'page';
        }
        document.title = `B10A8-Gadget-Haven || ${pageTitle}`
    },[location])
    return (
        <div>
            <div>{children}</div>
        </div>
    );
};

export default Layout;