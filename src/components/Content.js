import Contents from '../contents.json';
import Item from './Item';
import "./content.css";

function Content() {
    return (
        <div className="content">
            {Contents.map(({ question, answer }, index) => (
                <Item key={index + question.slice(0, 3)} question={question} answer={answer} id={index}/>
            ))}
        </div>
    );
}

export default Content;