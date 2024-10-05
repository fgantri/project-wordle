import React from 'react';

function GuessInput({onSubmit}) {

    const [tentativeGuess, setTentativeGuess] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        /*
        if (guess.length !== 5) {
            window.alert("Please enter exactly 5 characters.")
            return;
        }
        */
        console.log({tentativeGuess});
        onSubmit(tentativeGuess);
        setTentativeGuess("");
    }

    function handleChange(e) {
        const newValue = e.target.value.toUpperCase();
        if (newValue.length > 5) {
            return;
        }
        setTentativeGuess(newValue);
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input 
                id="guess-input" 
                type="text" 
                value={tentativeGuess} 
                onChange={handleChange}
                required={true}
                minLength={5}
                maxLength={5}
                pattern='[a-zA-Z]{5}' 
                title='5 letter word'/>
        </form>
    )
}

export default GuessInput;