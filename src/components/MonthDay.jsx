import React from 'react';
import styled from "styled-components";


const Day = styled.td`
  display: flex;
  color: #f98909;
  padding: 10px;
  background-color: white;
  font-weight: 800;
  opacity: 0.7;
  box-shadow: -1px -1px #f9a440, inset -1px -1px 0 0 #f9a440;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;

const MonthDay = ({children}) => {
  return (
    <Day>
      {children}
    </Day>
  )
}


export default MonthDay;