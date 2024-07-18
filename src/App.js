import './App.css';
import Footer from './Components/Layout/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Header from './Components/Layout/Header/Header';
import { Routes, Route, useLocation } from "react-router-dom";
import Login from './Components/Login/Login';
import ComplaintRegMessage from './ComplaintRegMessage';
import { React, useEffect, useState } from 'react';
import AdminView from './Components/AdminView/AdminView';
import ComplaintForm from './Components/ITPortal/ComplaintForm/ComplaintForm';
import ComplaintDashboard from './Components/ITPortal/ComplaintDashboard/ComplaintDashboard';


function App() {

    const location = useLocation();

    const [menuBarActive, setMenuBarActive] = useState(() => {
        return localStorage.getItem('menuBar') || '';
    });

    const handleMenuChange = (newState) => {
        setMenuBarActive(newState);
    }

    useEffect(() => {
        if (location.pathname === '/') {
            localStorage.removeItem('menuBar');
            localStorage.removeItem('loginValue');
            if(location.pathname === 'itservice/login') {
                localStorage.removeItem('loginValue');
            }
            setMenuBarActive('');
        } else {
            localStorage.setItem('menuBar', menuBarActive);
        }
    }, [location, menuBarActive]);

    const [overlayActive, setOverlayActive] = useState(true);

    const handleHamburgerMenu = (newValue) => {
        setOverlayActive(newValue);
    }

    useEffect(() => {
        if (location.pathname === '/itservice/login') {
            localStorage.removeItem('loginValue');
        }
    }, [location, overlayActive]);

    useEffect(() => {
        if (location.pathname === '/' || location.pathname === 'itservice/login') {
            localStorage.removeItem('loginValue');
            localStorage.removeItem('name');
            localStorage.removeItem('designation');
            localStorage.removeItem('empid');
            localStorage.removeItem('email');
        }
    }, [location]);


    // console.log(menuBarActive);

    return (
        <div className="App">
            
            <Header menuBarActive={menuBarActive} onValueChange={handleHamburgerMenu} />
            <Routes>
                <Route path="/" element={<HomePage onStateChange={handleMenuChange} />} />
                <Route path="itservice/login" element={<Login />} />
                <Route path="itserviceportal/complaint" element={<ComplaintForm />} />
                <Route path="itserviceportal/complaintregisteredmessage" element={<ComplaintRegMessage />} />
                <Route path="itserviceportal/user_dashboard" element={<ComplaintDashboard />} />
            </Routes>
            <Footer />

                
        </div>
    );
}

export default App;
