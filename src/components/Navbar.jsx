import logo from '/TallHorseLogo_Gradient.png'
import { useEffect } from 'react';


function Navbar() {


    function shrinkBar() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('header').classList.add('shrunk')
        }
        else {
            document.getElementById('header').classList.remove('shrunk')
        }
    }

    useEffect(() => {

        // Attach the event listener
        window.addEventListener('scroll', shrinkBar, { passive: true });

        // Return cleanup function to remove listener
        return () => {
            window.removeEventListener('scroll', shrinkBar);
        };
    }, []);

    function toggleNavbar() {
        const navbar = document.getElementById('navbar');
        const header = document.getElementById('header');
        navbar.classList.toggle('responsive');
        header.classList.toggle('responsive');
    }

    return (
        <header id='header'>
            <nav id='navbar' className='navbar'>
                <ul>
                    <li><a href="/">Kin Tandem</a></li>
                    <li><a href="/about-us/">Tall Horse</a></li>
                    <li><a href="/blog/">Blog</a></li>
                    <li><a href="/presskit/">Presskit</a></li>
                </ul>
                <i class="icon" onClick={toggleNavbar}></i>
            <a href="/"><img src={logo} className='navLogo'></img></a>
        </nav>
        </header >
    )
}

export default Navbar