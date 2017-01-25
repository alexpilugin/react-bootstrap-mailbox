import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Well, Media, 
  Glyphicon, Button, DropdownButton, MenuItem, ListGroup, ListGroupItem, 
  Jumbotron, Tooltip, Popover, Badge, form, FormGroup, InputGroup, FormControl} from 'react-bootstrap';

  class ComposeMessage extends Component {
    render() {
        return (
            <div className="ComposeMessage">
                <Button bsStyle="danger"  block>
                    <Glyphicon glyph="pencil"/>
                    <span className="pad-left-5">compose</span>
                </Button>
            </div>
        )
    }
  }

  export default ComposeMessage;