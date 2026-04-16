import Image from "./Image"
import menu from "../assets/menuBg.mp4"
import opener from "../assets/opener.png"
import shader from "../assets/shader.png"
import game_logo from "../assets/kin_tandem_logo.png"
import black_game_logo from "../assets/kin_tandem_logo_black.png"
import tallhorse_bw from "../assets/TallHorseLogo_SingleColor-Outlined.png"
import logo from '/TallHorseLogo_Gradient.png'

function PressKit() {
    return (
        <div class='page'>
            <video autoPlay muted={true} loop playsInline>
                <source src={menu} type="video/mp4" />
            </video>
            <h1>Kin Tandem Press Kit</h1>
            <div class='two-col-grid'>
                <h3>Factsheet</h3>
                <h3>Kin Tandem</h3>
                </div>
            <div class='two-col-grid'>
                <div class='two-col-grid'>
                    <div>
                        <p>Developers: <br />
                            Kirstin Bonnick<br />
                            Zachary Millman<br />
                            Fox Fleishmann<br />
                            Jacob Stratton<br />
                            Lily Durand<br />
                            Kai Stiefel<br />
                            Prasin Shrestha<br />
                            Yalguun Munkhbayar<br />
                            Zachary Centracchio<br />
                            Audrey Go<br />
                            Adriana Vasquez<br />
                            Akintoye Ilo<br />
                            Cameron Romero<br />
                            Josh Walcott<br />
                            Mackenzie Ligon<br />
                            Minhal Vakil<br />
                            Owen Miller<br />
                            Ryan Brosius</p>
                    </div>
                    <div>
                        <p>Publisher:<br></br>Saphead, Tall Horse</p>
                        <p>Release Date:<br></br>Q2 2026</p>
                        <p>Platforms:<br></br>Itch, Steam</p>
                        <p>Website:<br></br>kin-tandem.com</p>
                        <p>Press Contact:<br></br>tall.horse.game@gmail.com</p>
                    </div>
                </div>
                 <div>
                    <p>Kin Tandem is a couch co-op adventure game about a brother and sister searching for answers in a hostile temple. Solve magical puzzles and combat the cultists within to uncover the mysteries behind the chained sun.
                    </p>
                    <button disabled>Itch Page</button>
                    <button disabled>Full Presskit Download</button>
                </div>
            </div>
            <video autoPlay muted={true} loop playsInline>
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
                    <p>A Multidisciplinary team of Drexel seniors made up of Game Design and Production and College of Computing and Informatics majors. This project is being developed over 9 months as our capstone project. </p>
                    <a class='link-button' href="/src/html/tall_horse.html">Check Out Tall Horse</a>
                </div>
            </div>
            <video autoPlay muted={true} loop playsInline>
                <source src={menu} type="video/mp4" />
            </video>
            <video autoPlay muted={true} loop playsInline>
                <source src={menu} type="video/mp4" />
            </video>
            <div class='two-col-grid'>
                <Image src={opener} />
                <Image src={shader} />
            </div>
            <div class='two-col-grid'>
                <Image src={game_logo} isSquare={true} />
                <Image src={logo} isSquare={true} />
                <Image src={black_game_logo} isSquare={true} />
                <Image src={tallhorse_bw} isSquare={true} />
            </div>
        </div>
    )
}

export default PressKit