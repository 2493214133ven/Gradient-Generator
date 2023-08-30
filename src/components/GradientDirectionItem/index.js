// Write your code here
import {ListContainer, DirectionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirectionDetails, activeBtn, isActive} = props
  const {displayText, value} = eachDirectionDetails
  const onClickBtn = () => {
    activeBtn(value)
  }

  return (
    <ListContainer>
      <DirectionBtn type="button" active={isActive} onClick={onClickBtn}>
        {displayText}
      </DirectionBtn>
    </ListContainer>
  )
}

export default GradientDirectionItem
