import logo from '../public/TallHorseLogo_Gradient.png'


function Navbar() {

    window.onscroll = function () { shrinkBar() };

    function shrinkBar() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('header').classList.add('shrunk')
        }
        else {
            document.getElementById('header').classList.remove('shrunk')
        }
    }

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
                    <li><a href="/src/html/tall_horse.html">Tall Horse</a></li>
                    <li><a href="/src/html/blog.html">Blog</a></li>
                    <li><a href="/src/html/presskit.html">Presskit</a></li>
                </ul>
                <a href="#" class="icon" onClick={toggleNavbar}>
                    <i class="nav-icon">==</i></a>
                <img src={logo} className='navLogo'></img>
            </nav>
        </header>
    )
}

export default Navbar