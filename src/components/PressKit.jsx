import storyboard from "../assets/storyboard.png"

function PressKit(){
    return (
        <div class="content">
            <h3>Publisher</h3>
            <p>Saphead</p>
            <h3>Developer</h3>
            <p>Tall Horse</p>
            <h3>Release Date</h3>
            <p>Q2 2026</p>
            <h3>Platforms</h3>
            <p>Itch</p>
            <h3>Website</h3>
            <p>kin-tandem.com</p>
            <h3>Press Contact</h3>
            <p>tall.horse.game@gmail.com</p>
            <h3>Description</h3>
            <p>Kin Tandem is a couch co-op adventure game about a brother and sister searching for answers in a hostile temple. Solve magical puzzles and combat the cultists within to uncover the mysteries behind the chained sun.</p>
            <h3>Features</h3>
            <ul>
                <li>Work as a team to solve puzzle with each character unique abilities</li>
                <li>Manu can climb on Barsa's shoulders to reach new heights. </li>
                <li>Ascend a temple to follow your father’s footsteps.</li>
            </ul>
            <h3>Team Background</h3>
            <p>A Multidisciplinary team of Drexel seniors made up of Game Design and Production and College of Computing and Informatics majors. This project was developed over 9 months as our capstone project. </p>
            <h3>Videos</h3>
            <img src={storyboard} width="40%"></img>
        </div>
    )
}

export default PressKit