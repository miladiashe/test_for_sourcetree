import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import styled from "styled-components";

const TDLI = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + &{
    border-top: 1px solid #dee2e6;
  }
`;
const Checkbox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  .text{
    margin-left: 0.5rem;
    flex: 1;
  }
  &:checked {
    svg{
      color: #228cf;
    }
    .text{
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const TodoListItem = () => {
  return(
      <TDLI>
          <Checkbox>
              <MdCheckBoxOutlineBlank/>
              <div classname="text">할 일</div>
          </Checkbox>
          <Remove>
              <MdRemoveCircleOutline/>
          </Remove>
      </TDLI>
  )
};

export default TodoListItem;