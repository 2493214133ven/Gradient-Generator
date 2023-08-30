import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppGradientContainer,
  AppGenerateHeader,
  DirectionEle,
  UnOderLIstContainer,
  LabelAndInputContainer,
  LabelAndInputCards,
  LabelEle,
  InputEle,
  GenerateBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    colorPicker1: '#8ae323',
    colorPicker2: '#014f7b',
    direction: gradientDirectionsList[0].value,
    linearGradient: `to ${gradientDirectionsList[0].value}, #8ae323,#014f7b`,
  }

  onClickDirectionId = value => {
    this.setState({direction: value})
  }

  onchangePikerOne = e => {
    this.setState({colorPicker1: e.target.value})
  }

  onchangePikerTwo = e => {
    this.setState({colorPicker2: e.target.value})
  }

  onClickChangeBgColor = () => {
    const {direction, colorPicker1, colorPicker2} = this.state
    this.setState({
      linearGradient: `to ${direction}, ${colorPicker1}, ${colorPicker2}`,
    })
  }

  render() {
    const {colorPicker1, colorPicker2, direction, linearGradient} = this.state
    console.log(linearGradient)
    return (
      <AppGradientContainer
        data-testid="gradientGenerator"
        linearGradient={linearGradient}
      >
        <AppGenerateHeader>Generate a CSS color Gradient</AppGenerateHeader>
        <DirectionEle>Choose Direction</DirectionEle>
        <UnOderLIstContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              eachDirectionDetails={eachDirection}
              activeBtn={this.onClickDirectionId}
              isActive={direction === eachDirection.value}
            />
          ))}
        </UnOderLIstContainer>
        <DirectionEle>Pick the Colors</DirectionEle>
        <LabelAndInputContainer>
          <LabelAndInputCards>
            <LabelEle htmlFor="color">{colorPicker1}</LabelEle>
            <InputEle
              id="color"
              value={colorPicker1}
              onChange={this.onchangePikerOne}
              type="color"
            />
          </LabelAndInputCards>
          <LabelAndInputCards>
            <LabelEle htmlFor="color">{colorPicker2}</LabelEle>
            <InputEle
              onChange={this.onchangePikerTwo}
              id="color"
              value={colorPicker2}
              type="color"
            />
          </LabelAndInputCards>
        </LabelAndInputContainer>
        <GenerateBtn type="button" onClick={this.onClickChangeBgColor}>
          Generate
        </GenerateBtn>
      </AppGradientContainer>
    )
  }
}

export default GradientGenerator
