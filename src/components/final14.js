import React from "react"
import Game from "./game"

  class Final14 extends React.Component {

render() {
    return (
        <div>
          <div className="groupstage-headline">
            <p><span> KVARTSFINAL </span></p>
          </div>
          {this.props.final14.map((final14Data) => {

            return (<Game
                    addScore={this.props.addScore}
                    game={final14Data} />)
          })}

        </div>
    )
  }
}

    export default Final14
