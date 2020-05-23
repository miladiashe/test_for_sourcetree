import React from 'react';
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
    return<TodoTemplate><GlobalStyle/>
        <TodoInsert/>
        <TodoList/>
    </TodoTemplate>
};

export default App;
