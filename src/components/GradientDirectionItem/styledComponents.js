// Style your elements here
import styled from 'styled-components'

export const ListContainer = styled.li`
  list-style-type: none;
  margin: 3px;
  font-family: 'Roboto';
  border: none;
`

export const DirectionBtn = styled.button`
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  background-color: #ffffff;
  color: #334155;
  width: 80px;
  padding: 10px;
  opacity: ${props => (props.active ? 1 : 0.5)};
`
