import logo from '../public/TallHorseLogo_Gradient.png'
import Image from "./Image"

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
        <Teammate headshot={logo} name="Kai Stiefel" role="Motion Capture Technician" />
        <Teammate headshot={logo} name="Prasin Shrestha" role="Technical Artist" />
        <Teammate headshot={logo} name="Yalguun Munkhbayar" role="Game Designer" />
        <Teammate headshot={logo} name="Zachary Centracchio" role="Environment Artist" />
        <Teammate headshot={logo} name="Audrey Go" role="Concept Artist, UI Designer" />
        <Teammate headshot={logo} name="Adriana Vasquez" role="Gameplay Programmer" />
        <Teammate headshot={logo} name="Akintoye Ilo" role="Sound Designer" />
        <Teammate headshot={logo} name="Cameron Romero" role="Tools Programmer" />
        <Teammate headshot={logo} name="Josh Walcott" role="Enemy Programmer" portfolio={`https://joshuawalcott.site/`} />
        <Teammate headshot={logo} name="Mackenzie Ligon" role="Receptionist" />
        <Teammate headshot={logo} name="Minhal Vakil" role="Gameplay Programmer" />
        <Teammate headshot={logo} name="Owen Miller" role="Gameplay Programmer" />
        <Teammate headshot={logo} name="Ryan Brosius" role="Tools & System Programmer" />
      </div>
    </div>
  )
}

function Teammate({ headshot, name, role, portfolio, blurb }) {
  
  function showModal() {
    const dialog = document.getElementById(`${name}-dialog`);
    dialog.showModal();
  }
  function closeModal() {
    const dialog = document.getElementById(`${name}-dialog`);
    console.log('close');
    dialog.close();
  }

  return (
    <div class='teammate' onClick={showModal}>
      <Image src={headshot} isSquare={true} />
      <dialog id={`${name}-dialog`} class='teammate-modal'>
        <button onClick={closeModal}>Close</button>

        <div class='two-col-grid'>
          <Image src={headshot} isSquare={true} />
          <div>
            <h2>{name}</h2>
            <h3>{role}</h3>
            <a href={portfolio} target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
            <p>{blurb}</p>
          </div>
        </div>
      </dialog>
      <h3>{name}</h3>
      <h3>{role}</h3>
      <a href={portfolio} target="_blank" rel="noopener noreferrer">
        Portfolio
      </a>
    </div>
  )
}

export default AboutUs
