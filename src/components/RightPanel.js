import React, { Component } from 'react';
import ControlsLine from './ControlsLine';
import MsgSingleLine from './MsgSingleLine';
import { Grid, Row, Col, Panel, Well, Media, 
  Glyphicon, Button, DropdownButton, MenuItem, ListGroup, ListGroupItem, 
  Jumbotron, Tooltip, Popover, Badge, form, FormGroup, InputGroup, FormControl} from 'react-bootstrap';

  class RightPanel extends Component {
    render() {
        return (
            <Col xs={9} lg={10} bsStyle="primary" className="RightPanel"> 
                <ControlsLine />
                <MsgSingleLine />
                <MsgSingleLine />
                <MsgSingleLine />
                <MsgSingleLine />
            </Col>
        )
    }
  }

  export default RightPanel;