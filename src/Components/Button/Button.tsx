import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    name: string
    onClick: ()=>void
}

const Button: React.FC<ButtonType> = ({name,onClick}) => {

    return (
        <div>
            <button className={s.btn} onClick={onClick}>{name}</button>
        </div>
    );
};

export default Button;