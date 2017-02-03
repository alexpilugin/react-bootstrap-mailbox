// eslint-disable-next-line
/* eslint-disable */
import React, { Component } from 'react';
import ComposeMessage from './ComposeMessage';
import MassageFolders from './MassageFolders';
import { Col} from 'react-bootstrap';

  class LeftPanel extends Component {
    render() {
        return (
            <Col xs={12} sm={3} lg={2} className="LeftPanel dotted-spaced">
                <ComposeMessage />
                <MassageFolders />
            </Col>
        )
    }
  }

  export default LeftPanel; 