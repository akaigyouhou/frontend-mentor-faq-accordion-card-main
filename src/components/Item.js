import "./item.css";
import Arrow from './icon-arrow-down.svg';

function Item({ question, answer, id }) {
    return (
        <div className="item">
            <input type="checkbox" id={id + "check"}className="checkbox" defaultChecked={id === 1 ? true : false}>
            </input>
            <label htmlFor={id + "check"} className="question">
                <span>{question}</span>
                <img className="arrow" src={Arrow} alt="arrow">
                </img>
            </label>
            <div className="answer">
                <span>{answer}</span>
            </div>
        </div>
    );
}

export default Item;