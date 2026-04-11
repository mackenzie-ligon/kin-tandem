import Image from "./Image"
import game_logo from "../assets/kin_tandem_logo.png"
import beauty1 from "../assets/beauty1.png"
import beauty2 from "../assets/beauty2.png"
import beauty3 from "../assets/beauty3.png"
import beauty4 from "../assets/beauty4.png"
import entrance from "../assets/level1_entrance.png"
import puzzle1 from "../assets/puzzle1.png"
import { useEffect, useState } from "react"

function Home() {
  return (
    <div class="page">
      <p>The navbar is currently bugged. We apologize for the inconvenience and are working hard to fix it.</p>
      <div class='trailer'>
        <div class='container'>
          <img src={game_logo}></img>
          <video>
          </video>
          <div >
            <a class='link-button' href='https://tall-horse.itch.io/kin-tandem'>Itch.io</a>
          </div>
          <a class='link-button' target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1cs0ImF1tteTwsPLidFgjBsnprPpognnb/view?usp=sharing'>Download Now!</a>

        </div>
      </div>
      <p>
        Kin Tandem is a split-screen co-op puzzle adventure game about a brawling older sister and mage younger brother exploring an overgrown, dilapidated, and cult infested temple. As brother and sister, you can stack on top of each other to defeat enemies and solve puzzles. Solve the mystery of the environment in Kin Tandem.
      </p>
      <p>Made by Tall Horse</p>
      <p>Published by Saphead</p>
      <Selector />
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
      <Image src={img} isBordered={true} />
    </div>) :
    (<div class='feature '>
      <Image src={img} isBordered={true} />
      <FeatureText className={'feature-img'} inverted={inverted} title={title} text={text} />
    </div>);

  return (
    feature
  )
}

function FeatureText({ inverted, title, text, timerID, setTimerID }) {
  clearInterval(timerID);
  return (
    <div className={inverted ? 'feature-text inverted' : 'feature-text'}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}


function Selector() {
  const [currentImage, setCurrentImage] = useState(2);
  const [paused, setPaused] = useState(false);

  const selectorSlideshowInterval = () => {
    if (paused) {
      return;
    }
    setCurrentImage((prevCurrentImage) => {
      if (prevCurrentImage >= 8) {
        return 1;
      }
      return prevCurrentImage + 1;
    });
    selectImage(`img-${currentImage}`);
  }

  useEffect(() => {
    console.log("useEffect runs");

    const interval = setInterval(() => {
      selectorSlideshowInterval();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div class='game-images'>
      <Image imgClassName='main-img' src={beauty1} isBordered={[true]} id="main-img" />
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
  );
}

function selectImage(id, pause = true, setPause = null) {
  const main_img = document.getElementById("main-img");
  main_img.classList.add('fade-out');
  setTimeout(() => {
    const main_img = document.getElementById("main-img");
    const selected_img = document.getElementById(id);
    main_img.src = selected_img.src;
    main_img.classList.remove('fade-out');
  }, 230);
}

function SelectorImage({ idNum, src, timerID }) {
  clearInterval(timerID);
  return (
    <div class='selector-img'>
      <img onClick={() => selectImage(`img-${idNum}`)} id={`img-${idNum}`} src={src}></img>
    </div>
  )
}

export default Home
