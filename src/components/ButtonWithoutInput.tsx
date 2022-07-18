import React from 'react';

type ButtonWithoutInputType = {
    name: string
    callBack: () => void
}

export const ButtonWithoutInput = (props: ButtonWithoutInputType) => {
    return (
        <button onClick={() => props.callBack()}>{props.name}</button>
    );
};
