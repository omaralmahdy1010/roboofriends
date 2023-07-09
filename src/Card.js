import React from "react";

class Card extends React.Component{
    render() {
        return(
            <div className="bg-blue bw2 dib br3 ma2 tc grow pa3 shadow-5">
              <img src={`https://robohash.org/${this.props.id}?200x200`} alt="robot" />
              <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
              </div>
            </div>
        )
    }
}


export default Card;