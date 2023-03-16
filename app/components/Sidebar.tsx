import React from 'react'
import styles from './Sidebar.module.css'


function Sidebar(props : any) {
  let message = 'Willkommen auf der Seite von Wretched Stars'
  let name = ""
  let planeten = ''

 switch (props.id) {
  case 1 : name = 'Tribius System';planeten = 'Exoplaneten: Tribius'; message = 'Jungle planet, very rough and aggressive ecosystem'; break;
  case 2 : name = 'New Arizona System';planeten = 'Exoplaneten: New Arizona'; message = 'Desert Planet basically Dune'; break;
  case 3 : name = 'System YXV-53-3';planeten = 'Exoplaneten:Sambula'; message = 'Lost imperial pleasure world. Last contact around m35. Tropical Waterworld lot of islands who seem to move on their own. Civilization devolved back to a tribal state. Rumor has it that on the ocean floor are hidden old science stations.'; break;
  case 4 : name = 'Garethia System';planeten = 'Exoplaneten:Garethia'; message = 'Once a bustling Hotspot of Trade, now a nearly empty hiveworld. A plague seems to have caused this horrible circumstance.'; break;
  case 5 : name = 'System SQT-23-X-3';planeten = 'Exoplaneten:Tyronnia, 3 Gasgiants'; message = 'Happy little Squatplanet'; break;
  case 6 : name = '';planeten = ''; message = 'Planet 6 sagt Hallo'; break;
  case 7 : name = '';planeten = ''; message = 'Planet 7 sagt Hallo'; break;
  case 8 : name = '';planeten = ''; message = 'Planet 8 sagt Hallo'; break;
  case 9 : name = '';planeten = ''; message = 'Planet 9 sagt Hallo'; break;
  case 10 : name = '';planeten = ''; message = 'Planet 10 sagt Hallo'; break;
  case 11: name = '';planeten = ''; message = 'Planet 11 sagt Hallo'; break;
  case 12: name = '';planeten = ''; message = 'Planet 12 sagt Hallo'; break;
  case 13: name = '';planeten = ''; message = 'Planet 13 sagt Hallo'; break;
  case 14: name = '';planeten = ''; message = 'Planet 14 sagt Hallo'; break;
  case 15: name = '';planeten = ''; message = 'Planet 15 sagt Hallo'; break;
  case 16 : name = '';planeten = ''; message = 'Planet 16 sagt Hallo'; break;
 }




  return (
    <div className='sidebar'>
      <div className={styles.main}>
        <h2>{name}</h2>
        <h3>{planeten}</h3> 
        <p>{message}</p>
      </div>
      </div>
  )
}

export default Sidebar