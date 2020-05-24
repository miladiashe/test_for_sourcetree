import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {MdAdd} from "react-icons/md";

const TakeInput = styled.form`
  display: flex;
  background: #495057;
`;

const TextBox = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder{
    color: #dee2e6;
  }
  flex: 1;
`;
const Plus = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868296;
  color: white;
  padding-left:1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover{
    background: #adb5bd;
  }
`;

const TodoTnsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault()
        },
        [onInsert, value]
    )

    return(
        <TakeInput onSubmit={onSubmit}>
            <TextBox
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <Plus type="submit">
                <MdAdd />
            </Plus>
        </TakeInput>
    )
}

export default TodoTnsert