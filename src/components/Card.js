import { useState, useEffect } from 'react';

import Content from './Content';
import "./card.css";
import MobileIllu from './illustration-woman-online-mobile.svg';
// import DeskIllu from './illustration-woman-online-desktop.svg';
import Box from './illustration-box-desktop.svg';

function Card() {
    const [width, setWidth] = useState("");

    const resizeUpdate = (e) => {
        let newWidth = e.target.innerWidth;
        setWidth(newWidth);
    };

    useEffect(() => {
        const width = window.innerWidth;
        setWidth(width);
        window.addEventListener("resize", resizeUpdate);

        return () => {
            window.removeEventListener("resize", resizeUpdate);
        }
    }, []);

    return (
        <main className="card">
            <div className="container">
                <div className="shadow">
                { width < 1200 ? 
                    <img className="illu" src={MobileIllu} alt="illu"></img> :
                    <img className="box" src={Box} alt="box"></img>
                }
                </div>
            </div>
            <div className="context">
                <div className="title">
                    <h1>FAQ</h1>
                </div>
                <Content />
            </div>
        </main>
    );
}

export default Card;