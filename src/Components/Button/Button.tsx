import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    name: string
    onClick: ()=>void
    active?: boolean
}

const Button: React.FC<ButtonType> = ({name,onClick, active}) => {

    return (
        <div>
            <button className={active? `${s.active} ${s.btn}` : s.btn} onClick={onClick}>{name}</button>
        </div>
    );
};

export default Button;