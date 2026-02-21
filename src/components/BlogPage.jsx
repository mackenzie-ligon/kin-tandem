
import shader from "../assets/shader.png"
import lvl1 from "../assets/level1_entrance.png"
import beauty1 from "../assets/beauty1.png"

function BlogPage() {
    return (
        <div class='page'>
            <img></img>
            <h2>00/00/0000</h2>
            <h2>Blog Title</h2>
            <p>Info</p>
            <div className='three-col-grid'>
                <BlogPost image={lvl1} date='2/18/2026' title='Temple Entrance' text='Our feline duo begins their journey at the entrace of a mysterious Mayan temple. What will they find once they cross the threshold?' />
                <BlogPost image={beauty1} date='2/12/2026' title='Lower Sanctum' text='An exclusive snapshot of a section of the Lower Sanctum.'/>
                <BlogPost image={shader} date="2/05/2026" title='New Shader!' text="After a lot of tinkering with our shader, we're finally starting to solidify a visual idea for our game!" />
            </div>
        </div>
    )
}

function BlogPost({ image, date, title, text }) {
    return (
        <div>
            <img src={image} className='blog-img' />
            <h3>{date}</h3>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default BlogPage