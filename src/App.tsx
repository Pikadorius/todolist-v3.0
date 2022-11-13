import React, {useEffect, useState} from 'react';
import './App.css';
import Todolist from './Components/Todolist/Todolist';
import Button from './Components/Button/Button';
import {v1} from 'uuid';
import todolist from './Components/Todolist/Todolist';

export type FilterType = 'all' | 'active' | 'completed'


export type TaskType = {
    id: string
    task: string
    isDone: boolean
}

type TasksDataType = {
    tasks: TaskType[]
    isOpen: boolean
    filter: FilterType
}

type TasksType = {
    [key: string]: TasksDataType

}

type TodolistType = {
    id: string
    title: string
}

function App() {
    const todolistId1 = v1();

    const [todolists, setTodolists] = useState<TodolistType[]>([
        // {id: todolistId1, title: "What to learn"}
    ])
    const [tasks, setTasks] = useState<TasksType>({
        // [todolistId1]: {
        //     tasks: [
        //         {id: v1(), task: 'JS', isDone: true},
        //         {id: v1(), task: 'React', isDone: false},
        //         {id: v1(), task: 'Redux', isDone: false},
        //     ],
        //     filter: 'all',
        //     isOpen: true
        // }
    })


    useEffect(()=>{
        const taskLocalData=localStorage.getItem('tasks')
        const todoListsLocalData=localStorage.getItem('todolists')
        if (taskLocalData && todoListsLocalData) {
            setTasks(JSON.parse(taskLocalData))
            setTodolists(JSON.parse(todoListsLocalData))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
        localStorage.setItem('todolists', JSON.stringify(todolists))
    },[todolists, tasks])

    // создание нового тудулиста
    const createNewTodolist = () => {
        const newId = v1();
        setTodolists([...todolists, {id: newId, title: ''}])
        setTasks({...tasks, [newId]: {tasks: [], isOpen: true, filter: 'all'}})
    }
    // названия новых тудулистов
    const setTodolistTitle = (todolistId: string, title: string) => {
        let todos = todolists.map(t => t.id === todolistId ? {...t, title: title} : {...t})
        setTodolists(todos)
    }
    // скрыть/показать таски
    const showTasks = (todolistID: string, isOpen: boolean) => {
        setTasks({...tasks, [todolistID]: {...tasks[todolistID], isOpen: !isOpen}})
    }

    const addNewTask = (todolistId: string, taskName: string) => {
        setTasks({
            ...tasks,
            [todolistId]: {
                ...tasks[todolistId],
                tasks: [{task: taskName, isDone: false, id: v1()}, ...tasks[todolistId].tasks]
            }
        })
    }

    const deleteTask = (todolistId: string, taskId: string) => {
        setTasks(
            {...tasks, [todolistId]:{...tasks[todolistId], tasks: tasks[todolistId].tasks.filter(t=>t.id!==taskId)}}
        )
    }



    return (
        <div className="App">
            {todolists.map(t => {
                let todoTasks = tasks[t.id].tasks;
                if (tasks[t.id].filter === 'active') {
                    todoTasks = todoTasks.filter(t => !t.isDone)
                }
                if (tasks[t.id].filter === 'completed') {
                    todoTasks = todoTasks.filter(t => t.isDone)
                }

                return <Todolist id={t.id}
                                 key={t.id}
                                 title={t.title}
                                 setTitle={setTodolistTitle}
                                 tasks={todoTasks}
                                 filter={tasks[t.id].filter}
                                 deleteTodolist={() => {
                                 }}
                                 addNewTask={addNewTask}
                                 deleteTask={deleteTask}
                                 changeTaskStatus={() => {
                                 }}
                                 isOpen={tasks[t.id].isOpen}
                                 setIsShowed={showTasks}/>
            })}
            <Button name={'Add new todolist'} onClick={createNewTodolist}/>
        </div>
    );
}

export default App;
