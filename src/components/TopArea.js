import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Well, Media, 
  Glyphicon, Button, DropdownButton, MenuItem, ListGroup, ListGroupItem, 
  Jumbotron, Tooltip, Popover, Badge, form, FormGroup, InputGroup, FormControl} from 'react-bootstrap';

class TopArea extends Component {
    render() {
        return (
            <div className="TopArea">
                <Row className="show-grid row-no-padding flex-row ">
                    <Col xs={3} lg={2} className="clr-9eabb2 bottom-pad-15 hidden-xs">
                        <div className="top-left-area">
                        <div className="top-user pull-left">
                        <div className="top-userIcon inline">
                            <Glyphicon glyph="user" className="clr-white"/>
                        </div>
                        <h5 className="clr-white inline ">UserName</h5>
                        </div>
                        <div className="pull-right hidden-xs">
                        <DropdownButton 
                            title="" 
                            className="outlinedWhite"
                            bsSize="small"
                            id="bg-nested-dropdown" >
                                <MenuItem eventKey="1">Dropdown link</MenuItem>
                                <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </DropdownButton> 
                        </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={9} lg={10} bsStyle="primary" className="clr-e8eff2 flex-col-vcenter"> 
                        <Row className="show-grid row-no-padding">
                        <Col xs={4} className="pull-left">
                            <div className=""> <h2>Inbox</h2> </div>
                        </Col>
                        <Col xs={8} sm={6} className="pull-right">
                            <div className="search-form-div">
                            <form>
                                <FormGroup>
                                <InputGroup>
                                    <FormControl type="text" />
                                    <InputGroup.Addon><Glyphicon glyph="search"/></InputGroup.Addon>
                                </InputGroup>
                                </FormGroup>
                            </form>
                            </div>
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default TopArea;

