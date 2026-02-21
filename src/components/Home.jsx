import game_logo from "../assets/kin_tandem_logo.png"
import beauty2 from "../assets/beauty2.png"
import beauty3 from "../assets/beauty3.png"
import puzzle1 from "../assets/puzzle1.png"

function Home() {
  return (
    <div class="page">
      <div class='trailer'>
        <div class='container'>
          <img src={game_logo}></img>
          <video>
          </video>
          <div class='two-col-grid'>
            <button>
              Itch
            </button>
            <button>
              Steam
            </button>
          </div>
        </div>

      </div>
      <p>
        Kin Tandem is a split-screen co-op puzzle adventure game about a brawling older sister and mage younger brother exploring an overgrown, dilapidated, and cult infested temple. As brother and sister, you can stack on top of each other to defeat enemies and solve puzzles. Solve the mystery of the environment in Kin Tandem.
      </p>
      <p>Made by Tall Horse</p>
      <p>Published by Saphead</p>
      <div class='game-images'>
        <img id="main-img" width="100%" src={beauty2}></img>
        <div class='img-selector'>
          <img id='img-1' src={beauty2}></img>
          <img id='img-2' src={beauty2}></img>
          <img id='img-3' src={beauty2}></img>
          <img id='img-4' src={beauty2}></img>
          <img id='img-5' src={beauty2}></img>
          <img id='img-6' src={beauty2}></img>
          <img id='img-7' src={beauty2}></img>
          <img id='img-8' src={beauty2}></img>
        </div>
      </div>
      <Feature img={puzzle1} title='Teamwork' text="
      Work as a team to solve puzzles with each character's unique abilities." />
      <Feature img={beauty3} title='Combine' text="Manu can climb on Barsa's shoudlers to reach new heights." inverted={true} />
      <Feature img={puzzle1} title='Avenge' text="Ascend a temple to follow your father's footsteps." />
      <h1>Take our playtesting survey!</h1>
      <p>We hope you enjoyed our game. it helps us so much to improve the game and fix bugs if you are able to take our playtesting survey!</p>
      <button disabled>Survey</button>
    </div>
  )
}

function Feature({ img, inverted, title, text }) {
  const feature = inverted ?
    (<div class='feature inverted'>
      <FeatureText inverted={inverted} title={title} text={text} />
      <img src={img}></img>
    </div>) :
    (<div class='feature '>
      <img src={img}></img>
      <FeatureText inverted={inverted} title={title} text={text} />
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

export default Home
