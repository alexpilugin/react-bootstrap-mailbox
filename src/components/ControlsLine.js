// eslint-disable-next-line
/* eslint-disable */
import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Well, Media, 
  Glyphicon, Button, ButtonGroup, ButtonToolbar, DropdownButton, MenuItem, ListGroup, ListGroupItem, 
  Label, Tooltip, Pager, Badge, form, FormGroup, InputGroup, Dropdown, Checkbox} from 'react-bootstrap';

class ControlsLine extends Component {
    render() {
        return (
            <Row className="show-grid row-no-padding flex-row ">
                <Col xs={6} className="pull-left"> 
                    <div className="ControlsLine">
                        <ButtonToolbar> 
                            <Dropdown id="dropdown-custom-1" className="hidden-xs">
                                <Dropdown.Toggle>
                                    <Checkbox className="inline"/>
                                    all
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <MenuItem eventKey="1">Action</MenuItem>
                                    <MenuItem eventKey="2">Another action</MenuItem>
                                    <MenuItem eventKey="3" active>Active Item</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey="4">Separated link</MenuItem>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Button>
                                <Glyphicon glyph="refresh" />
                            </Button>

                            <DropdownButton bsStyle={'default'} 
                                title={'more'} 
                                id={`dropdown-basic`}
                                className="hidden-sm hidden-xs">
                                    <MenuItem eventKey="1">Action</MenuItem>
                                    <MenuItem eventKey="2">Another action</MenuItem>
                            </DropdownButton>

                            <Dropdown id="dropdown-custom-2" className="hidden-sm hidden-xs">
                                <Dropdown.Toggle>
                                    <Glyphicon glyph="tag" />
                                    <span className="pad-left-5">labels</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <MenuItem eventKey="1"><Checkbox className="inline"/>Label A</MenuItem>
                                    <MenuItem eventKey="2"><Checkbox className="inline"/>Label B</MenuItem>
                                    <MenuItem eventKey="3"><Checkbox className="inline"/>Label C</MenuItem>
                                </Dropdown.Menu>
                            </Dropdown>

                        </ButtonToolbar>
                    </div>
                </Col>
                <Col xs={6} sm={5} smOffset={1} className="pull-right"> 
                    <div className="ControlsLine">
                        <Pager className="no-pad">
                            <span className="inline hidden-xs"> 25 from 100 </span> 
                            <Pager.Item disabled href="#">&larr;</Pager.Item>
                            <Pager.Item href="#">&rarr;</Pager.Item>
                        </Pager> 
                    </div>
                </Col>
            </Row>
        )
    }
  }

  export default ControlsLine;
