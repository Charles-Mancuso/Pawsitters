import React, { Component } from "react";
import SitterIndexItem from "./sitter_index_item";
import NavBarContainer from "../nav_bar/nav_bar_container";

class SitterIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchSitters();
  }

  render() {
    const { sitters } = this.props;
    let sitterLis;
    if (sitters) {
      sitterLis = sitters.map((sitter, index) => <SitterIndexItem sitter={sitter} key={sitter.id} index={index} />)
    }
    
    return (
        <div>
          <NavBarContainer />
            <ul>
                {sitterLis}
            </ul> 
        </div>
    );
  }
}

export default SitterIndex;
