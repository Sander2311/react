import Header from './Header/Header';
import MainTitle from './MainTitle/MainTitle';
import Sessions from './Sessions/Sessions';
import Reviews from './Reviews/Reviews';
import About from './About/About';
import Cost from "./Cost/Cost"
import Map from "./Map/Map";
import Comments from "./comments/Comments"

const Homepage = () =>{
    return(
    <div>
        <Header />
        <MainTitle />
        <Sessions />
        <Reviews />
        <About />
        <Cost />
        <Map />
        <Comments
            commentsUrl="http://localhost:3004/comments"
            currentUserId="1"
        />
    </div>
    )
}

export default Homepage;