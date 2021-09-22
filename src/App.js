import Navbar from './component/Navbar';
import UserList from './component/UserList';
import Header from './component/Header';
import AddUser from './component/AddUser';
import Error from './component/Error';
import EditUser from './component/EditUser';
import {BrowserRouter,Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
     <Navbar/>
     <Switch>
    <Route exact path="/" component={Header}/>
    <Route path="/add" component={AddUser}/>
    <Route path="/list" component={UserList}/>
    <Route path="/edit/:id" component={EditUser}/>
    <Route component={Error}/>
    </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
