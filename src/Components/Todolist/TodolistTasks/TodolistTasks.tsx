import React, {ChangeEvent, useState} from 'react';
import {TaskType} from '../../../App';
import s from './TodolistTasks.module.css'
import Button from '../../Button/Button';

type TodolistTasksType = {
    tasks: TaskType[]
    isOpen: boolean
    addNewTask: (taskTitle: string) => void
    deleteTask: (taskId:string) => void
    changeTaskStatus: (taskId: string, isDone: boolean)=>void
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
                <input placeholder={'Add new task'} value={inputTitle} onChange={(e) => setInputTitle(e.currentTarget.value)}/>
                <Button name={'Add task'} onClick={addNewTask}/>
            </div>
            {props.isOpen ?
                <ul className={s.listWrapper}>
                    {props.tasks.map(t => {

                        const deleteTask = () => {
                            props.deleteTask(t.id)
                        }

                        const changeTaskStatus = (e:ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(t.id, e.currentTarget.checked)
                        }


                        return (
                            <div key={t.id} className={s.specLi}>
                                <li>{t.task}<input type={'checkbox'} checked={t.isDone} onChange={changeTaskStatus}/>
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