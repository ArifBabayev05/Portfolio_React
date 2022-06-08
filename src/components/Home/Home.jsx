import React, { } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import home_anime from './../../assets/home_anime.gif';


class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
               
                <div className='header-text'>
                    <h1>Welcome to P226!</h1>
                    <p>Its Just For Presentation Projects</p>
                </div>
                <div className='head-btns'>
                    <Link className='btn btn-white' to='/about'>
                        <p className='btn-text'>Know more about us</p>
                    </Link>
                    <Link className='btn btn-transparent' to='/contact'>
                        <p className='btn-text'>Connect with us</p>
                    </Link>
                </div>
                <div className='splash-image'>
                    <img
                        className='home_anime'
                        src={home_anime}
                        alt='animation'
                    />
                </div>
            </div>
        );
    }
}

export default Home;
