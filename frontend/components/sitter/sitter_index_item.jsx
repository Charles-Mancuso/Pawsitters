import React from "react";
import { Link } from "react-router-dom";

class SitterIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  


  render() {
    const { sitter } = this.props;
    if (!sitter) return null;
    return (
      <li>
        <img src={sitter.image_url}/>
        <span>{this.props.index + 1}. </span>
        <Link to={`/sitters/${sitter.id}`}>{sitter.name}</Link>
        <br />
        <span>{sitter.title}</span>
        <br />
        <span>{sitter.city}, {sitter.state}, {sitter.zip}</span>
        <br />
        <span>from</span>
        <br />
        <span>${sitter.boarding_price}</span>
        <br />
        <span>per night</span>
      </li>
    );
  }
}

export default SitterIndexItem;
