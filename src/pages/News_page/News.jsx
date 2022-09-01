import React from 'react';
import Header from '../Homepage/Header/Header';
import Comments from '../Homepage/comments/Comments';
import News_Compon from './News/News_compon';

const News = () => {
    return ( 
        <div>
            <Header></Header>
            <News_Compon></News_Compon>
            <Comments></Comments>
        </div>
     );
}
 
export default News;