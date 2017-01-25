import React, { Component } from 'react';
import {Tab, Nav, NavItem, Glyphicon, Badge} from 'react-bootstrap';

  class MassageFolders extends Component {
    render() {
        return (
            <div className="MassageFolders">
                <Tab.Container id="left-tabs-folder" defaultActiveKey="first">
                    <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="inbox">
                        <Glyphicon glyph="inbox" className="pad-right-5"/>
                        <span className="hidden-xs">Inbox</span><Badge className="pull-right">42</Badge>
                    </NavItem>
                    <NavItem eventKey="sent">
                        <Glyphicon glyph="envelope" className="pad-right-5"/>
                        <span className="hidden-xs">Sent</span><Badge className="pull-right">42</Badge>
                    </NavItem>
                    <NavItem eventKey="important">
                        <Glyphicon glyph="bookmark" className="pad-right-5"/>
                        <span className="hidden-xs">Important</span><Badge className="pull-right">0</Badge>
                    </NavItem>
                    <NavItem eventKey="draft">
                        <Glyphicon glyph="edit" className="pad-right-5"/>
                        <span className="hidden-xs">Drafts</span><Badge className="pull-right">0</Badge>
                    </NavItem>
                    <NavItem eventKey="trash">
                        <Glyphicon glyph="trash" className="pad-right-5"/>
                        <span className="hidden-xs">Trash</span><Badge className="pull-right">0</Badge>
                    </NavItem>
                    </Nav>
                </Tab.Container>
            </div>
        )
    }
  }

  export default MassageFolders;