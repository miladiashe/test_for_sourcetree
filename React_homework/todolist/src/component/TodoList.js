import React from 'react';
import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const TDL = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`

const TodoList = () =>{
    return (
        <TDL>
            <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/>
        </TDL>
    );
};

export default TodoList;