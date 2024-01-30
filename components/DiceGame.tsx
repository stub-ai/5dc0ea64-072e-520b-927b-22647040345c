import React, { useState } from 'react';

const DiceGame = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState('');

  const rollDice = () => Math.floor(Math.random() * 6) + 1;

  const playRound = () => {
    if (round < 10) {
      setScore1(score1 + rollDice());
      setScore2(score2 + rollDice());
      setRound(round + 1);
    } else {
      if (score1 > score2) {
        setWinner(player1);
      } else if (score2 > score1) {
        setWinner(player2);
      } else {
        setWinner('Draw');
      }
    }
  };

  const resetGame = () => {
    setPlayer1('');
    setPlayer2('');
    setScore1(0);
    setScore2(0);
    setRound(0);
    setWinner('');
  };

  return (
    <div>
      <input type="text" placeholder="Player 1 name" value={player1} onChange={(e) => setPlayer1(e.target.value)} />
      <input type="text" placeholder="Player 2 name" value={player2} onChange={(e) => setPlayer2(e.target.value)} />
      <button onClick={playRound}>Roll Dice</button>
      {winner && (
        <div>
          <h2>Winner: {winner}</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default DiceGame;