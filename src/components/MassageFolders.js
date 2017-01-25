import React, { Component } from 'react';
import {Tab, Nav, NavItem, Glyphicon} from 'react-bootstrap';

  class MassageFolders extends Component {
    render() {
        return (
            <div className="MassageFolders">
                <Tab.Container id="left-tabs-folder" defaultActiveKey="first">
                    <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="inbox">
                        <Glyphicon glyph="inbox" className="pad-right-5"/>
                        <span className="hidden-xs">Inbox</span>
                    </NavItem>
                    <NavItem eventKey="sent">
                        <Glyphicon glyph="envelope" className="pad-right-5"/>
                        <span className="hidden-xs">Sent</span>
                    </NavItem>
                    <NavItem eventKey="important">
                        <Glyphicon glyph="bookmark" className="pad-right-5"/>
                        <span className="hidden-xs">Important</span>
                    </NavItem>
                    <NavItem eventKey="draft">
                        <Glyphicon glyph="edit" className="pad-right-5"/>
                        <span className="hidden-xs">Drafts</span>
                    </NavItem>
                    <NavItem eventKey="trash">
                        <Glyphicon glyph="trash" className="pad-right-5"/>
                        <span className="hidden-xs">Trash</span>
                    </NavItem>
                    </Nav>
                </Tab.Container>
            </div>
        )
    }
  }

  export default MassageFolders;