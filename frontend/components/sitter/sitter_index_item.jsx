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
      <li className="sitter-index-container">
        <div className="all-info-container">
          <div className="sitter-index-img-container">
            <img className="sitter-index-img" src={sitter.image_url}/>
          </div>
          <div className="sitter-index-info-container">
            <div>
              <span className="indexnum">{this.props.index + 1}. </span>
              <span><Link to={`/sitters/${sitter.id}`} className="sitter-index-name">{sitter.name}</Link></span>
            </div>
            <span className="sitter-index-title">{sitter.title}</span>
            <span className="sitter-index-location">{sitter.city}, {sitter.state}, {sitter.zip}</span>
          </div>
          <div className="sitter-index-price-container">
            <span className="pricewords">from</span>
            <span className="sitter-index-price">${sitter.boarding_price}</span>
            <span className="pricewords">per night</span>
          </div>
        </div>
      </li>
    );
  }
}

export default SitterIndexItem;
