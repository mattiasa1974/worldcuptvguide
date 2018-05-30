import React from "react"
import GroupNavigationscontainer from "./groupnavigationcontainer"
import Gametable from "./gametable"
import Group from "./group"

class Maincontainer extends React.Component {

  constructor(props) {
    super(props)

  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  render() {
    const groups = this.props.games.map(game => game.group)
    const uniqueGroups = groups.filter( this.onlyUnique )

    return (
      <div>
        <div>Maincontainer</div>

        <GroupNavigationscontainer games={this.props.games} groups={uniqueGroups}/>
        <Group A={groupA} />

        <Game game={first} />
      </div>
    )
  }
}

export default Maincontainer
