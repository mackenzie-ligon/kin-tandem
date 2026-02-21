import logo from '../public/TallHorseLogo_Gradient.png'


function Navbar() {
    return (
        <header>
            <nav className='navbar'>
                <ul>
                    <li><a href="/">Kin Tandem</a></li>
                    <li><a href="/src/html/tall_horse.html">Tall Horse</a></li>
                    <li><a href="/src/html/blog.html">Blog</a></li>
                    <li><a href="/src/html/presskit.html">Presskit</a></li>
                </ul>
                <img src={logo} className='navLogo'></img>
            </nav>
        </header>
    )
}

export default Navbar