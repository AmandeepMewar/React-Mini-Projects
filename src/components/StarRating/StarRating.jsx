import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { StarRatingStyle } from "./StarRatingStyle";

export default function StartRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (index) => {
        setRating(index);
    };

    const handleMouseEnter = (index) => {
        setHover(index);
    };

    const handleMouseLeave = () => {
        setHover(rating);
    };

    return (
        <StarRatingStyle>
            <div className="star-rating">
                {[...Array(noOfStars)].map((star, index) => {
                    index += 1;
                    return (
                        <FaStar
                            key={index}
                            className={
                                index <= (hover || rating)
                                    ? "active"
                                    : "inactive"
                            }
                            size={40}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        />
                    );
                })}
            </div>
        </StarRatingStyle>
    );
}
