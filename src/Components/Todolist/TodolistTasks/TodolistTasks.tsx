import React, {useState} from 'react';
import {TaskType} from '../../../App';
import s from './TodolistTasks.module.css'
import Button from '../../Button/Button';

type TodolistTasksType = {
    tasks: TaskType[]
    isOpen: boolean
    addNewTask: (taskTitle: string) => void
    deleteTask: (taskId:string) => void
}

const TodolistTasks = (props: TodolistTasksType) => {

    const [inputTitle, setInputTitle] = useState<string>('')
    const addNewTask = () => {
        if (inputTitle.trim()) {
            props.addNewTask(inputTitle)
            setInputTitle('')
        }
    }

    return (
        <div>
            <div>
                <input value={inputTitle} onChange={(e) => setInputTitle(e.currentTarget.value)}/>
                <Button name={'Add task'} onClick={addNewTask}/>
            </div>
            {props.isOpen ?
                <ul className={s.listWrapper}>
                    {props.tasks.map(t => {

                        const deleteTask = () => {
                            props.deleteTask(t.id)
                        }

                        return (
                            <div key={t.id} className={s.specLi}>
                                <li>{t.task}<input type={'checkbox'} checked={t.isDone}/>
                                </li>
                                <Button name={'x'} onClick={deleteTask}/>
                            </div>
                        )
                    })}
                </ul> : <div>List closed</div>}
        </div>
    );
};

export default TodolistTasks;