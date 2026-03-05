import Image from "./Image"
import game_logo from "../assets/kin_tandem_logo.png"
import beauty1 from "../assets/beauty1.png"
import beauty2 from "../assets/beauty2.png"
import beauty3 from "../assets/beauty3.png"
import beauty4 from "../assets/beauty4.png"
import entrance from "../assets/level1_entrance.png"
import puzzle1 from "../assets/puzzle1.png"

function Home() {

  return (
    <div class="page">
      <p>The navbar is currently bugged. We apologize for the inconvenience and are working hard to fix it.</p>
      <div class='trailer'>
        <div class='container'>
          <img src={game_logo}></img>
          <video>
          </video>
          <a class='link-button' target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1cs0ImF1tteTwsPLidFgjBsnprPpognnb/view?usp=sharing'>Download Now!</a>
          {/* <div class='two-col-grid'>
            <button>
              Itch
            </button>
            <button>
              Steam
            </button>
          </div> */}
        </div>

      </div>
      <p>
        Kin Tandem is a split-screen co-op puzzle adventure game about a brawling older sister and mage younger brother exploring an overgrown, dilapidated, and cult infested temple. As brother and sister, you can stack on top of each other to defeat enemies and solve puzzles. Solve the mystery of the environment in Kin Tandem.
      </p>
      <p>Made by Tall Horse</p>
      <p>Published by Saphead</p>
      <div class='game-images'>
        <Image src={beauty2} isBordered={[true]} id="main-img" />
        <div class='img-selector'>
          <SelectorImage idNum={1} src={beauty1} />
          <SelectorImage idNum={2} src={beauty2} />
          <SelectorImage idNum={3} src={beauty3} />
          <SelectorImage idNum={4} src={beauty4} />
          <SelectorImage idNum={5} src={entrance} />
          <SelectorImage idNum={6} src={beauty2} />
          <SelectorImage idNum={7} src={beauty2} />
          <SelectorImage idNum={8} src={beauty2} />
        </div>
      </div>
      <Feature img={puzzle1} title='Teamwork' text="
      Work as a team to solve puzzles with each character's unique abilities." />
      <Feature img={beauty3} title='Combine' text="Manu can climb on Barsa's shoudlers to reach new heights." inverted={true} />
      <Feature img={puzzle1} title='Avenge' text="Ascend a temple to follow your father's footsteps." />
      <h1>Thank you!</h1>
      <p>We hope you enjoy our game. If you have any feedback please <a href="mailto:tall.horse.game@gmail.com">email us</a> and let us know!</p>
      <br></br>
    </div>
  )
}

function Feature({ img, inverted, title, text }) {
  const feature = inverted ?
    (<div class='feature inverted'>
      <FeatureText className={'feature-img'} inverted={inverted} title={title} text={text} />
      <Image src={img} isBordered={true}/>
    </div>) :
    (<div class='feature '>
      <Image src={img} isBordered={true}/>
      <FeatureText  className={'feature-img'} inverted={inverted} title={title} text={text} />
    </div>);

  return (
    feature
  )
}

function FeatureText({ inverted, title, text }) {
  return (
    <div className={inverted ? 'feature-text inverted' : 'feature-text'}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function SelectorImage({ idNum, src }) {
  function selectImage(id) {
    const main_img = document.getElementById("main-img");
    const selected_img = document.getElementById(id);
    main_img.src = selected_img.src;
  }
  return (
    <div class='selector-img'>
       <img onClick={() => selectImage(`img-${idNum}`)} id={`img-${idNum}`} src={src}></img>
    </div>
     )
}

export default Home
