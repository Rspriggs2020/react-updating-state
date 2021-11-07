// Code ClickityClick Component Here
import React from "react";

class ClickityClick extends React.Component {
    constructor(){
        super();

        this.state = {
            hasBeenClicked: false,
        };
    }

    handleCLick = () => {
        this.setState({
            hasBeenClicked: true,
        },  console.log(this.state.hasBeenClicked))   
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : "not"}</p>
                <button onClick={this.handleCLick}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick;