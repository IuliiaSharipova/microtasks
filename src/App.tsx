import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from './components/Button';

function App() {
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
                    <Button name={'MyYouTubeChanel-1'} />
                    <Button name={'MyYouTubeChanel-2'} />
        </div>
    );
}

export default App;


