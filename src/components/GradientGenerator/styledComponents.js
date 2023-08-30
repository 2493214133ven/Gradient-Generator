// Style your elements here
import styled from 'styled-components'

export const AppGradientContainer = styled.div`
  background-image: linear-gradient(${props => props.linearGradient});
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`
export const AppGenerateHeader = styled.h1`
  font-size: 36px;
  font-weight: bolder;
  color: #ededed;
`
export const DirectionEle = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #ededed;
`
export const UnOderLIstContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`
export const LabelAndInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
  margin-top: 20px;
  margin-bottom: 32px;
`
export const LabelAndInputCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LabelEle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #ededed;
  margin-bottom: 16px;
`
export const InputEle = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 80px;
  height: 46px;
`
export const GenerateBtn = styled.button`
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 000;
  background-color: #00c9b7;
  color: #1e293b;
  width: 120px;
  padding: 12px;
`
