import { useState } from 'react';
import './App.css';

const zombieFighters = 
[
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]



const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [availableFighters, setAvailableFighters] = useState(zombieFighters)
  const totalStrength = team.reduce(
    (sum, fighter) => sum + fighter.strength
  , 0);
  const totalAgility = team.reduce(
    (sum, fighter) => sum + fighter.agility
  , 0);

  const handleAddFighter = (fighter) => {
    if(money < fighter.price) {
      alert("Not enough money to add this fighter!");
      return; 
    }
    setTeam([...team, fighter]);
    setAvailableFighters(availableFighters.filter(
      (f) => f.id !== fighter.id
    ));
    setMoney(money - fighter.price);
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter(
      (f) => f.id !== fighter.id
    ));
    setAvailableFighters([...availableFighters, fighter]);
    setMoney(money + fighter.price);
  };

  return (
    <>
      <div>
        <h1>Zombie Fighters</h1>
        <h2>Money: ${money}</h2>
        <h2>Team Strength: {totalStrength}</h2>
        <h2>Team Agility: {totalAgility}</h2>
        <h2>Team</h2>
        <ul>
          {team.length !== 0 ? (
             <ul>
              {team.map((fighter) => (
                <li key={fighter.id}>
                <img src={fighter.img} alt={fighter.name} width="100" />
                <p>{fighter.name}</p>
                <p>Price: {fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={()=> handleRemoveFighter(fighter)}>
                  Remove
                </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Pick some team members</p>
          )}
        </ul>

        <h2>Fighters</h2>
          <ul>
            {availableFighters.map((fighter) => (
              <li key={fighter.id}>{fighter.name}
                <img src={fighter.img} alt={fighter.name} />
                <p>{fighter.name}</p>
                <p>Price: {fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleAddFighter(fighter)}>
                  Add
                </button>
              </li>
            ))}
          </ul>
      </div>
    </>
  );
}

export default App


