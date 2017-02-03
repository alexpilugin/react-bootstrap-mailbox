// eslint-disable-next-line
/* eslint-disable */
import React, { Component } from 'react';
import ControlsLine from './ControlsLine';
import MsgSingleLine from './MsgSingleLine';
import { Col} from 'react-bootstrap';

  class RightPanel extends Component {
    render() {
        return (
            <Col xs={12} sm={9} lg={10} bsStyle="primary" className="RightPanel"> 
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