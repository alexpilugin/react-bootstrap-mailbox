import React, { Component } from 'react';
import './App.css';
import TopArea from './TopArea';
import BottomArea from './BottomArea';
import { Grid, Row, Col, Panel, Well, Media, 
  Glyphicon, Button, DropdownButton, MenuItem, ListGroup, ListGroupItem, 
  Jumbotron, Tooltip, Popover, Badge, form, FormGroup, InputGroup, FormControl} from 'react-bootstrap';

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
