import React from 'react';
//import Navbar from './Navbar';
//import Login from './Login';
//import Style from './Styles/Home.module.css'
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <section>
                <Link to="/timed">Timed Refresh</Link>
            </section>
            <section>
                <Link to="/instant">Real Time Refresh</Link>
            </section>
            <section>
                <Link to="/button">Button Refresh</Link>
            </section>
        </div>
    )
}