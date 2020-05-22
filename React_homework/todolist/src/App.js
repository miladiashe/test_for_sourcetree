import React from 'react';
import styled, { createGlobalStyle }  from 'styled-components';
import TodoTemplate from "./component/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body{
  margin: 0;
  padding: 0;
  background: #e9ecef;
  }
`

const App = () =>{
    return<TodoTemplate><GlobalStyle/>Todo 앱을 만들자!</TodoTemplate>
};

export default App;
