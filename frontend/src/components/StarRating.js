import React from 'react';

const StarRating = ({ score }) => {
  const fullStars = Math.floor(score); // Number of full stars
  const halfStars = score % 1 >= 0.5 ? 1 : 0; // Half star if applicable
  const emptyStars = 5 - fullStars - halfStars; // Remaining stars are empty

  const renderStars = () => {
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full-star">★</span>);
    }

    // Add half star
    if (halfStars > 0) {
      stars.push(<span key="half-star" className="star half-star">☆</span>);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty-star">☆</span>);
    }

    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
