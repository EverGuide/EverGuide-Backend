import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./views/Headers";
import Main from "./views/Main";
import Search from "./views/Search";
import Userform from "./views/Userform";
import SearchRes from "./views/SearchRes";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/Search" element={<Search />} />
                <Route exact path="/Userform" element={<Userform/>}/>
                <Route exact path="/SearchRes" element={<SearchRes/>}/>
            </Routes>
        </div>
    );
}

export default App;