import React, {useState} from 'react';
import {FilterComponent} from './components/FilterComponent';

export type FilterType = 'All' | 'Dollars' | 'RUBLS'

function AppFilter() {
    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('All')
    let currentMoney = money;

    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'Dollars')
    } else {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'RUBLS')
    }

 const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    };

    return (
        < FilterComponent currentMoney={currentMoney} money={money} onClickFilterHandler={onClickFilterHandler}/>
    );
}

export default AppFilter;


