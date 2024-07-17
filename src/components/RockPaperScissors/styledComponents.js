import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const TopLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SymbolHeading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  font-family: 'Bree Serif';
  margin-block: 0;
`

export const ScoreContainer = styled.div`
  flex-grow: 1;
  max-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px 20px;
`

export const ScoreText = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 22px;
  font-weight: bold;
  margin: 0;
`

export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: bold;
  margin: 10px 0 0 0;
`

export const PlayingViewContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const SymbolList = styled.ul`
  width: 100%;
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`

export const RulesButton = styled.button`
  align-self: ${props => (props.playAgainButton ? 'center' : 'flex-end')};
  background-color: #ffffff;
  border: none;
  border-radius: ${props => (props.playAgainButton ? '10px' : '5px')};
  color: #223a5f;
  font-family: 'Bree Serif';
  padding: ${props => (props.playAgainButton ? '15px 40px' : '10px 20px')};
  cursor: pointer;
`

export const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayersContainer = styled.div`
  display: flex;
  gap: 30px;
`

export const EachPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayerName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: ${props => (props.resultText ? '24px' : '20px')};
`

export const PlayerChoiceSymbol = styled.img`
  width: 150px;
  height: 150px;
`

export const PopupContainer = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PopUpBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: lightgray;
  padding: 10px;
  margin-bottom: 10px;
`

export const PopUpImage = styled.img`
  width: 90%;
  align-self: center;
  margin-bottom: 10px;
`
