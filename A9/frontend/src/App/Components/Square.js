import React from "react";

class Square extends React.Component {
    render() {
        var squareStyle = {
            height: 150,
            backgroundColor: this.props.color
        };

        return (
            <div style={squareStyle}>

            </div>
        );
    }
}

export default Square