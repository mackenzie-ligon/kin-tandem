import '/src/styles/App.css'

function Navbar(){
    return (
        <nav class='navbar'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/src/html/kin_tandem.html">Kin Tandem</a></li>
                <li><a href="/src/html/tall_horse.html">Tall Horse</a></li>
                <li><a href="/src/html/blog.html">Blog</a></li>
                <li><a href="/src/html/presskit.html">Presskit</a></li>
            </ul>
        </nav>
    )
}

export default Navbar