import React, { Component } from "react";
import SitterIndexItem from "./sitter_index_item";

class SitterIndex extends Component {
  componentDidMount() {
    this.props.fetchSitters();
  }

  render() {
    const { sitters } = this.props;

    return (
        <div>
            <ul>
                {sitters.map(sitter => <SitterIndexItem key={sitter.id} sitter={sitter} />)}
            </ul> 
        </div>
    );
  }
}

export default SitterIndex;
