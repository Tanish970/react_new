import { useState } from 'react';

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let Likestyle = { color: 'red' }; // Define style outside the function for proper scope

    let toggle = () => {
        setIsLiked(!isLiked); // Correctly terminate the statement
    };

    return (
        <div>
            <p onClick={toggle}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={Likestyle}></i> // Apply style when liked
                ) : (
                    <i className="fa-regular fa-heart"></i> // No style when not liked
                )}
            </p>
        </div>
    );
}
