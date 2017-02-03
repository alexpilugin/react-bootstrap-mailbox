// eslint-disable-next-line
/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import TopArea from './TopArea';
import BottomArea from './BottomArea';
import { Panel, Grid} from 'react-bootstrap';

class App extends Component {
  render() {
    const title = ( <h3>Panel title</h3> );
    return (
      <div className="App">
        <Panel className="no-padding">
          <Grid fluid={true}>
            <TopArea />
            <BottomArea />
          </Grid>
        </Panel>
      </div>
    );
  }
}

export default App;
