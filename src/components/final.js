import React from "react"
import Game from "./game"

class Final extends React.Component {

 render() {
    return (
        <div>
          <div className="groupstage-headline">
            <p><span> FINAL </span></p>
          </div>
          {<Game
            addScore={this.props.addScore}
            game={this.props.final} />}

        </div>
    )
  }
}

    export default Final
