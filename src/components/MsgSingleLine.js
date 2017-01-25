import React, { Component } from 'react';
import {Checkbox, Glyphicon, Label, Row, Col} from 'react-bootstrap';

class MsgSingleLine extends Component {
    render() {
        return (
            <div className="MsgSingleLine">
            <Row className="show-grid row-no-padding flex-row flex-col-vcenter">
                <Col xs={1} > 
                    <Checkbox className="inline"/>
                </Col>
                <Col xs={1}> 
                    <Glyphicon glyph="star-empty" />
                </Col>
                <Col xs={2}> 
                    <div className="inline">Sender</div>
                </Col>
                <Col xs={4}> 
                    <div className="inline">Subject</div>
                </Col> 
                <Col xs={1}> 
                    <Label bsStyle="danger" className="visible-lg visible-xl">urgent!</Label>
                </Col>
                <Col xs={1}> 
                    <Glyphicon glyph="paperclip" className="inline"/>
                </Col>                   
                <Col xs={1} className="pull-right"> 
                    <div>Date</div>
                </Col> 
            </Row>
            <div className="hline"></div>
            </div>
        )
    }
  }


export default MsgSingleLine;