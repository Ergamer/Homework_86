import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Artists from "./containers/Artists/Artists";
import Layout from "./containers/Layout/Layout";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import TrackHistory from "./containers/TrackHistory/TrackHistory";


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Artists}/>
                    <Route path="/artists/:id" exact component={Albums}/>
                    <Route path="/albums/:id" exact component={Tracks}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/track_history" exact component={TrackHistory}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
