import React, {ChangeEvent} from 'react';

type InputPropsType = {
    setTitle: (title: string) => void
    title: string
}

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);
    };
    return (
        <input value={props.title} onChange={onChangeHandler}/>
    );
};