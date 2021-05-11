import React from 'react';
import { Link } from 'react-router-dom';
import { FaCopyright} from 'react-icons/fa';
import { BiHomeHeart } from 'react-icons/bi';
import { AiOutlineInfoCircle, AiOutlineDesktop } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';

function Footer () {

  return (
      <footer className='bg-white text-center text-white fixed-bottom'>
          <div className='container p-3 pb-0'>
              <section className='bg-dark mb-2'>
                 <Link to='/home' className='btn btn-outline-light btn-floating m-1' role='button' title='Home'><BiHomeHeart/></Link>

                 <Link to='/about' className='btn btn-outline-light btn-floating m-1' role='button' title='About'><AiOutlineInfoCircle/></Link>

                 <Link to='/projects' className='btn btn-outline-light btn-floating m-1' role='button' title='Projects'><AiOutlineDesktop/></Link>

                 <a href='https://github.com/ngkent75/nathan-kent-portfolio' target='_blank' className='btn btn-outline-light btn-floating m-1' role='button' title='Github Repo'>< GoMarkGithub/> </a>
              </section>
              <section className='bg-dark text-center p-3'>
                  Nathan Kent <FaCopyright/> 2021
              </section>
          </div>
      </footer>

  );
}

export default Footer;
