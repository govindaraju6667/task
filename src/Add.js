import React, { useState } from "react";
// import "./Rating.css";
import { AiFillStar } from "react-icons/ai";

const Rating = () => {
  const [rating, setRating] = useState(0);
  function handleText() {
    switch (rating) {
      case 1:
        return (
          <p>
            We're sorry to hear that you had a bad experience.We would like to
            learn more about what happened and how we can make things right.
          </p>
        );
      case 2: 
        return (
          <p>
            We apologize for the inconvenience you experienced. We appreciate
            your feedback and would like to work with you to address any issues.
          </p>
        );
      case 3:
        return (
          <p>
            Thank you for your feedback. We're sorry to hear that your
            experience wasn't perfect. We would love to hear more about your
            corncerns to see how we can improve.{" "}
          </p>
        );
      case 4:
        return (
          <p>
            Thank you for your positive feedback! We're glad to know that you
            had a great experience and we appreciate your support.
          </p>
        );
      case 5:
        return (
          <p>
            Excellent! We're thrilled to hear you had such a positive
            experience. Thank you for choosing our platform.
          </p>
        );
    }
  }

  return (
    <div className="ratingStar">
      <h1 className="h1-rate">
        How many stars would you give to our Online Code Editor?
      </h1>
      <div className="star">
        {Array(5)
          .fill()
          .map((_, index) =>
            rating >= index + 1 ? (
              <AiFillStar
                style={{ color: "#ffbf00", width: "80px", height: "80px" }}
                onClick={() => setRating(index + 1)}
              />
            ) : (
              <AiFillStar
                style={{ color: "lavender", width: "80px", height: "80px" }}
                onClick={() => setRating(index + 1)}
              />
            )
          )}
      </div>
      <div>
        <p className="rating-content">{handleText()}</p>
      </div>
    </div>
  );
};

export default Rating;
