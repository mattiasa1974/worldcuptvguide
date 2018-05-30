import React from "react"
import "./game.css"

class Game extends React.Component {

  state = {
    homeScore: null,
    awayScore: null
  }

  constructor(props) {
    super(props);

    this.state = {
      homeScore: this.props.game.homeScore,
      awayScore: this.props.game.awayScore
    }
  }

  handleChangeHomeScore = event => {
    this.setState({
      homeScore: event.target.value
    })
    if (this.state.awayScore !== null) {
      this.props.addScore(this.props.game.matchId,
        this.props.game.awayTeam,
        this.state.awayScore,
        this.props.game.homeTeam,
        event.target.value)
    }

  }

  handleChangeAwayScore = event => {
    this.setState({
      awayScore: event.target.value
    })

    if (this.state.homeScore !== null) {
      this.props.addScore(this.props.game.matchId,
        this.props.game.awayTeam,
        event.target.value,
        this.props.game.homeTeam,
        this.state.homeScore)
    }
  }

  render() {
    const { game } = this.props

    return (
      <div className="gamebox">
        <div className="game-container">
          <div className="date">
            <p>{game.date}</p>
          </div>
          <div className="time">
            <p>{game.time}</p>
          </div>
          <div className="match">
            <p > {game.homeTeam} – {game.awayTeam}</p>
          </div>
          <div className="logo">
            <img className="logotype" src={game.logo} />
          </div>
          <div className="group">
            <p>{game.grupp}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Game
