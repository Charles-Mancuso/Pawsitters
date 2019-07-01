import React from "react";
import { Link } from "react-router-dom";

const SitterIndexItem = ({ sitter }) => (
  <li>
    <Link to={`/sitters/${sitter.id}`}>
      <span>{sitter.id}</span>
      <span>{sitter.city}</span>
      <span>{sitter.state}</span>
    </Link>
  </li>
);

export default SitterIndexItem;
