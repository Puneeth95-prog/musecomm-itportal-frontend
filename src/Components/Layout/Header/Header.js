import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header({ menuBarActive, onValueChange }) {

    const [loginActive, setLoginActive] = useState(true);

    const navigate = useNavigate();

    const handleHamburgerToggle = () => {
        setLoginActive(!loginActive);
    }

    const handleLogout = () => {
        onValueChange(false);
        setLoginActive(!loginActive);
        localStorage.setItem('loginValue', '0');
    }

    // const handleComplaintForm = () => {
    //     const emp_id = localStorage.getItem('empid');
    //     axios.get('http://localhost:8081/login', {emp_id})
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => console.log(err));
    // }

    const handleComplaintForm = () => {
        setLoginActive(!loginActive);
    }

    return (
        <div className='header'>
            <div className='container'>
                <div className='header-container'>
                    <div className='header-logo'>
                          <a href='https://www.musecomm.in/' target='_blank'><img src='https://intranet.musecomm.in/performancereview/images/logo.png' alt='Img' /></a>
                    </div>

                    {menuBarActive && 
                        <div className='header-right-menu'>
                            <div className='menu-bars'>
                                <img src='https://intranet.musecomm.in/leave-management/images/performance.png' alt='Img' title='Performance Review' />
                            </div>

                            <div className='menu-bars'>
                                <img src='https://intranet.musecomm.in/leave-management/images/leavemanagement.png' alt='Img' title='LeaveManagement' />
                            </div>

                            <div className='menu-bars'>
                                <img src='https://intranet.musecomm.in/leave-management/images/conference.png' alt='Img' title='ConferenceBooking' />
                            </div>

                            <div className='right-sidebar'>
                                {loginActive && (localStorage.getItem('loginValue') === '1') && <i className="fa fa-bars sidebar-toggle" aria-hidden="true" onClick={handleHamburgerToggle}></i> }
                                {!loginActive && (localStorage.getItem('loginValue') === '1') && <i className="fa fa-times sidebar-toggle" aria-hidden="true" onClick={handleHamburgerToggle}></i> }
                            </div>

                        </div>
                    }
                </div>
                
                {!loginActive &&
                    <div className='overlay'>
                        <Link to='itserviceportal/complaint' className='overlay-text' onClick={handleComplaintForm}>Complaint Form</Link>
                        <Link to='itserviceportal/user_dashboard' className='overlay-text' onClick={handleComplaintForm}>Complaint Dashboard</Link>
                        <Link to='itservice/login' className='overlay-text' onClick={handleLogout}>Logout</Link>
                    </div>
                }

            </div>

        </div>
    )
}

export default Header
