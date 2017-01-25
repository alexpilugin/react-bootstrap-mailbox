import React, { Component } from 'react';
import ComposeMessage from './ComposeMessage';
import MassageFolders from './MassageFolders';
import { Grid, Row, Col, Panel, Well, Media, 
  Glyphicon, Button, DropdownButton, MenuItem, ListGroup, ListGroupItem, 
  Jumbotron, Tooltip, Popover, Badge, form, FormGroup, InputGroup, FormControl} from 'react-bootstrap';

  class LeftPanel extends Component {
    render() {
        return (
            <Col xs={3} lg={2} className="LeftPanel dotted-spaced">
                <ComposeMessage />
                <MassageFolders />
            </Col>
        )
    }
  }

  export default LeftPanel;