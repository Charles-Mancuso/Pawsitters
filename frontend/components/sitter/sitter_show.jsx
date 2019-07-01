import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class SitterShow extends React.Component {

    componentDidMount() {
        this.props.fetchSitter(this.props.match.params.id)
    }


    render() {
        const { sitter } = this.props
        if (!sitter) return null;
                               
        return (
            <div>
                <h1>{sitter.title}</h1>
                <h3>hi</h3>
            </div>
        )
    }

}

export default SitterShow;