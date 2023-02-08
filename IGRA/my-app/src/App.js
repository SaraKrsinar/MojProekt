import React, { useState } from 'react';
import './igra.css';
import kamen from './rock.jpg';
import list from './paper.jpg';
import nozicki from './scissors.jpg';

const options = ['лист', 'камен' , 'ножички'];

let imageURL = '';
const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const play = choice => {
    setPlayerChoice(choice);
    const randomIndex = Math.floor(Math.random() * options.length);
    setComputerChoice(options[randomIndex]);

    if (choice === 'камен' && options[randomIndex] === 'ножички') {
      setResult('ПОБЕДИ!!!');
    } else if (choice === 'лист' && options[randomIndex] === 'камен') {
      setResult('ПОБЕДИ!!!');
    } else if (choice === 'ножички' && options[randomIndex] === 'лист') {
      setResult('ПОБЕДИ!!!');
    } else if (choice === options[randomIndex]) {
      setResult('НЕРЕШЕНО.');
    } else {
      setResult('ИЗГУБИ :(');
    }

    if (choice === 'камен') {
      imageURL = kamen;
    } else if (choice === 'лист') {
      imageURL = list;
    } else if (choice === 'ножички') {
      imageURL = nozicki;
    } 
  };

  return (
    <div id="celo">
      <h1 className="slide-in-title">Победи го компјутерот!</h1>
      <h2 className="fade-in-title">ЛИСТ, КАМЕН, НОЖИЧКИ</h2>
      
      <div>
        {options.map(option => (
          <button  id="kopce" key={option} onClick={() => play(option)}>
            {option}
          </button>
        ))}
      </div>
      {playerChoice !== null && (
        <div id="izbor">
          <p>Ти избра: {playerChoice}</p>
          <p>Компјутерот избра: {computerChoice}</p>
          <p>Резултат: {result}</p>
           <img src={imageURL} alt="SLika" />
        </div>
      )}
       <a href="http://127.0.0.1:5500/mojproekt.html">
        <button id="kopcee">Врати се на почетната страна</button>
      </a>
    </div>
  );
};

export default Game;
