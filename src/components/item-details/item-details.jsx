import React from "react";
import "./item-details.css";

const ItemDetails = ({ image, itemDetails, children }) => {
  return (
    <div className="person-details card">
      <img className="person-image" src={image} alt={itemDetails.name} />
      <div className="card-body">
        <h4>{itemDetails.name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { itemDetails });
          })}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetails;
