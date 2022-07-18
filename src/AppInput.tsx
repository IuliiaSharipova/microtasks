import React, {useState} from 'react';
import {FullInput} from './components/FullInput';
import {Input} from './components/Input';
import {Button} from './components/Button';
import {ButtonWithoutInput} from './components/ButtonWithoutInput';

function AppInput() {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    );
    const [title, setTitle] = useState('');

    const addMessageToState = (title: string) => {
        setMessage([{message: title}, ...message]);
    };
    const callBackHandler = () => {
        addMessageToState(title);
        setTitle('');
    };
    return (
        <div className={'App'}>
            {/*<FullInput addMessageToState={addMessageToState}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <ButtonWithoutInput name={'+'} callBack={callBackHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                );
            })}
        </div>
    );
}

export default AppInput;