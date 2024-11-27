import React, { useEffect, useState } from 'react';
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const BookmarkButton = ({ title }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setIsBookmarked(storedBookmarks.includes(title));
  }, [title]);

  const handleBookmarkToggle = () => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    let updatedBookmarks;

    if (isBookmarked) {
      // Remove the bookmark
      updatedBookmarks = storedBookmarks.filter((item) => item !== title);
    } else {
      // Add the bookmark
      updatedBookmarks = [...storedBookmarks, title];
    }

    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button onClick={handleBookmarkToggle} className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`}>
        <div className="bg-white text-[#6e90cf] rounded-full border-4 border-[#6e90cf] hover:border-[#6d97e4] ease-in-out duration-300 p-2 hover:cursor-pointer">
          {isBookmarked ? (
            <FaBookmark color="#6e90cf" style={{ fontSize: "24px" }} />
          ) : (
            <FaRegBookmark color="#6e90cf" style={{ fontSize: "24px" }} />
          )}
        </div> , 
      </button>
    </div>
  );
};

export default BookmarkButton;