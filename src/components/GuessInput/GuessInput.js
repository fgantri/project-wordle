import React from 'react';

function GuessInput() {

    const [guess, setGuess] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        /*
        if (guess.length !== 5) {
            window.alert("Please enter exactly 5 characters.")
            return;
        }
        */
        console.log({guess});
        setGuess("");
    }

    function handleChange(e) {
        const newValue = e.target.value.toUpperCase();
        if (newValue.length > 5) {
            return;
        }
        setGuess(newValue);
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input 
                id="guess-input" 
                type="text" 
                value={guess} 
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