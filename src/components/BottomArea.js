import React, { Component } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { Grid, Row, Col, Panel, Well, Media, 
  Glyphicon, Button, DropdownButton, MenuItem, ListGroup, ListGroupItem, 
  Jumbotron, Tooltip, Popover, Badge, form, FormGroup, InputGroup, FormControl} from 'react-bootstrap';

class BottomArea extends Component {
    render() {
        return (
            <Row className="show-grid row-no-padding flex-row ">
                <LeftPanel />
                <RightPanel />
            </Row>
        )
    }
}

export default BottomArea;