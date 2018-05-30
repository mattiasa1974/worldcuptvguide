import React from "react"
import Game from "./game"

class Final18 extends React.Component {

render() {

    return (
        <div>
          <div className="groupstage-headline">
            <p><span> ÅTTONDELSFINAL </span></p>
          </div>
          {this.props.final18.map((final18Data) => {

            return (<Game
                    addScore={this.props.addScore}
                    game={final18Data} />)
          })}

        </div>
    )
  }
}

    export default Final18
