import React, { Component } from "react";
import SitterIndexItem from "./sitter_index_item";

class SitterIndex extends React.Component {


  componentDidMount() {
    this.props.fetchSitters();
  }

  render() {
    const { sitters } = this.props;
    return (
        <div>
            <ul>
                {sitters.map((sitter, index) => <SitterIndexItem key={sitter.id} sitter={sitter} index={index} />)}
            </ul> 
        </div>
    );
  }
}

export default SitterIndex;
