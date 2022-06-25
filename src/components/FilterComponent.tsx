import React from 'react';
import {FilterType} from '../AppFilter';

type moneyComponentType = {
    money: Array<moneyType>
    currentMoney: Array<moneyType>
    onClickFilterHandler:(name:FilterType) => void
}
type moneyType = {
    banknotes: string
    value: number
    number: string
}

export const FilterComponent = (props: moneyComponentType) => {
    return(
    <>
        <ul>
            {props.currentMoney.map((mon: moneyType, id: number) => {
                return (
                    <li key={id}>
                        <span>{mon.banknotes} </span>
                        <span>{mon.value} </span>
                        <span>{mon.number}</span>
                    </li>
                )
            })}
        </ul>
        <div style={{marginLeft: '35px'}}>
            <button onClick={() => props.onClickFilterHandler('All')}>
                All
            </button>
            <button onClick={() => props.onClickFilterHandler('Dollars')}>
                Dollars
            </button>
            <button onClick={() => props.onClickFilterHandler('RUBLS')}>
                Rubles
            </button>
        </div>
    </>
    )
}