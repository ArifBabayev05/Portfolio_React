import React from 'react';
import './About.css';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Us.'
                details='Custom Developers :)'
            />
            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Motivation Speaker</h3>
                    <p className='about-details'>
                        Farid Mammadov.
                        Bu Qədər Lahiyəni necə yazdığ sanırsız....

                        If(mood==0)
                        <br />
                        [
                        Think Money
                        ]
                        <br /> <br />
                        Else
                        <br />
                        [
                        Write Code
                        ]
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>We Are P226</h3>
                    <p className='about-details'>
                        Or you can call us Custom Developers.
                        <br />
                        Good Job Everyone!
                    </p>
                </div>

                <div className='about-main-right'>
                    <img className='about-anime' src={aboutAnime} alt='about' />
                </div>
            </div>
            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAddress='/projects'
            />
            <div className='vector-frame'>
                <img className='about-vector' src={aboutVector} alt='' />
            </div>
        </div>
    );
};

export default About;
