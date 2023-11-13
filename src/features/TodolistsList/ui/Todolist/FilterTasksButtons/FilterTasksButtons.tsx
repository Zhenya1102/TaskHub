import React from 'react';
import {Button} from '@mui/material';
import {useActions} from '../../../../../common/hooks';
import {FilterValuesType, TodolistDomainType, todolistsActions} from '../../../model/todolists/todolistsSlice';


type Props = {
    todolist: TodolistDomainType;
}

export const FilterTasksButtons = ({todolist}: Props) => {

    const {changeTodolistFilter} = useActions(todolistsActions);

    const changeTodolistFilterHandler = (filter: FilterValuesType) => {
        changeTodolistFilter({filter, id: todolist.id})
    }

    return (
        <>
            <Button
                variant={todolist.filter === 'all' ? 'outlined' : 'text'}
                onClick={() => changeTodolistFilterHandler('all')}
                color={'inherit'}
            >
                All
            </Button>
            <Button
                variant={todolist.filter === 'active' ? 'outlined' : 'text'}
                onClick={() => changeTodolistFilterHandler('active')}
                color={'primary'}
            >
                Active
            </Button>
            <Button
                variant={todolist.filter === 'completed' ? 'outlined' : 'text'}
                onClick={() => changeTodolistFilterHandler('completed')}
                color={'secondary'}
            >
                Completed
            </Button>
        </>
    );
};

