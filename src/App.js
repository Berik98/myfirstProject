import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile post = {props.post}/> }/>
                    <Route path='/dialogs' render={() => <Dialogs messageData = {props.messagesData} dialogsData = {props.dialogsData} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
