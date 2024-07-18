import React, { useContext, useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage({ onStateChange }) {

    const showHeaderMenu = () => {
        onStateChange(true);
    }


    return (
        <section className='home-page'>

            <div className='intranet-blocks'>

                <div className='intranet-division'>
                    <img src='https://intranet.musecomm.in/images/PR_Icon.png' alt='Img' className='intranet-home-icons' />
                    <Link className='text-block port-lligat'>PERFORMANCE <br /> REVIEW</Link>
                </div>

                <div className='intranet-division'>
                    <img src='https://intranet.musecomm.in/images/LMS_Icon.png' alt='Img' className='intranet-home-icons' />
                    <Link className='text-block port-lligat'>LEAVE MANAGEMENT <br /> SYSTEM</Link>
                </div>

                <div className='intranet-division'>
                    <img src='https://intranet.musecomm.in/images/IT_Icon.png' alt='Img' className='intranet-home-icons' />
                    <Link to='itservice/login' className='text-block port-lligat' onClick={showHeaderMenu}>IT SERVICE <br /> PORTAL</Link>
                </div>

                <div className='intranet-division'>
                    <img src='https://intranet.musecomm.in/images/CB_Icon.png' alt='Img' className='intranet-home-icons' />
                    <Link className='text-block port-lligat'>CONFERENCE <br /> BOOKING</Link>
                </div>
                
            </div>
                
        </section>
    )
}

export default HomePage;
