import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {
  AppContainer,
  TopContainer,
  TopLeftContainer,
  SymbolHeading,
  ScoreContainer,
  ScoreText,
  Score,
  PlayingViewContainer,
  SymbolList,
  RulesButton,
  ResultsContainer,
  PlayersContainer,
  EachPlayerContainer,
  PlayerName,
  PlayerChoiceSymbol,
  PopupContainer,
  CloseButton,
  PopUpImage,
  PopUpBody,
} from './styledComponents'

import SymbolItem from '../SymbolItem'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  won: 'WON',
  lost: 'LOST',
  draw: 'DRAW',
}

class RockPaperScissors extends Component {
  state = {
    gameStatus: gameStatusConstants.inProgress,
    userChoice: '',
    gameChoice: '',
    score: 0,
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(choice => choice.id)
    const randomIndex = Math.floor(Math.random() * 3)
    return gameChoicesList[randomIndex]
  }

  setGameStatusWon() {
    this.setState(prevState => ({
      gameStatus: gameStatusConstants.won,
      score: prevState.score + 1,
    }))
  }

  setGameStatusLost() {
    this.setState(prevState => ({
      gameStatus: gameStatusConstants.lost,
      score: prevState.score - 1,
    }))
  }

  clickUserChoice = id => {
    this.setState(
      {userChoice: id, gameChoice: this.getGameChoice()},
      this.evaluateGame,
    )
  }

  clickPlayAgain = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  evaluateGame = () => {
    const {userChoice, gameChoice} = this.state

    if (userChoice === gameChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'ROCK') {
      if (gameChoice === 'PAPER') {
        this.setGameStatusLost()
      } else {
        this.setGameStatusWon()
      }
    } else if (userChoice === 'PAPER') {
      if (gameChoice === 'SCISSORS') {
        this.setGameStatusLost()
      } else {
        this.setGameStatusWon()
      }
    } else if (userChoice === 'SCISSORS') {
      if (gameChoice === 'ROCK') {
        this.setGameStatusLost()
      } else {
        this.setGameStatusWon()
      }
    }
  }

  renderGameInProgressView() {
    const {choicesList} = this.props

    return (
      <SymbolList>
        {choicesList.map(eachSymbolItem => (
          <SymbolItem
            key={eachSymbolItem.id}
            symbolDetails={eachSymbolItem}
            clickUserChoice={this.clickUserChoice}
          />
        ))}
      </SymbolList>
    )
  }

  renderGameWonView() {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props

    const userSelectedObject = choicesList.find(
      eachChoice => eachChoice.id === userChoice,
    )
    const gameSelectedObject = choicesList.find(
      eachChoice => eachChoice.id === gameChoice,
    )

    return (
      <ResultsContainer>
        <PlayersContainer>
          <EachPlayerContainer>
            <PlayerName>YOU</PlayerName>
            <PlayerChoiceSymbol
              src={userSelectedObject.imageUrl}
              alt="your choice"
            />
          </EachPlayerContainer>
          <EachPlayerContainer>
            <PlayerName>OPPONENT</PlayerName>
            <PlayerChoiceSymbol
              src={gameSelectedObject.imageUrl}
              alt="opponent choice"
            />
          </EachPlayerContainer>
        </PlayersContainer>
        <PlayerName resultText>YOU WON</PlayerName>
        <RulesButton
          type="button"
          onClick={this.clickPlayAgain}
          playAgainButton
        >
          PLAY AGAIN
        </RulesButton>
      </ResultsContainer>
    )
  }

  renderGameLostView() {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props

    const userSelectedObject = choicesList.find(
      eachChoice => eachChoice.id === userChoice,
    )
    const gameSelectedObject = choicesList.find(
      eachChoice => eachChoice.id === gameChoice,
    )

    return (
      <ResultsContainer>
        <PlayersContainer>
          <EachPlayerContainer>
            <PlayerName>YOU</PlayerName>
            <PlayerChoiceSymbol
              src={userSelectedObject.imageUrl}
              alt="your choice"
            />
          </EachPlayerContainer>
          <EachPlayerContainer>
            <PlayerName>OPPONENT</PlayerName>
            <PlayerChoiceSymbol
              src={gameSelectedObject.imageUrl}
              alt="opponent choice"
            />
          </EachPlayerContainer>
        </PlayersContainer>
        <PlayerName resultText>YOU LOSE</PlayerName>
        <RulesButton
          type="button"
          onClick={this.clickPlayAgain}
          playAgainButton
        >
          PLAY AGAIN
        </RulesButton>
      </ResultsContainer>
    )
  }

  renderGameDrawView() {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props

    const userSelectedObject = choicesList.find(
      eachChoice => eachChoice.id === userChoice,
    )
    const gameSelectedObject = choicesList.find(
      eachChoice => eachChoice.id === gameChoice,
    )

    return (
      <ResultsContainer>
        <PlayersContainer>
          <EachPlayerContainer>
            <PlayerName>YOU</PlayerName>
            <PlayerChoiceSymbol
              src={userSelectedObject.imageUrl}
              alt="your choice"
            />
          </EachPlayerContainer>
          <EachPlayerContainer>
            <PlayerName>OPPONENT</PlayerName>
            <PlayerChoiceSymbol
              src={gameSelectedObject.imageUrl}
              alt="opponent choice"
            />
          </EachPlayerContainer>
        </PlayersContainer>
        <PlayerName resultText>IT IS DRAW</PlayerName>
        <RulesButton
          type="button"
          onClick={this.clickPlayAgain}
          playAgainButton
        >
          PLAY AGAIN
        </RulesButton>
      </ResultsContainer>
    )
  }

  renderAppropriateView() {
    const {gameStatus} = this.state

    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.won:
        return this.renderGameWonView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state

    return (
      <AppContainer>
        <TopContainer>
          <TopLeftContainer>
            <SymbolHeading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </SymbolHeading>
          </TopLeftContainer>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreContainer>
        </TopContainer>
        <PlayingViewContainer>
          {this.renderAppropriateView()}
        </PlayingViewContainer>
        <PopupContainer>
          <Popup
            modal
            trigger={<RulesButton type="button">Rules</RulesButton>}
            closeOnEscape
            window
          >
            {close => (
              <PopUpBody>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpBody>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}

export default RockPaperScissors
