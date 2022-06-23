import React from 'react';
import Header from '../Homepage/Header/Header';
import Review from '../Homepage/Reviews/Reviews';
import Comments from '../Homepage/comments/Comments';

const Reviews = () => {
    return (
        <div>
            <Header />
            <Review />
            <Comments/>
        </div>
    );
};

export default Reviews;