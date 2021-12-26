
import './App.css';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import DashBoard from './pages/DashBoard';
import Add from './pages/Add';
import ListItems from './pages/ListItems';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Router>
      <SideBar />
      <TopBar />
      <div className='container'>
      
      <Routes>
          <Route exact path={"/"} element= {<DashBoard />}>
            {/* <DashBoard /> */}
          </Route>
          <Route exact path={"/add"} element= {<Add />}>
            
          </Route>
          <Route path={"/listitems"} element = { <ListItems />}>
           
          </Route>
        </Routes>
        </div>
        </Router>
        </div>
     
      
   
  );
}

export default App;
