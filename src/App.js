import logo from './logo.svg';
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>
            {/*<Users/>*/}
            {/*<Posts/>*/}
            <Router>
                <Link to={'/users'}>Users</Link>
                <br/>
                <Link to={'/posts'}>Posts</Link>
                <Switch>
                    <Route  path={'/users'} render={() => (<Users/>)}/>
                    <Route  path={'/posts'} render={() => (<Posts/>)}/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
