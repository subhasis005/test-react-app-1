import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Postdetails from './pages/Postdetails';

class Myroute extends Component {
    render() {
        return (            
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/page1" component={Page1}></Route>
                <Route path="/page2" component={Page2}></Route>
                <Route path="/page3" component={Page3}></Route>
                <Route path="/page4" component={Page4}></Route>
                <Route exact path="/post/:id" component={Postdetails} />
                <Route component={Notfound}/>
            </Switch>
        );
    }
}

export default Myroute;