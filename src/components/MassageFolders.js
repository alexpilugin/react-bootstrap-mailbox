import React, { Component } from 'react';
import {Tab, Nav, NavItem, MenuItem, Glyphicon, Badge} from 'react-bootstrap';

  class MassageFolders extends Component {
    render() {
        return (
            <div className="MassageFolders">
                <Tab.Container id="left-tabs-folder" defaultActiveKey="first">
                    <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="inbox">
                        <Glyphicon glyph="inbox" className="pad-right-5"/>
                        <span>Inbox</span><Badge className="pull-right">42</Badge>
                    </NavItem>

                    <NavItem eventKey="sent" className="hline">
                        <Glyphicon glyph="envelope" className="pad-right-5"/>
                        <span>Sent</span><Badge className="pull-right">42</Badge>
                    </NavItem>

                    <NavItem eventKey="important" className="hline">
                        <Glyphicon glyph="bookmark" className="pad-right-5"/>
                        <span>Important</span><Badge className="pull-right">0</Badge>
                    </NavItem>

                    <NavItem eventKey="draft" className="hline">
                        <Glyphicon glyph="edit" className="pad-right-5"/>
                        <span>Drafts</span><Badge className="pull-right">0</Badge>
                    </NavItem>

                    <NavItem eventKey="trash" className="hline">
                        <Glyphicon glyph="trash" className="pad-right-5"/>
                        <span>Trash</span><Badge className="pull-right">0</Badge>
                    </NavItem>
                    </Nav>
                </Tab.Container>
            </div>
        )
    }
  }

  export default MassageFolders;