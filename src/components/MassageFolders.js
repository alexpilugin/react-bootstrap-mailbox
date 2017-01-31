import React, { Component } from 'react';
import {Tab, Nav, NavItem, Glyphicon, Badge,
    ListGroup, ListGroupItem, Accordion, Panel} from 'react-bootstrap';

  class MassageFolders extends Component {
    constructor(props) {
        super(props);
        var scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );
        this.state = {scrollWidth: scrollWidth};

        //React components using ES6 classes no longer autobind this to non React methods. In your constructor, add:
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    updateDimensions() {
        var scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );
        this.setState({scrollWidth: scrollWidth});
        console.log(scrollWidth);
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    render() {

        /* Small Devices, Tablets */
        if (this.state.scrollWidth < 768) {
            return (
                <div className="MassageFolders" data-toggle="collapse" data-target="#demo" >
                <Accordion eventKey="1">
                    <Panel header="Mailboxes" eventKey="1">
                        <ListGroup id="demo">

                        <ListGroupItem href="#">
                            <Glyphicon glyph="inbox" className="pad-right-5"/>
                            <span>Inbox</span><Badge className="pull-right">42</Badge>
                        </ListGroupItem>

                        <ListGroupItem href="#">
                            <Glyphicon glyph="envelope" className="pad-right-5"/>
                            <span>Sent</span><Badge className="pull-right">42</Badge>
                        </ListGroupItem>

                        <ListGroupItem href="#">
                            <Glyphicon glyph="envelope" className="pad-right-5"/>
                            <span>Sent</span><Badge className="pull-right">42</Badge>
                        </ListGroupItem>

                        <ListGroupItem href="#">
                            <Glyphicon glyph="bookmark" className="pad-right-5"/>
                            <span>Important</span><Badge className="pull-right">0</Badge>
                        </ListGroupItem>

                        <ListGroupItem href="#">
                            <Glyphicon glyph="edit" className="pad-right-5"/>
                            <span>Drafts</span><Badge className="pull-right">0</Badge>
                        </ListGroupItem>

                        <ListGroupItem href="#">
                            <Glyphicon glyph="trash" className="pad-right-5"/>
                            <span>Trash</span><Badge className="pull-right">0</Badge>
                        </ListGroupItem>

                    </ListGroup> 
                    </Panel>
                    </Accordion>
                </div>  
            )
        } else {
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
  }

  export default MassageFolders;