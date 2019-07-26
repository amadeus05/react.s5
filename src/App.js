import React from "react";
import { Switch, BrowserRouter, Route} from 'react-router-dom';
const App = () => {
    return (
        <div>
            <p>React here!</p>
            <BrowserRouter>

                <Switch>
                    <Route exact path='/' component={Home} />

                    <Route exact path='/sss' component={Address} />
                    <Route component={NotFound} />
                </Switch>

            </BrowserRouter>
        </div>
    );
};
const Home = () => (
    <h1> first </h1>);
const Address = () => (
    <h1> second !</h1>);
const NotFound = () => (
    <h1>404..</h1>);
export default App;
