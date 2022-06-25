import React /* {MouseEvent}*/ from 'react';
import './App.css';
import {Button} from './components/Button';

function App() {
    const Button1For = (subscriber: string, age: number) => {
        console.log(`${subscriber}, ${age}`)
    };
    const Button2For = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3For = () => {
        console.log('I am stupid button')
    };
    /*const onClickHandler = (name: string) => {
        console.log(name)
         }*/
    /*const for1=()=>{
        console.log(100200)
    }
    const for2=(n:number)=>{
        console.log(n)
    }*/

    return (
        <div>
            {/*          <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Vasya')}>MyYouTubeChanel-1
            </button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Ilia')}>MyYouTubeChanel-2
            </button>*/}
            {/*  <button onClick={for1}>1</button>
            <button onClick={()=>(for2(100200))}>2</button>*/}
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1For('I am Vasya', 21)}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2For('I am Ilia')}/>
            <Button name={'Delete'} callBack={Button3For}/>
        </div>
    );
}

export default App;


