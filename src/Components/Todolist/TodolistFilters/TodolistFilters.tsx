import React, {useState} from 'react';
import Button from '../../Button/Button';
import {FilterType} from "../../../App";
import s from './TodolistFilters.module.css'

type TodolistFiltersType = {
    filter: FilterType
    changeFilter: (filter: FilterType)=>void
}

const TodolistFilters = (props: TodolistFiltersType) => {
    const [filter, setFilter] = useState<FilterType>(props.filter)

    const changeFilter = (filter: FilterType)=>{
       return  (
           ()=>{
               setFilter(filter)
               props.changeFilter(filter)
           }
       )
    }
    return (
        <div className={s.wrapper}>
            <Button active={props.filter==='all'} name={'All'} onClick={changeFilter('all')}/>
            <Button active={props.filter==='completed'} name={'Completed'} onClick={changeFilter('completed')}/>
            <Button active={props.filter==='active'} name={'Active'} onClick={changeFilter('active')}/>
        </div>
    );
};

export default TodolistFilters;