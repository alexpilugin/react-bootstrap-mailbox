// eslint-disable-next-line
/* eslint-disable */
import React, { Component } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { Row } from 'react-bootstrap';

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