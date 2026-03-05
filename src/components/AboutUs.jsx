import logo from '../public/TallHorseLogo_Gradient.png'


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
        <Teammate headshot={logo} name="Josh Walcott" role="Enemy Programmer" />
        <Teammate headshot={logo} name="Mackenzie Ligon" role="Receptionist" />
        <Teammate headshot={logo} name="Minhal Vakil" role="Gameplay Programmer" />
        <Teammate headshot={logo} name="Owen Miller" role="Gameplay Programmer" />
        <Teammate headshot={logo} name="Ryan Brosius" role="Tools & System Programmer" />
      </div>
    </div>
  )
}

function Teammate({ headshot, name, role, portfolio }) {
  return (
    <div>
      <img src={headshot} width='100%'></img>
      <h3>{name}</h3>
      <h3>{role}</h3>
      <h4>{portfolio}</h4>
    </div>
  )
}

export default AboutUs
