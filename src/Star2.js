import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const StarRating = () => {
  const [selectedStar, setSelectedStar] = useState(null);

  // Function to handle star click
  const handleStarClick = (rating) => {
    // Toggle the selected star if clicked again
    setSelectedStar((prevRating) => (prevRating === rating ? null : rating));
  };

  // Function to get the message based on the selected star rating
  const getMessage = (rating) => {
    switch (rating) {
      case 1:
        return "Terrible - 1 star";
      case 2:
        return "Bad - 2 stars";
      case 3:
        return "Average - 3 stars";
      case 4:
        return "Good - 4 stars";
      case 5:
        return "Excellent - 5 stars";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="star">
        {Array(5)
          .fill()
          .map((_, index) => (
            <div key={index}>
              <AiFillStar
                style={{
                  color: selectedStar >= index + 1 ? "purple" : "lavender",
                  fontSize: "50px",
                }}
                onClick={() => handleStarClick(index + 1)}
              />
              <span style={{ marginLeft: "5px" }}>
                {/* {selectedStar === index + 1 ? getMessage(index + 1) : ''} Display the message for the selected rating */}
              </span>
            </div>
          ))}
        <div></div>
      </div>
      <strong>Selected Rating:</strong>{" "}
      {selectedStar ? getMessage(selectedStar) : "No rating selected"}
    </>
  );
};

export default StarRating;
