import {ListItem, GameButton, GameImageItem} from './styledComponents'

const SymbolItem = props => {
  const {symbolDetails, clickUserChoice} = props
  const {id, imageUrl} = symbolDetails

  const onClickChoice = () => {
    clickUserChoice(id)
  }

  return (
    <ListItem>
      <GameButton
        type="button"
        onClick={onClickChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <GameImageItem src={imageUrl} alt={id} />
      </GameButton>
    </ListItem>
  )
}

export default SymbolItem
