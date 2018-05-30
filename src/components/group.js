import React from "react"
import Game from "./game"
import "./group.css"

class Group extends React.Component {

  render() {

    const { groups, games, addScore } = this.props
    const group = groups[this.props.match.params.groupId]

    return (
      <div>
        <div>
          { games.map((gameData) => {
            if (gameData.group === this.props.match.params.groupId)
            {
             return (<Game
                    addScore = {addScore}
                    game= {gameData}
                     />)
          }
        })}
        </div>
        <div className="table-container">
          { group.map((tableData) => {
             return (
                    <div className="table-row">
                      <div className="table-item country">{tableData.country}</div>
                      <div className="table-item">{tableData.playedGames}</div>
                      <div className="table-item">{tableData.wins}</div>
                      <div className="table-item">{tableData.draws}</div>
                      <div className="table-item">{tableData.losts}</div>
                      <div className="table-item">{tableData.totOwnScore}</div>
                      <div>–</div>
                      <div className="table-item">{tableData.totAgainstScore}</div>
                      <div className="table-item">{tableData.points}</div>
                    </div>
                  )
        })}
        </div>
      </div>
    )

  }
}

export default Group
