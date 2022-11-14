import React from 'react';
import {FilterType, TaskType} from '../../App';
import s from './Todolist.module.css'
import TodolistTitle from './TodolistTitle/TodolistTitle';
import TodolistTasks from './TodolistTasks/TodolistTasks';
import TodolistFilters from './TodolistFilters/TodolistFilters';

type TodolistType = {
    id: string
    title: string
    tasks: TaskType[]
    filter: FilterType
    changeFilter: (filter: FilterType)=>void
    deleteTodolist: (todolistId:string)=>void
    addNewTask: (todolistId:string, taskTitle: string)=>void
    deleteTask: (todolistId: string, taskId: string)=>void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean)=>void
    isOpen: boolean
    setIsShowed: (todolistId: string, isOpen:boolean)=>void
    setTitle: (todolistId: string, title: string)=>void
}

const Todolist = (props: TodolistType) => {

    const setOpened=(isOpen: boolean)=> {
        props.setIsShowed(props.id, isOpen)
    }

    const setTitle = (title: string) => {
        props.setTitle(props.id, title)
    }

    const addNewTask=(taskTitle: string)=> {
        props.addNewTask(props.id, taskTitle)
    }

    const deleteTask = (taskId: string) => {
        props.deleteTask(props.id, taskId);
    }

    const deleteTodolist = () => {
        props.deleteTodolist(props.id);
    }

    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        props.changeTaskStatus(props.id, taskId, isDone);
    }


    return (
        <div className={s.wrapper}>
            <TodolistTitle title={props.title} isOpen={props.isOpen} setOpen={setOpened} setTitle={setTitle} deleteTodolist={deleteTodolist}/>
            <TodolistTasks tasks={props.tasks} isOpen={props.isOpen} addNewTask={addNewTask} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus}/>
            <TodolistFilters filter={props.filter} changeFilter={props.changeFilter}/>
        </div>
    );
};

export default Todolist;