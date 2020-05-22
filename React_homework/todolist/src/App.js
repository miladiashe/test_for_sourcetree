import React from 'react';
import styled, { createGlobalStyle }  from 'styled-components';
import TodoTemplate from "./component/TodoTemplate";
import TodoInsert from "./component/TodoInsert";

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
    </TodoTemplate>
};

export default App;
