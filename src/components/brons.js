import React from "react"
import Game from "./game"

class Brons extends React.Component {

render() {

    return (
        <div>
          <div className="groupstage-headline">
            <p><span> BRONSMATCH </span></p>
          </div>
          {<Game
            addScore={this.props.addScore}
            game={this.props.brons} />}

        </div>
    )
  }
}

    export default Brons
