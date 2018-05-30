import React from "react"
import Game from "./game"

class Final12 extends React.Component {

render() {

    return (
        <div>
          <div className="groupstage-headline">
            <p><span> SEMIFINAL </span></p>
          </div>
          {this.props.final12.map((final12Data) => {

            return (<Game
                    addScore={this.props.addScore}
                    game={final12Data} />)
          })}

        </div>
    )
  }
}

    export default Final12
