import { Routes, Route} from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Session_page from "./pages/Sessions_page/Sessions";
import Review from "./pages/Reviews_page/Reviews";
import Contact from "./pages/Contact_page/Contact";
import News from "./pages/News_page/News";

import styles from "./App.module.scss"


function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Sessions' element={<Session_page />} />
        <Route path='/Reviews' element={<Review />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/News' element={<News />} /> 
      </Routes>
    </div>
  );
}

export default App;
