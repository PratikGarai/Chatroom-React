import React from 'react';
import MessageComponent from './MessageComponent';
import FlipMove from 'react-flip-move';

import '../css/MainComponent.css';

class MainComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        var components = this.props.messages.map( (obj, index) => <MessageComponent username={this.props.username} data={obj} key={obj.id} /> )
        return(
            <div className="main-body">
                <FlipMove>
                    {components}
                </FlipMove>
            </div>
        );
    }
}

export default MainComponent;