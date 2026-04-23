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
        </div>
      </div>
      <p>
        In Kin Tandem, a new local co-op adventure, take the role of a pair of feline siblings as they climb their way through a magic temple. Work in tandem to combine Barsa's strength with Manu's spells as you solve challenges and defeat enemies.
      </p>
      <p>Developed by Tall Horse</p>
      <p>Published by Saphead</p>
      <Selector />
      <Feature img={puzzle1} title="Co-op at Its Core" text="
      Solve puzzles, defeat enemies, and work in tandem in this split-screen adventure built for two!" />
      <Feature img={beauty3} title='Combine Your Skills' text=" Discover new ways to use Barsa’s brawling and Manu’s magic together as you climb your way through the temple. Manu can climb on Barsa’s shoulder to literally combine their powers and reach new paths." inverted={true} />
      <Feature img={puzzle1} title='Break the Chains' text="Join the feline family on their journey to find their missing father. Along the way take down a dastardly cult, shatter their magical chains, and bring life back to the jungle.
" />
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
  const timerIDs = [];

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
    selectImage(currentImage, false, setPaused, setCurrentImage);
  }

  useEffect(() => {

    const interval = setInterval(() => {
      selectorSlideshowInterval();
    }, 7000);

    timerIDs.push(interval);
    return () => clearInterval(interval);
  }, [currentImage, paused]);

  return (
    <div class='game-images'>
      <Image imgClassName='main-img' src={beauty1} isBordered={[true]} id="main-img" />
      <div class='img-selector'>
        <SelectorImage idNum={1} src={beauty1} setCurrent={setCurrentImage} setPause={setPaused} />
        <SelectorImage idNum={2} src={beauty2} setCurrent={setCurrentImage} setPause={setPaused} />
        <SelectorImage idNum={3} src={beauty3} setCurrent={setCurrentImage} setPause={setPaused} />
        <SelectorImage idNum={4} src={beauty4} setCurrent={setCurrentImage} setPause={setPaused} />
        <SelectorImage idNum={5} src={entrance} setCurrent={setCurrentImage} setPause={setPaused} />
        <SelectorImage idNum={6} src={beauty2} setCurrent={setCurrentImage} setPause={setPaused} />
        <SelectorImage idNum={7} src={beauty2} setCurrent={setCurrentImage} setPause={setPaused} />
        <SelectorImage idNum={8} src={beauty2} setCurrent={setCurrentImage} setPause={setPaused} />
      </div>
    </div>
  );
}

function selectImage(id, pause, setPause, setCurrent) {
  setPause(pause);
  const main_img = document.getElementById("main-img");
  main_img.classList.add('fade-out');
  setTimeout(() => {
    const main_img = document.getElementById("main-img");
    const selected_img = document.getElementById(`img-${id}`);
    main_img.src = selected_img.src;
    main_img.classList.remove('fade-out');
  }, 230);
  if (pause) {
    setCurrent(id +1);
    setTimeout(() => {
      setPause(false)
    }, 5000);
  }

}

function SelectorImage({ idNum, src, setPause, setCurrent}) {
  return (
    <div class='selector-img'>
      <img onClick={() => selectImage(idNum, true, setPause, setCurrent)} id={`img-${idNum}`} src={src}></img>
    </div>
  )
}

export default Home
