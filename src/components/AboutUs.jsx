import logo from '../public/TallHorseLogo_Gradient.png'
import Image from "./Image"
import { useEffect } from 'react';

function AboutUs() {
  return (
    <div class='page'>
      <div class='overlay'>
        <div class='container'>
          <img src={logo}></img>
        </div>
      </div>
      <h1>Tall Horse</h1>
      <h3>Who We Are</h3>
      <p>A multidisciplinary team made up of Game Design and Production (GDAP) and College of Computing and Informatics (CCI) majors. The project is being developed over 9 months as our capstone project.</p>
      <div class='three-col-grid'>
        <Teammate headshot={logo} name="Kirstin Bonnick" role="Producer" />
        <Teammate headshot={logo} name="Zachary Millman" role="Producer" />
        <Teammate headshot={logo} name="Fox Fleishmann" role="Tech Director" />
        <Teammate headshot={logo} name="Jacob Stratton" role="Creative Director" />
        <Teammate headshot={logo} name="Lily Durand" role="Art Director" />
        <Teammate headshot={logo} name="Kai Stiefel" role="Motion Capture Technician" portfolio={`https://www.artstation.com/stieefus`} />
        <Teammate headshot={logo} name="Prasin Shrestha" role="Technical Artist" portfolio={`https://prasinshrestha2001.artstation.com/`} />
        <Teammate headshot={logo} name="Yalguun Munkhbayar" role="Game Designer" portfolio={`https://akoreyu.artstation.com/`} />
        <Teammate headshot={logo} name="Zachary Centracchio" role="Environment Artist" />
        <Teammate headshot={logo} name="Audrey Go" role="Concept Artist, UI Designer" />
        <Teammate headshot={logo} name="Adriana Vasquez" role="Gameplay Programmer" portfolio={`https://www.linkedin.com/in/adriana--vasquez/`} />
        <Teammate headshot={logo} name="Akintoye Ilo" role="Gameplay Programmer, Sound Designer" />
        <Teammate headshot={logo} name="Cameron Romero" role="Tools Programmer" />
        <Teammate headshot={logo} name="Josh Walcott" role="Enemy Programmer" portfolio={`https://joshuawalcott.site/`} />
        <Teammate headshot={logo} name="Mackenzie Ligon" role="Web Developer" blurb={'Mackenzie primarily focused on developing this website (and hopes you like it!) but also wrote most of the technical documentation for the game, including the System Requirements Specification, Design Document, and Acceptance Testing Plan. She did some minor engine work, creating a few puzzle pieces (moving platforms and adjustable columns).'} />
        <Teammate headshot={logo} name="Minhal Vakil" role="Gameplay Programmer" portfolio={`https://www.linkedin.com/in/minhalvakil/`} />
        <Teammate headshot={logo} name="Owen Miller" role="Gameplay Programmer" />
        <Teammate headshot={logo} name="Ryan Brosius" role="Tools & System Programmer" portfolio={`https://ryanbrosius.com/`} />
      </div>
    </div>
  )
}

function Teammate({ headshot, name, role, portfolio, blurb }) {
  const dialog = document.getElementById(`${name}-dialog`);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target === dialog) dialog.close();
    }

    window.addEventListener('click', handleClick);

    // Cleanup: Remove listener on unmount
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [dialog]); // Run


  const showModal = () => {
    dialog.showModal();
  }
  const closeModal = (e) => {
    dialog.close();
    e.stopPropagation();
  }

  return (
    <div>
      <div class='teammate' onClick={showModal}>
        <Image src={headshot} isSquare={true} />
        <dialog id={`${name}-dialog`} closedby='any' class='teammate-modal'>
          <div class='two-col-grid'>
            <button onClick={closeModal} class='modal-close'>Close</button>
            <Image src={headshot} isSquare={true} />
            <div>
              <h2>{name}</h2>
              <h3>{role}</h3>
              <a href={portfolio} target="_blank" rel="noopener noreferrer">
                Check me out!
              </a>
              <p>{blurb}</p>
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
