import React from 'react';
import styled, { createGlobalStyle }  from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
  margin: 0;
  padding: 0;
  background: #e9ecef;
  }
`

const App = () =>{
    return<div><GlobalStyle/>Todo 앱을 만들자!</div>
};

export default App;
