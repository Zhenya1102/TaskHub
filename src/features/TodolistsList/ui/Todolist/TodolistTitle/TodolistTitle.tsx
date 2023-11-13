import React, {useCallback} from 'react';
import {EditableSpan} from '../../../../../common/components';
import {IconButton} from '@mui/material';
import {Delete} from '@mui/icons-material';
import {TodolistDomainType, todolistsThunks} from '../../../model/todolists/todolistsSlice';
import {useActions} from '../../../../../common/hooks';



type Props = {
    todolist: TodolistDomainType;
};

export const TodolistTitle = ({todolist}:Props) => {

    const {removeTodolist, changeTodolistTitle} = useActions(todolistsThunks)

    const removeTodolistHandler = () => {
        removeTodolist(todolist.id);
    };

    const changeTodolistTitleHandler = useCallback(
        (title: string) => {
            changeTodolistTitle({id: todolist.id, title});
        },
        [todolist.id],
    );

    return (
        <h3>
            <EditableSpan value={todolist.title} onChange={changeTodolistTitleHandler}/>
            <IconButton onClick={removeTodolistHandler} disabled={todolist.entityStatus === 'loading'}>
                <Delete/>
            </IconButton>
        </h3>
    );
};

