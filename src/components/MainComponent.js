import React from 'react';
import MessageComponent from './MessageComponent';
import FlipMove from 'react-flip-move';

class MainComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const components = this.props.messages.map( (obj, index) => <MessageComponent username={this.props.username} data={obj} key={index} /> ); 
        return(
            <div>
                There are {this.props.messages.length} message here.<br /><hr/>
                <FlipMove>
                    {components}
                </FlipMove>
                <hr />
            </div>
        );
    }
}

export default MainComponent;