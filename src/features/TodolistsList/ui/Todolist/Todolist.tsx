import React, {useCallback, useEffect} from 'react';
import {
    TodolistDomainType
} from 'features/TodolistsList/model/todolists/todolistsSlice';
import {tasksThunks} from 'features/TodolistsList/model/tasks/tasksSlice';
import {useActions} from 'common/hooks';
import {AddItemForm} from 'common/components';
import {TaskType} from '../../api/tasks/tasksApi.types';
import {FilterTasksButtons} from './FilterTasksButtons/FilterTasksButtons';
import {Tasks} from './Tasks/Tasks';
import {TodolistTitle} from './TodolistTitle/TodolistTitle';

type Props = {
    todolist: TodolistDomainType;
    tasks: TaskType[];
};

export const Todolist = React.memo(function ({todolist, tasks}: Props) {
    const {fetchTasks, addTask} = useActions(tasksThunks);

    useEffect(() => {
        fetchTasks(todolist.id);
    }, []);

    const addTaskCallback = useCallback(
        (title: string) => {
            return addTask({title, todolistId: todolist.id}).unwrap();
        },
        [todolist.id],
    );

    return (
        <div>
            <TodolistTitle todolist={todolist}/>
            <AddItemForm addItem={addTaskCallback} disabled={todolist.entityStatus === 'loading'}/>
            <Tasks todolist={todolist} tasks={tasks}/>
            <div style={{paddingTop: '10px'}}>
                <FilterTasksButtons todolist={todolist}/>
            </div>
        </div>
    );
});
