import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/LMW_logo.png'
import '../css/home.css';


const Home = () => {
    return (
        <div className="main-content">
            <div className='content-wrapper'>
                <div>
                    <h1 id='homeTittle'>Mission palabra de vida</h1>
                </div>
                <div>
                    <img src={Logo} alt="" style={{ width: "70px", height: "70px" }} />
                </div>
            </div>
            <div className="MainContainerBTN">
                <div className='wrapper' >
                    <div>
                        <button><Link to="/form">Registración</Link></button>
                    </div>
                    <div>
                        <button><Link to="/counselling">Consejería</Link></button>
                    </div>
                    <div><button><Link to="/map">Mapa</Link></button></div>
                    <div><button><Link to="/bautism">Bautismo</Link></button></div>
                </div>
            </div>
            <section className="footer">
                <p>&copy; 2024 THIS NEEDS TO BE FILL IN. All rights reserved.</p>
            </section>
        </div>
    )
}

export default Home