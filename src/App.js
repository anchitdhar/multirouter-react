import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Contact} from './Pages/Contact';
import {Trail} from './Pages/Trail';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/Navigation';
import {Jumbotron} from './components/Jumbotron';


class App extends Component{
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Trail} />
          </Switch>
          </Router>
          </Layout>
      </React.Fragment>
        
    );
  }
}

export default App;
