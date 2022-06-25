import React /* {MouseEvent}*/, {useState} from 'react';
import './App.css';

/*import {Button} from './components/Button';*/

function App() {
    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickHandler2 = () => {
        setA(0)
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    );
}

export default App;


