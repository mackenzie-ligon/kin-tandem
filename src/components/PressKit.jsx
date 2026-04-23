import Image from "./Image"
import full_presskit from "../assets/TallHorse_KinTandem_Presskit.zip"
import menu from "../assets/menuBg.mp4"

function PressKit() {
    return (
        <div class='page'>
            <video autoPlay muted={true} loop playsInline>
                <source src='/videos/Video_KinTandemTrailer.mp4' type="video/mp4" />
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
                        <p>Developer:<br></br>Tall Horse</p>
                        <p>Publisher:<br></br>Saphead</p>
                        <p>Release Date:<br></br>Q2 2026</p>
                        <p>Platforms:<br></br>Itch, Steam</p>
                        <p>Website:<br></br>kin-tandem.com</p>
                        <p>Press Contact:<br></br>tall.horse.game@gmail.com</p>
                    </div>
                </div>
                <div>
                    <p>In Kin Tandem, a new local co-op adventure, take the role of a pair of feline siblings as they climb their way through a magic temple. Work in tandem to combine Barsa's strength with Manu's spells as you solve challenges and defeat enemies.
                    </p>
                    <a class='link-button centered' href='https://tall-horse.itch.io/kin-tandem' target='_blank'>Itch.io</a>
                    <a class='link-button centered' href={full_presskit} download>Full Presskit Download</a>
                </div>
            </div>
            <video autoPlay muted={true} loop playsInline>
                <source src={menu} type="video/mp4" />
            </video>
            <div class='two-col-grid'>
                <div>
                    <h3>Features</h3>
                    <ul>
                        <li>Co-op at its core - Solve puzzles, defeat enemies, and work in tandem in this split-screen adventure built for two!</li>
                        <li>Combine your Skills - Discover new ways to use Barsa's brawling and Manu's magic together as you climb your way through the temple. Manu can climb on Barsa’s shoulder to literally combine their powers and reach new paths.</li>
                        <li>Break the Chains - Join the feline family on their journey to find their missing father. Along the way take down a dastardly cult, shatter their magical chains, and bring life back to the jungle.</li>
                    </ul>
                </div>
                <div><h3>Tall Horse</h3>
                    <p>A Multidisciplinary team of Drexel seniors made up of Game Design and Production and College of Computing and Informatics majors. This project is being developed over 9 months as our capstone project. </p>
                    <a class='link-button centered' href="/src/html/tall_horse.html">Check Out Tall Horse</a>
                </div>
            </div>
            <Image src="/videos/Gif_Combine.gif" />
            <br></br>
            <Image src="/videos/Gif_Combat.gif" />
            <br></br>
            <Image src="/videos/Gif_Spellcasting.gif" />
            <br></br>
            <div class='two-col-grid'>
                <Image src="/images/Level 1_4K_Closeup.png" />
                <Image src="/images/Tutorial_4K_SunFromGround.png" />
                <Image src="/images/Tutorial_4K_BackToSun2.png" />
                <Image src="/images/Tutorial_4K_Kuku1.png" />
                <Image src="/images/Tutorial_4K_TempleHallShoulder2.png" />
                <Image src="/images/Tutorial_4K_CloseupKuku2.png" />
            </div>
            <div class='two-col-grid'>
                <Image src="/game_logos/GameTitle_1Color.svg" />
                <Image src="/game_logos/GameTitle_2Color.svg" />
                <Image src="/game_logos/GameTitle_3Color.svg" />
                <Image src="/game_logos/GameTitle_FullColor.svg" />
                <Image src="/game_logos/GameTitle_Grayscale.svg" />
                <Image src="/game_logos/GameTitle_W&B.svg" />
                <Image src="/game_logos/IconGame_1Color.svg" isSquare />
                <Image src="/team_logos/TeamLogo_1ColorWarm.svg" isSquare />
                <Image src="/game_logos/IconGame_2Color.svg" isSquare />
                <Image src="/team_logos/TeamLogo_2ColorWarm.svg" isSquare />
                <Image src="/game_logos/IconGame_3Color.svg" isSquare />
                <Image src="/team_logos/TeamLogo_FullColorWarm.svg" isSquare />
                <Image src="/game_logos/IconGame_GrayscaleFull.svg" isSquare />
                <Image src="/team_logos/TeamLogo_Grayscale.svg" isSquare />
                <Image src="/game_logos/IconGame_White.svg" isSquare />
                <Image src="/team_logos/TeamLogo_White.svg" isSquare />
                <Image src="/game_logos/IconGame_Black.svg" isSquare />
                <Image src="/team_logos/TeamLogo_Black.svg" isSquare />
            </div>
        </div>
    )
}

export default PressKit