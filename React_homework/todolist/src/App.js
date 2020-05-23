import React, { useState } from 'react';
import styled, { createGlobalStyle }  from 'styled-components';
import TodoTemplate from "./component/TodoTemplate";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";

const GlobalStyle = createGlobalStyle`
  body{
  margin: 0;
  padding: 0;
  background: #e9ecef;
  }
`

const App = () =>{
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트의 기초 알아보기',
            checked: true,
        },
        {
            id: 2,
            text: '컴포넌트 스타일링해 보기',
            checked: true,
        },
        {
            id: 3,
            text: '일정 관리 앱 만들어 보기',
            checked: false,
        },
    ]);
    return(
        <TodoTemplate><GlobalStyle/>
        <TodoInsert/>
        <TodoList todos={todos} />
        </TodoTemplate>
    );
};

export default App;
