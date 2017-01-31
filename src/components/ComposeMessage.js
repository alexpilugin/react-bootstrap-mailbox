import React, { Component } from 'react';
import { Glyphicon, Button} from 'react-bootstrap';

  class ComposeMessage extends Component {
    render() {
        return (
            <div className="ComposeMessage">
                <Button bsStyle="danger"  block>
                    <Glyphicon glyph="pencil"/>
                    <span className="pad-left-5">compose</span>
                </Button>
            </div>
        )
    }
  }

  export default ComposeMessage;