import { range } from "../../utils";

function Guess({guess}) {

    if (!guess) {
        return (
            <p className="guess">
                {range(5).map((i) => (
                    <span key={i} className="cell"></span>
                ))}
            </p>
        );
    }

    return (
        <p className="guess">
            {guess.map(({letter, status}, i) => (
                <span key={i} className={`cell ${status}`}>{letter}</span>
            ))}
        </p>
    );
}

export default Guess;