import React, { Component } from 'react';
import {Checkbox, Glyphicon, Label, Row, Col} from 'react-bootstrap';

class MsgSingleLine extends Component {
    render() {
        return (
            <div className="MsgSingleLine">
                <Row className="show-grid row-no-padding flex-row flex-col-vcenter hline">
                    <Col xs={1} className="hidden-xs" > 
                        <Checkbox className="inline"/>
                    </Col>
                    <Col xs={1} className="visible-lg visible-xl"> 
                        <Glyphicon glyph="star-empty" />
                    </Col>
                    <Col xs={2} className=" visible-lg visible-lg visible-xl"> 
                        <div className="inline">Sender</div>
                    </Col>
                    <Col xs={11} sm={8} lg={4}> 
                        <div className="inline pull-left">Subject</div>
                    </Col> 
                    <Col xs={1}> 
                        <Glyphicon glyph="menu-right" className="inline visible-xs pull-right" />
                    </Col>
                    <Col xs={1}> 
                        <Label bsStyle="danger" className="visible-lg visible-xl">urgent!</Label>
                    </Col>
                    <Col xs={1} className="visible-lg visible-xl"> 
                        <Glyphicon glyph="paperclip" className="inline"/>
                    </Col>                   
                    <Col xs={1} md={1}className="pull-right visible-md visible-lg visible-xl"> 
                        <div>Date</div>
                    </Col> 
                </Row>
            </div>
        )
    }
  }


export default MsgSingleLine;