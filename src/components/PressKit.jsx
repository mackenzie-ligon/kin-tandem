import storyboard from "../assets/storyboard.png"
import menu from "../assets/menuBg.mp4"
import opener from "../assets/opener.png"
import shader from "../assets/shader.png"
import game_logo from "../assets/kin_tandem_logo.png"
import tallhorse_bw from "../assets/TallHorseLogo_SingleColor-Outlined.png"
import logo from '../public/TallHorseLogo_Gradient.png'

function PressKit() {
    return (
        <div class='page'>
            <video autoplay muted loop playsInline>
                <source src={menu} type="video/mp4" />
            </video>
            <h1>Kin Tandem Press Kit</h1>
            <div class='two-col-grid'>
                <div>
                    <h3>Kin Tandem</h3>
                    <p>Kin Tandem is a couch co-op adventure game about a brother and sister searching for answers in a hostile temple. Solve magical puzzles and combat the cultists within to uncover the mysteries behind the chained sun.
                    </p>
                    <button>Itch Page</button>
                    <button disabled>Full Presskit Download</button>
                </div>
                <div>
                    <h3>Factsheet</h3>
                    <p>Developers: <br></br>i'll add the names later</p>
                    <p>Publisher:<br></br>Saphead, Tall Horse</p>
                    <p>Release Date:<br></br>Q2 2026</p>
                    <p>Platforms:<br></br>Itch, Steam</p>
                    <p>Website:<br></br>kin-tandem.com</p>
                    <p>Press Contact:<br></br>tall.horse.game@gmail.com</p>
                </div>
            </div>
            <video autoplay muted loop playsInline>
                <source src={menu} type="video/mp4" />
            </video>
            <div class='two-col-grid'>
                <div>
                    <h3>Features</h3>
                    <ul>
                        <li>Work as a team to solve puzzle with each character unique abilities</li>
                        <li>Manu can climb on Barsa's shoulders to reach new heights. </li>
                        <li>Ascend a temple to follow your father’s footsteps.</li>
                    </ul>
                </div>
                <div><h3>Tall Horse</h3>
                    <p>A Multidisciplinary team of Drexel seniors made up of Game Design and Production and College of Computing and Informatics majors. This project was developed over 9 months as our capstone project. </p>
                    <button> Check out Tall Horse here!</button>
                </div>
            </div>
            <video autoplay muted loop playsInline>
                <source src={menu} type="video/mp4" />
            </video>
            <video autoplay muted loop playsInline>
                <source src={menu} type="video/mp4" />
            </video>
            <div class='two-col-grid'>
                <img src={opener}></img>
                <img src={shader}></img>
            </div>
            <div class='two-col-grid'>
                <img src={game_logo}></img>
                <img src={logo}></img>
                <img src={game_logo}></img>
                <img src={tallhorse_bw}></img>
            </div>
        </div>
    )
}

export default PressKit