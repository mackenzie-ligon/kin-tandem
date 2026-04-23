import Image from "./Image"
import { useEffect } from 'react';

function AboutUs() {
  const logo = 'TallHorseLogo_Gradient.png'
  return (
    <div class='page'>
      <div class='overlay'>
        <div class='container'>
          <img src='/TallHorseLogo_Gradient.png'></img>
        </div>
      </div>
      <h1>Tall Horse</h1>
      <h3>Who We Are</h3>
      <p>A multidisciplinary team made up of Game Design and Production (GDAP) and College of Computing and Informatics (CCI) majors. The project is being developed over 9 months as our capstone project.</p>
      <div class='three-col-grid'>
        <Teammate headshot='Kirstin.png' name="Kirstin Bonnick" role="Producer" blurb={'Producer and promo artist. Working on task management and creating promotional materials for the team.'}portfolio={'https://www.artstation.com/kirstinbonnick'}/>
        <Teammate headshot='ZacM.png' name="Zachary Millman" blurb={'Producer and Narrative Designer. Managed team documentation along with writing & directing character dialog.'} role="Producer" portfolio={'https://zacbm.com/'}/>
        <Teammate headshot='Fox.png' name="Fox Fleishmann" role="Tech Director" blurb={'Tech lead specializing in environment interactions and losing his mind while making builds.'} note={"Yes, his name is actually Fox. We're not going for a zoo animal theme (yet)."} portfolio={'https://www.ffleischmann03.com/'} />
        <Teammate headshot='Jake.png' name="Jacob Stratton" role="Creative Director" note={"He's also Manu's VA."} portfolio={'https://www.artstation.com/mollamba'} />
        <Teammate headshot={logo} name="Lily Durand" role="Art Director" blurb={'Art lead and primary character artist. Focused on concepting, modeling, texturing, and yapping tasks at my fellow artists.'} note={"She is the lovely artist behind all of our headshots! Also a wordscapes extraordinare."} portfolio={'https://www.artstation.com/lilydurand'} />
        <Teammate headshot='Kai.png' name="Kai Stiefel" role="Motion Capture Technician" blurb={"Motion capture technician who handled data capture, processing, cleaning, and retargeting through Vicon Shogun and Motion Builder. Also created concept art for props and creatures, and provided modeling and texturing for puzzle piece assets."} portfolio={`https://www.artstation.com/stieefus`} />
        <Teammate headshot='Prasin.png' name="Prasin Shrestha" role="Technical Artist" blurb={"Tech Artist who teched the art for the project"} note={'He worked on the shader and most of our vfx.'} portfolio={`https://prasinshrestha2001.artstation.com/`} />
        <Teammate headshot='Ako.png' name="Yalguun Munkhbayar" role="Game Designer" blurb={"First time designing puzzles and levels for a third-person game. World record holder for solo Kin Tandem any% speedrun. RIP Doublin"} note={"(Doublin was the original game pitch.) Every puzzle in the game was graced by his hand. He's probably the most creative person I've ever met. I was not paid or otherwise endorsed to give this review."} portfolio={`https://akoreyu.artstation.com/`} />
        <Teammate headshot='ZacC.png' name="Zachary Centracchio" role="Environment Artist" blurb={"Environment Artist focused on set dressing and foliage tool development."} portfolio={"https://www.artstation.com/zachary_centracchio"} />
        <Teammate headshot='Audrey.png' name="Audrey Go" role="Concept Artist, UI Designer" blurb={"Concept artist and UI designer. Contributor to the team server’s wordle streak"} note={"Don't tell her your starting word."} portfolio={'https://www.linkedin.com/in/audrey-go/'} />
        <Teammate headshot='Adriana.png' name="Adriana Vasquez" role="Gameplay Programmer" blurb={'Programmer. Developed the revival system and save system. VA for Barsa :D'} portfolio={`https://www.linkedin.com/in/adriana--vasquez/`} />
        <Teammate headshot='Akintoye.png' name="Akintoye Ilo" role="Gameplay Programmer, Sound Designer" />
        <Teammate headshot='Cam.png' name="Cameron Romero" role="Tools Programmer" blurb={"Programmer, likes frogs, designed and implemented puzzle system."} note={"He also coded the entire boss fight."} portfolio={'https://cameronhuangromero.com/'}/>
        <Teammate headshot={logo} name="Josh Walcott" role="Enemy Programmer" blurb={"I’m a game & software developer that programmed the 4 enemy types of the game."} portfolio={`https://joshuawalcott.site/`} />
        <Teammate headshot='Mackenzie.png' name="Mackenzie Ligon" role="Web Developer, Technical Writer" blurb={'Mackenzie primarily focused on developing this website (and hopes you like it!) but also wrote most of the technical documentation for the game, including the System Requirements Specification, Design Document, and Acceptance Testing Plan. She did some minor engine work, creating a few puzzle pieces (moving platforms and adjustable columns).'} note={"I'm the editor behind the notes, if you couldn't tell."}portfolio={'https://www.linkedin.com/in/macaligon/'}/>
        <Teammate headshot='Minhal.png' name="Minhal Vakil" role="Gameplay Programmer" blurb={"Programmer, developed systems for character movement and stacking system"} portfolio={'https://minhalvakil.github.io/'} />
        <Teammate headshot={logo} name="Owen Miller" role="Gameplay Programmer" blurb={"Programmer, worked on spell system and debug tools"} portfolio={"https://ommiller.artstation.com/"}/>
        <Teammate headshot='Ryan.png' name="Ryan Brosius" role="Tools & System Programmer" blurb={"Programmer for spell systems & underlying systems. 57th best in the world at a hat in time speedrunning"} note={"'Anything is possible. Don't ask if it can be done, ask how much time it will take.' -Ryan, after Fox asked him to make a significant change to camera merging"} portfolio={`https://ryanbrosius.com/`} />
      </div>
    </div>
  )
}

function Teammate({ headshot, name, role, portfolio, blurb, note }) {
  useEffect(() => {
    const dialog = document.getElementById(`${name.split(" ")[1]}-dialog`);

    const handleClick = (e) => {
      if (e.target === dialog) dialog.close();
    }

    window.addEventListener('click', handleClick);

    // Cleanup: Remove listener on unmount
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []); // Run


  const openModal = () => {
    const dialog = document.getElementById(`${name.split(" ")[1]}-dialog`);

    dialog.showModal();
  }
  const closeModal = (e) => {
    const dialog = document.getElementById(`${name.split(" ")[1]}-dialog`);

    dialog.close();
    e.stopPropagation();
  }

  return (
    <div>
      <div class='teammate' onClick={openModal}>
        <Image src={`/headshots/${headshot}`} isSquare={true} />
        <dialog id={`${name.split(" ")[1]}-dialog`} closedby='any' class='teammate-modal'>
          <div class='two-col-grid'>
            <button onClick={closeModal} class='modal-close'>X</button>
            <Image src={`/headshots/${headshot}`} isSquare={true} />
            <div>
              <h2>{name}</h2>
              <h3>{role}</h3>
              <p>{blurb}</p>
              {note && <p class='editor-note'>Editor's Note: {note}</p>}
               <a href={portfolio} target="_blank" rel="noopener noreferrer">
                Check me out!
              </a>
            </div>
          </div>
        </dialog>
        <h3>{name}</h3>
        <h3>{role}</h3>
      </div>
      <a href={portfolio} target="_blank" rel="noopener noreferrer">
        Check me out!
      </a>
    </div>
  )
}

export default AboutUs
