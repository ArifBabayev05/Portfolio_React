import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Do Not Connect With Us.'
                details='But for courtesy....'
            />

            <div className='contact-form-container'>
                <form
                    action='https://formspree.io/f/myylwzwl'
                    method='POST'
                    className='contact-form'
                >
                    {/* EmailID Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='_replyto'
                        className='input-box email-input'
                    />

                    {/* Email body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit Button */}
                    <button type='submit' className='contact-btn'>
                        Send Your Message
                    </button>
                </form>
            </div>

            <div className='social-icons-container'>
                <a className='social-icon' href='https://github.com/ArifBabayev05'>
                    <img src={github} alt='github' />
                </a>
                <a
                    className='social-icon'
                    href='https://www.linkedin.com/in/arif-babayev-7820a220a/'
                >
                    <img src={linkedin} alt='linkedin' />
                </a>
                <a
                    className='social-icon'
                    href='https://www.instagram.com/_babayev_arif_/'
                >
                    <img src={instagram} alt='instagram' />
                </a>
            </div>

            <FooterLink
                phrase='Read more '
                link='about us.'
                toAddress='/about'
            />
            <div className='vector-frame'>
                <img className='about-vector' src={contactVector} alt='' />
            </div>
        </div>
    );
};

export default Contact;
