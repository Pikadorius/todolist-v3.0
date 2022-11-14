import React, {useState} from 'react';
import s from './TodolistTitle.module.css'
import Button from '../../Button/Button';

type TodolistTitleType = {
    title: string
    isOpen: boolean
    setOpen: (isOpen: boolean) => void
    setTitle: (title: string) => void
    deleteTodolist: ()=>void
}

const TodolistTitle = (props: TodolistTitleType) => {

    // локальный стейт для инпута Названия тудулиста
    const [inputTitle, setInputTitle] = useState<string>('')
    // колбэк, проверяющий не пустой ли инпут и сетающий название тудулиста по нажатию Enter
    const setTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (inputTitle.trim() && e.key === "Enter") {
            props.setTitle(inputTitle)
        }
    }



    return (
        <div>
            <Button name={'Delete todo'} onClick={props.deleteTodolist}/>
            <div className={s.wrapper}>
                {props.title === '' ? <input placeholder={'Enter title and press enter'} value={inputTitle} onChange={(e) => setInputTitle(e.currentTarget.value)}
                                             onKeyDown={setTitle}/> : <h3>{props.title}</h3>}
                <Button name={props.isOpen ? 'Hide' : 'Show'} onClick={() => props.setOpen(props.isOpen)}/>
            </div>
        </div>
    );
};

export default TodolistTitle;