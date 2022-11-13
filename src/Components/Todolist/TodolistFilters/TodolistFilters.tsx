import React from 'react';
import Button from '../../Button/Button';

const TodolistFilters = () => {
    return (
        <div>
            <Button name={'All'} onClick={()=>{}}/>
            <Button name={'Completed'} onClick={()=>{}}/>
            <Button name={'Active'} onClick={()=>{}}/>
        </div>
    );
};

export default TodolistFilters;