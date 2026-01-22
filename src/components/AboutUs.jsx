function AboutUs() {

  return (
    <div class="content">
      <p>How did we become a community of Tall Horses, you ask? A game of jackbox, a google form, and a non-insignificant amount of alcohol.</p>
        <table>
          <tbody>
            <Teammate name="Kirstin Bonnick" role="Producer" />
            <Teammate name="Zachary Millman" role="Producer" />
            <Teammate name="Fox Fleishmann" role="Tech Director" />
            <Teammate name="Jacob Stratton" role="Creative Director" />
            <Teammate name="Lily Durand" role="Art Director" />
            <Teammate name="Kai Stiefel" role="Mr. Mocap" />
            <Teammate name="Prasin Shrestha" role="Mr. Shader" />
            <Teammate name="Yalguun Munkhbayar" role="Tallest Horse" />
            <Teammate name="Zachary Centracchio" role="Mr. Radio" />
            <Teammate name="Audrey Go" role="Concept Art Speedrunner" />
            <Teammate name="Adriana Vasquez" role="[role]" />
            <Teammate name="Akintoye Ilo" role="British" />
            <Teammate name="Cameron Romero" role="Puzzle Master" />
            <Teammate name="Josh Walcott" role="[role]" />
            <Teammate name="Mackenzie Ligon" role="Receptionist" />
            <Teammate name="Minhal Vakil" role="[role]" />
            <Teammate name="Owen Miller" role="[role]" />
            <Teammate name="Ryan Brosius" role="[role]" />
          </tbody>
      </table>
    </div>
  )
}

function Teammate({name, role}){
  return (
    <tr>
      <td>{name}</td>
      <td>{role}</td>
    </tr>
  )
}

export default AboutUs
