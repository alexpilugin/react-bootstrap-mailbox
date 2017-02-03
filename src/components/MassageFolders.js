// eslint-disable-next-line
/* eslint-disable */
import React, { Component } from 'react';
import {
    Tab, Glyphicon, Badge,
    ListGroup, ListGroupItem, Collapse, Button,
} from 'react-bootstrap';

class MassageFolders extends Component {
    constructor(props) {
        super(props);
        var scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );
        this.state = {
            scrollWidth: scrollWidth,
            opend: false,
        };

        //React components using ES6 classes no longer autobind this to non React methods:
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    updateDimensions() {
        var scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );
        this.setState({ scrollWidth: scrollWidth });
        //console.log(scrollWidth);
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
        let panel = (
            <ListGroup id="demo">

                <ListGroupItem href="#">
                    <Glyphicon glyph="inbox" className="pad-right-5" />
                    <span>Inbox</span><Badge className="pull-right">42</Badge>
                </ListGroupItem>

                <ListGroupItem href="#">
                    <Glyphicon glyph="envelope" className="pad-right-5" />
                    <span>Sent</span><Badge className="pull-right">42</Badge>
                </ListGroupItem>

                <ListGroupItem href="#">
                    <Glyphicon glyph="bookmark" className="pad-right-5" />
                    <span>Important</span><Badge className="pull-right">0</Badge>
                </ListGroupItem>

                <ListGroupItem href="#">
                    <Glyphicon glyph="edit" className="pad-right-5" />
                    <span>Drafts</span><Badge className="pull-right">0</Badge>
                </ListGroupItem>

                <ListGroupItem href="#">
                    <Glyphicon glyph="trash" className="pad-right-5" />
                    <span>Trash</span><Badge className="pull-right">0</Badge>
                </ListGroupItem>

            </ListGroup>
        )

        /* Small Devices, Tablets */
        if (this.state.scrollWidth < 768) {
            return (
                <div className="MassageFolders" data-toggle="collapse" data-target="#demo" >
                    <Button block bsStyle="info" onClick={ () => this.setState( { opend: !this.state.opend } ) }>
                        <Glyphicon glyph="inbox" className="pad-right-5" />Mailboxes
                    </Button>
                    <Collapse in={this.state.opend}>
                        {panel}
                    </Collapse>
                </div>
            )
        } else {
            return (
                <div className="MassageFolders">
                    <Tab.Container id="left-tabs-folder" defaultActiveKey="first">
                        {panel}
                    </Tab.Container>
                </div>
            )
        }
    }
}

export default MassageFolders;