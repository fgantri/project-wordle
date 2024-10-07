import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);
  const userHasWon = guesses.some(guess => guess === answer);
  const gameOver = guesses.length >= 6 || userHasWon;

  function addGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    setGuesses(prevGuesses => [...prevGuesses, guess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {!gameOver ?
        <GuessInput onSubmit={addGuess} /> 
        :
        userHasWon ? (
          <GameOverBanner variant='happy'>
            <p>
              <strong>Congratulations!</strong> Got it in{' '}
              <strong>{guesses.length} guesses</strong>.
            </p>
          </GameOverBanner>
        ):(
          <GameOverBanner>
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          </GameOverBanner>
        )
      }
    </>
  );
}

export default Game;
